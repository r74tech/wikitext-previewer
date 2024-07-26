import { useRef, useEffect, useCallback } from 'react';

export const useWorker = () => {
    const workerRef = useRef<Worker | null>(null);
    const messageHandlerRef = useRef<((event: { html: string, styles: string, type: string }) => void) | null>(null);

    useEffect(() => {
        workerRef.current = new Worker("../ftml.web.worker.js", { type: 'module' });
        console.debug('Worker initialized');

        workerRef.current.onmessage = (event) => {
            console.debug('Worker received message:', event.data);
            const { html, styles, type } = event.data;
            const cleanedHtml = html.replace(/<wj-body class="wj-body">/g, '').replace(/<\/wj-body>/g, '');
            const cleanedStyles = styles.map((v: string) => `<style>\n${v.replace(/</g, '&lt;')}\n</style>`).join('\n\n');

            if (messageHandlerRef.current) {
                console.debug('Calling message handler');
                messageHandlerRef.current({ html: cleanedHtml, styles: cleanedStyles, type });
            } else {
                console.debug('No message handler registered');
            }
        };

        return () => {
            console.debug('Worker terminated');
            workerRef.current?.terminate();
        };
    }, []);

    const handleWorkerMessage = useCallback((handler: (event: { html: string, styles: string, type: string }) => void) => {
        messageHandlerRef.current = handler;
        console.debug('Message handler set in useWorker:', handler);
    }, []);

    const postMessage = useCallback((message: any) => {
        console.debug('Posting message to worker:', message);
        workerRef.current?.postMessage(message);
    }, []);

    return { postMessage, handleWorkerMessage };
};
