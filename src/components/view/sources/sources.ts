import { Source } from '../../../types/index';
import './sources.css';

class Sources {
    public draw(data: Partial<Source[]>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;

            sourceClone.querySelector('.source__item-name')!.textContent = item?.name || '';
            sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item?.id || '');

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
