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
};

type PatchPageParams = {
    shortId: string;
    title: string;
    source: string;
    createdBy: string;
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


// export const createData = async (title: string, source: string, createdBy: string) => {
//     const response = await axios.post(`${baseUrl}/data`, { title, source, createdBy });
//     return response.data;
// };

// export const updateData = async (shortId: string, title: string, source: string, createdBy: string) => {
//     const response = await axios.patch(`${baseUrl}/data/${shortId}`, { title, source, createdBy });
//     return response.data;
// };

// export const getData = async (shortId: string) => {
//     const response = await axios.get(`${baseUrl}/data/${shortId}`);
//     return response.data;
// };

// export const getHistory = async (shortId: string) => {
//     const response = await axios.post(`${baseUrl}/data/${shortId}/history`);
//     return response.data;
// };

// export const getRevision = async (shortId: string, revisionId: number) => {
//     const response = await axios.post(`${baseUrl}/data/${shortId}/revision/${revisionId}`);
//     return response.data;
// };
