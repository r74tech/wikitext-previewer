import { openDB } from 'idb';

const DB_NAME = 'PageDB';
const STORE_NAME = 'pages';
const DB_VERSION = 1;

export const initDB = async () => {
    return openDB(DB_NAME, DB_VERSION, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'shortId' });
            }
        },
    });
};

type PageData = {
    shortId?: string;
    title: string;
    source: string;
};

export const savePageData = async ({ shortId = "root", title, source }: PageData) => {
    const db = await initDB();
    const timestamp = Date.now();
    await db.put(STORE_NAME, { shortId, title, source, timestamp });
};

export const getPageData = async (shortId: string = "root") => {
    const db = await initDB();
    return db.get(STORE_NAME, shortId);
};
