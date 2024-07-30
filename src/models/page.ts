export interface Page {
    shortId: string;
    title: string;
    source: string;
    revisionCount: number;
    updatedAt: string;
    updatedBy: string;
    isLocked?: boolean;
}

export interface IDBPage {
    shortId: string;
    title: string;
    source: string;
    timestamp: number;
    url: string;
}