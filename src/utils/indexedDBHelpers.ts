import { openDB } from 'idb';

const DB_NAME = 'PageDB';
const STORE_NAME = 'pages';
const STORE_CONFIG = 'config';
const DB_VERSION = 1;

type PageData = {
    shortId?: string;
    title: string;
    source: string;
};

export const initDB = async () => {
    return openDB(DB_NAME, DB_VERSION, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'shortId' });
            }
            if (!db.objectStoreNames.contains(STORE_CONFIG)) {
                db.createObjectStore(STORE_CONFIG, { keyPath: 'key' });
            }
        },
    });
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

export const listPageData = async () => {
    const db = await initDB();
    const pages = await db.getAll(STORE_NAME);
    return pages.map(page => {
        if (page.shortId === "root") {
            page.url = "/";
        } else {
            page.url = `/share/${page.shortId}`;
        }
        return page;
    });
};

export const getMe = async () => {
    const db = await initDB();
    return db.get(STORE_CONFIG, 'me');
};

export const saveMe = async (me: any) => {
    const db = await initDB();
    await db.put(STORE_CONFIG, { key: 'me', ...me });
};
