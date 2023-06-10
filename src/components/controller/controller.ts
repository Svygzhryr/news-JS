import { AppLoaderOptions, CallBackFunction } from '../../types/index';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    public getSources(callback: CallBackFunction<AppLoaderOptions, void>): void {
        super.getResp({ endpoint: 'sources' }, callback);
    }

    public getNews(e: Event, callback: CallBackFunction<AppLoaderOptions, void>): void {
        let { target } = e;
        const sourcesContainer = e.currentTarget as HTMLElement;

        while (target !== sourcesContainer) {
            if (!(target instanceof HTMLElement && target.classList.contains('source__item'))) return;
            const sourceId = target.getAttribute('data-source-id');
            if (sourceId && sourcesContainer.getAttribute('data-source') !== sourceId) {
                sourcesContainer.setAttribute('data-source', sourceId);
                super.getResp({ endpoint: 'everything', options: { sources: sourceId } }, callback);
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
