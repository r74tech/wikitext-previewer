import axios from 'axios';
import { baseUrl } from '@src/api/baseRequest';

import { Page } from '@src/models/page';

export type PageResponse = {
    data: Page;
    error: string;
};

type GetPageParams = {
    shortId: string;
};

type PostPageParams = {
    title: string;
    source: string;
    createdBy: string;
    isLocked?: boolean;
};

type PatchPageParams = {
    shortId: string;
    title: string;
    source: string;
    createdBy: string;
    isLocked?: boolean;
};

export async function getPage({ shortId }: GetPageParams): Promise<PageResponse | null> {
    const url = `${baseUrl}/data/${shortId}`;
    const PageResponse = await axios.get<PageResponse>(url);
    return PageResponse.data;
}

export async function postPage({ title, source, createdBy }: PostPageParams): Promise<PageResponse | null> {
    const url = `${baseUrl}/data`;
    const PageResponse = await axios.post<PageResponse>(url, { title, source, createdBy });
    return PageResponse.data;
}

export async function patchPage({shortId, title, source, createdBy}: PatchPageParams): Promise<PageResponse | null> {
    const url = `${baseUrl}/data/${shortId}`;
    const PageResponse = await axios.patch<PageResponse>(url, { title, source, createdBy });
    return PageResponse.data;
}


export async function getHistory(shortId: string): Promise<PageResponse | null> {
    const url = `${baseUrl}/data/${shortId}/history`;
    const PageResponse = await axios.get<PageResponse>(url);
    return PageResponse.data;
}

export async function getRevisionPage(shortId: string, revisionId: number): Promise<PageResponse | null> {
    const url = `${baseUrl}/data/${shortId}/revision/${revisionId}`;
    const PageResponse = await axios.get<PageResponse>(url);
    return PageResponse.data;
}
