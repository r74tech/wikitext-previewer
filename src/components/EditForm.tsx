import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    selectPage,
    createPage,
    updatePage,
    setPageFailure,
} from '@src/features/pages/pagesSlice';
import { useAppDispatch } from '@src/app/store';

interface EditFormProps {
    postMessage: (message: any) => void;
}

const EditForm: React.FC<EditFormProps> = ({ postMessage }) => {
    const { shortId } = useParams<{ shortId: string }>();
    const page = useSelector(selectPage);
    const [title, setTitle] = useState('');
    const [source, setSource] = useState('');
    const [saveBtn, setSaveBtn] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (page) {
            setTitle(page.title);
            setSource(page.source);
        }
    }, [page]);

    useEffect(() => {
        if (source) {
            console.debug('postMessage from EditForm:', source);
            postMessage({ value: source, type: 'page' });
        }
    }, [source, postMessage]);

    const onSuccess = () => {
        setSaveBtn(false);
        dispatch(setPageFailure({ errors: [] }));
    };

    const onFailure = () => {
        setSaveBtn(false);
    };

    const onSaveBtn = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setSaveBtn(true);

            if (shortId && page) {
                dispatch(
                    updatePage(
                        shortId,
                        title,
                        source,
                        "anonymous",
                        {
                            onSuccess,
                            onFailure,
                        },
                    ),
                );
            } else {
                dispatch(
                    createPage(
                        title,
                        source,
                        "anonymous",
                        {
                            onSuccess,
                            onFailure,
                        },
                    ),
                );
            }
        },
        [dispatch, shortId, page, title, source],
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
                                        onChange={(e) => setTitle(e.target.value)}
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
                            onChange={(e) => setSource(e.target.value)}
                        ></textarea>
                    </div>
                    <table className="edit-page-bottomtable" style={{ padding: '2px 0', border: 'none' }}>
                        <tbody>
                            <tr>
                                {/* <td style={{ border: 'none', padding: '0 5px' }}>
                                <div className="alert alert-info" id="lock-info">
                                    
                                </div>
                            </td> */}
                            </tr>
                        </tbody>
                    </table>
                    <div className="buttons alignleft">
                        {/* <input className="btn btn-default" id="edit-diff-button" name="diff" type="button" value="Show Changes" onClick={handleDiff} /> */}
                        <button className="btn btn-primary" id="edit-save-button" name="save" type='submit' value="Save">
                            {saveBtn ? 'Saving...' : 'Save'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditForm;
