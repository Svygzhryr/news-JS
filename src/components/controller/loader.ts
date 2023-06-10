import { AppLoaderOptions } from '../../types/index';

class Loader {
    readonly baseLink: string;
    options: AppLoaderOptions;

    constructor(baseLink: string, options: AppLoaderOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResp(
        { endpoint, options = {} }: { endpoint: string; options: AppLoaderOptions },
        callback = (): void => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    protected errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    protected makeUrl(options: AppLoaderOptions, endpoint: string) {
        const urlOptions: { [key: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            if (key) {
                url += `${key}=${urlOptions[key]}&`;
            }
        });

        return url.slice(0, -1);
    }

    protected load(method: string, endpoint: string, callback: CallableFunction, options: AppLoaderOptions = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
