export type Source = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
};

export interface SourcesAPI {
    sources: Source[];
    status: string;
}

export interface Headline {
    readonly source: HeadlineSource;
    readonly author: string;
    readonly title: string;
    readonly description: string;
    readonly url: string;
    readonly urlToImage: string | null;
    readonly publishedAt: string;
    readonly content: string;
}

export interface HeadlineSource {
    id: string;
    name: string;
}

export interface HeadlineAPI {
    status: string;
    totalResults: number;
    articles: Headline[];
}

export interface AppLoaderOptions {
    apiKey?: string;
}

export interface Options {
    readonly [key: string]: string;
}

export interface CallBackFunction<T, U> {
    (arg: T): U;
}

export enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

export interface APIFunction {
    readonly method: Method.GET | Method.POST | Method.PUT | Method.PATCH | Method.DELETE;
    readonly callback: CallBackFunction<AppLoaderOptions, void>;
    readonly options?: Options;
    readonly endpoint: 'sources' | 'everything';
}

export type RequestConfig = Pick<APIFunction, 'options' | 'endpoint'>;
