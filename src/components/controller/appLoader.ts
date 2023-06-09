import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '660c9e65061c47f0ac4cfd019b289ac4', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
