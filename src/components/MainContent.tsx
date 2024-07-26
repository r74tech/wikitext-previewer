import React, { useEffect, useRef, useCallback } from 'react';
import EditForm from './EditForm';
import { useSelector } from 'react-redux';
import { selectPage } from '@src/features/pages/pagesSlice';
import { useWorker } from '@src/utils/worker';
import wikidotmodule from '@src/utils/module';

const MainContent: React.FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const stylesRef = useRef<HTMLDivElement>(null);
    const { postMessage, handleWorkerMessage } = useWorker();
    const page = useSelector(selectPage);

    const handleMessage = useCallback((event: { html: string, styles: string, type: string }) => {
        const { html, styles, type } = event;
        console.debug('MainContent received message:', event);
        if (type === 'page' && contentRef.current) {
            contentRef.current.innerHTML = html;
        }
        if (styles && stylesRef.current) {
            stylesRef.current.innerHTML = styles;
        }

        wikidotmodule();
    }, []);

    useEffect(() => {
        handleWorkerMessage(handleMessage);
        console.debug('Setting handleWorkerMessage in MainContent');

        if (page) {
            console.debug('Sending initial page data to worker:', page.source);
            postMessage({ value: page.source, type: 'page' });
        }
    }, [page, postMessage, handleWorkerMessage, handleMessage]);

    return (
        <div id="content-wrap">
            <div id="side-bar"></div>
            <div id="main-content">
                <div id="page-title">{page?.title}</div>
                <div id="page-styles" ref={stylesRef} />
                <div id="page-content" ref={contentRef} />
                <div id="page-info-break">
                    <div id="page-info"></div>
                </div>
                <div id="action-area" style={{ display: 'block' }}>
                    <EditForm postMessage={postMessage} />
                </div>
            </div>
        </div>
    );
};

export default MainContent;
