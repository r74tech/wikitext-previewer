export interface Page {
    shortId: string;
    title: string;
    source: string;
    revisionCount: number;
    updateAt: string;
    updateBy: string;
    isLocked?: boolean;
}