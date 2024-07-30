import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import EditForm from './EditForm';
import { selectPage } from '@src/features/pages/pagesSlice';
import { useWorker } from '@src/utils/worker';
import { getPageData, listPageData } from '@src/utils/indexedDBHelpers';
import wikidotmodule from '@src/utils/module';
import SideBar from '@src/components/SideBar';
import { Page } from '@src/models/page';

const MainContent: React.FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const stylesRef = useRef<HTMLDivElement>(null);
    const { postMessage, handleWorkerMessage } = useWorker();
    const page = useSelector(selectPage);
    const dispatch = useDispatch();
    const { shortId } = useParams<{ shortId: string }>();
    const navigate = useNavigate();
    const [selectedPage, setSelectedPage] = useState(page);
    const [isSaving, setIsSaving] = useState(true); // DB saving status (IDB: false, API: true)
    const [idbPages, setIdbPages] = useState<Page[]>([]);

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
        const fetchData = async () => {
            // if (!shortId) return;
            const indexedDBData = await getPageData(shortId);

            if (page) {
                if (indexedDBData && indexedDBData.timestamp > new Date(page.updatedAt).getTime()) {
                    postMessage({ value: indexedDBData.source, type: 'page' });
                    setSelectedPage(indexedDBData);
                    setIsSaving(false); // IDBが優先される場合
                } else {
                    postMessage({ value: page.source, type: 'page' });
                    setSelectedPage(page);
                    setIsSaving(true); // APIが優先される場合
                }
            } else if (indexedDBData) {
                postMessage({ value: indexedDBData.source, type: 'page' });
                setSelectedPage(indexedDBData);
                setIsSaving(false); // IDBが優先される場合
            }

            const allPages = await listPageData();
            setIdbPages(allPages);
        };

        fetchData();
        handleWorkerMessage(handleMessage);
        console.debug('Setting handleWorkerMessage in MainContent');
    }, [page, postMessage, handleWorkerMessage, handleMessage, shortId]);

    const handleSaveSuccess = (savedPage: Page) => {
        setSelectedPage(savedPage);
        if (!shortId) {
            // Createの場合はリダイレクト
            navigate(`/share/${savedPage.shortId}`);
        }
        postMessage({ value: savedPage.source, type: 'page' });
        setIsSaving(false);
    };

    return (
        <div id="content-wrap">
            <div id="side-bar">
                <SideBar />
            </div>
            <div id="main-content">
                <div id="page-title">{selectedPage?.title}</div>
                <div id="page-styles" ref={stylesRef} />
                <div id="page-content" ref={contentRef} />
                <div id="page-info-break">
                    <div id="page-info"></div>
                </div>
                <div id="action-area" style={{ display: 'block' }}>
                    <EditForm postMessage={postMessage} page={selectedPage} isSaving={isSaving} onSaveSuccess={handleSaveSuccess} />
                    <div className="idb-pages-list" style={{ marginTop: '2em' }}>
                        <h2>Saved Pages</h2>
                        <ul>
                            {idbPages.map((idbPage) => (
                                <li key={idbPage.shortId}>
                                    <a href={idbPage.url}>{idbPage.title}</a> - Last updated: {new Date(idbPage.timestamp).toLocaleString()}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
