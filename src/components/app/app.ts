import { HeadlineAPI, SourcesAPI } from '../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private readonly controller: AppController;
    private readonly view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')!
            .addEventListener('click', (e) =>
                this.controller.getNews(e, (data) => this.view.drawNews(data as HeadlineAPI))
            );
        this.controller.getSources((data) => this.view.drawSources(data as SourcesAPI));
    }
}

export default App;
