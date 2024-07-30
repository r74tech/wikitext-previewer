import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createPage, updatePage, setPageFailure } from '@src/features/pages/pagesSlice';
import { Page } from '@src/models/page';
import { useAppDispatch } from '@src/app/store';
import { savePageData } from '@src/utils/indexedDBHelpers';
import { fetchMe, saveMeThunk, selectUser } from '@src/features/user/userSlice';
import { generateNanoid } from '@src/utils/nanoid';
import { useSelector } from 'react-redux';

interface EditFormProps {
    postMessage: (message: any) => void;
    page: Page | null;
    isSaving?: boolean; // DB saving status (IDB: false, API: true)
    onSaveSuccess: (savedPage: Page) => void; // Callback function to handle save success
}

const EditForm: React.FC<EditFormProps> = ({ postMessage, page, isSaving, onSaveSuccess }) => {
    const { shortId } = useParams<{ shortId: string }>();
    const [title, setTitle] = useState(page?.title || '');
    const [source, setSource] = useState(page?.source || '');
    const [saveBtn, setSaveBtn] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);
    const currentShortId = shortId;
    const me = useSelector(selectUser);

    useEffect(() => {
        if (page) {
            setTitle(page.title);
            setSource(page.source);
        }
    }, [page]);

    useEffect(() => {
        if (source && typingTimeout === null) {
            console.debug('postMessage from EditForm:', source);
            postMessage({ value: source, type: 'page' });
        }
    }, [source, typingTimeout, postMessage]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await dispatch(fetchMe()).unwrap();
                if (!user) {
                    const newUser = { username: generateNanoid() };
                    await dispatch(saveMeThunk(newUser));
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };
        fetchUser();
    }, [dispatch]);

    const handleInputChange = (setter) => (e) => {
        const value = e.target.value;
        setter(value);
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }
        setTypingTimeout(setTimeout(() => {
            savePageData({ shortId: currentShortId, title, source });
            postMessage({ value: source, type: 'page' });
            setTypingTimeout(null);
        }, 1000));
    };

    const onSuccess = (savedPage: Page) => {
        setSaveBtn(false);
        dispatch(setPageFailure({ errors: [] }));
        onSaveSuccess(savedPage);
    };

    const onFailure = () => {
        setSaveBtn(false);
    };

    const onSaveBtn = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setSaveBtn(true);

            let createdBy = me ? me.username : null;
            if (!createdBy) {
                const newUser = { username: generateNanoid() };
                await dispatch(saveMeThunk(newUser));
                createdBy = newUser.username;
            }

            if (currentShortId) {
                dispatch(
                    updatePage(
                        currentShortId,
                        title,
                        source,
                        createdBy,
                        {
                            onSuccess: (savedPage: Page) => onSuccess(savedPage),
                            onFailure,
                        },
                    ),
                );
            } else {
                dispatch(
                    createPage(
                        title,
                        source,
                        createdBy,
                        {
                            onSuccess: (savedPage: Page) => onSuccess(savedPage),
                            onFailure,
                        },
                    ),
                );
            }
        },
        [dispatch, currentShortId, title, source, me, onSuccess, onFailure],
    );

    return (
        <>
            <h1>Edit the page</h1>
            <div>
                <form id="edit-page-form" name="edit-page-form" onSubmit={onSaveBtn}>
                    <table className="form" style={{ margin: '0.5em auto 1em 0' }}>
                        <tbody>
                            <tr>
                                <td>Title of the page:</td>
                                <td>
                                    <input
                                        className="text"
                                        id="edit-page-title"
                                        maxLength={128}
                                        name="title"
                                        size={35}
                                        style={{ fontWeight: 'bold', fontSize: '130%' }}
                                        type="text"
                                        value={title}
                                        onChange={handleInputChange(setTitle)}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <textarea
                            cols={60}
                            id="edit-page-textarea"
                            name="source"
                            rows={20}
                            style={{ width: '95%' }}
                            value={source}
                            onChange={handleInputChange(setSource)}
                        ></textarea>
                    </div>
                    <div className="buttons alignleft">
                        <button className="btn btn-primary" id="edit-save-button" name="save" type='submit' value="Save">
                            {saveBtn ? 'Saving...' : 'Save'}
                        </button>
                    </div>
                </form>
                {
                    saveBtn && (
                        <>
                            <div style={{ position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, bottom: 0, right: 0, background: 'rgba(0, 0, 0, 0.5)', zIndex: 100 }}>
                                <div style={{ position: 'absolute', top: '50%', left: 'calc(50% - 100px - 2rem)', background: 'white', border: '1px solid #ddd', zIndex: 101, width: '200px', padding: '0 4rem' }}>
                                    <p>Saving Page...</p>
                                    <div className='wait-progress'></div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    );
};

export default EditForm;
