import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'c761628e5ea6447fbf1f401e4a11d335', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
