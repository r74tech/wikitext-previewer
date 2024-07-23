import React, { useEffect, useState } from 'react';
import EditForm from './EditForm';
import {
    selectPage,
    fetchPageThunk,
    setPageFailure,
} from '@src/features/pages/pagesSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@src/app/store';
import { useWorker } from '@src/utils/worker';

const MainContent: React.FC = () => {
    const [content, setContent] = useState('loading...');
    const { postMessage } = useWorker();
    const page = useSelector(selectPage);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPageFailure({}));
        dispatch(
            fetchPageThunk({ shortId: 'mnfat7kghUk2XRwyqQLY8' }),
        );
    }, [dispatch]);

    useEffect(() => {
        if (page) {
            setContent(page.source);
            postMessage({ value: page.source, type: 'page' });
        }
    }, [page, postMessage]);


    return (
        <div id="content-wrap">
            <div id="side-bar"></div>
            <div id="main-content">
                <div id="page-title"></div>
                <div id="page-content"></div>
                <div id="page-info-break">
                    <div id="page-styles"></div>
                    <div id="page-info"></div>
                </div>
                <div id="action-area" style={{ display: 'block' }}>
                    <EditForm />
                </div>
            </div>
        </div>
    );
};

export default MainContent;