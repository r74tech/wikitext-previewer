import React, { useCallback, useState } from 'react';
import {
    selectPage,
    createPage,
    updatePage,
    setPageFailure,
} from '@src/features/pages/pagesSlice';
import { useAppDispatch } from '@src/app/store';

const EditForm: React.FC = () => {
    const [title, setTitle] = useState('メイン');
    const [source, setSource] = useState('');
    const [saveBtn, setSaveBtn] = useState<boolean>(false);

    const dispatch = useAppDispatch();

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
            dispatch(
                createPage(
                    title as string,
                    source as string,
                    "admin",
                    {
                        onSuccess,
                        onFailure,
                    },
                ),
            );
        },
        [dispatch, title, source],
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
