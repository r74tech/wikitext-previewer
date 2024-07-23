import { useRef, useEffect, useCallback } from 'react';
import wikidotmodule from './module';

export const useWorker = () => {
    const workerRef = useRef<Worker | null>(null);

    useEffect(() => {
        workerRef.current = new Worker("../ftml.web.worker.js", { type: 'module' });
        return () => workerRef.current?.terminate();
    }, []);

    const setInnerHtml = useCallback((element: HTMLElement | null, content: string) => {
        if (element) {
            element.innerHTML = content;
        }
    }, []);

    const handleMessage = useCallback((event: MessageEvent) => {
        const { html, styles, type } = event.data;
        const contentMapping = {
            page: 'page-content',
            side: 'side-bar',
            top: 'top-bar',
        };
        const targetContent = document.getElementById(contentMapping[type as keyof typeof contentMapping]) || document.getElementById('page-content');
        const cleanedHtml = html.replace(/<wj-body class="wj-body">/g, '').replace(/<\/wj-body>/g, '');
        const pageStyles = document.getElementById('page-styles');
        if (styles.length > 0 && pageStyles) {
            setInnerHtml(
                pageStyles,
                styles.map((v: string) => `<style>\n${v.replace(/</g, '&lt;')}\n</style>`).join('\n\n')
            );
        }

        setInnerHtml(targetContent, cleanedHtml);
        wikidotmodule();
    }, [setInnerHtml]);

    useEffect(() => {
        const worker = workerRef.current;
        if (worker) {
            worker.onmessage = handleMessage;
        }
    }, [handleMessage]);

    const postMessage = useCallback((message: any) => {
        workerRef.current?.postMessage(message);
    }, []);

    return { postMessage };
};