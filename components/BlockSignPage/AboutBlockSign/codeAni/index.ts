import { preloadFonts } from './utils';
import { TypeShuffle } from './typeShuffle';

export function codeStart (callback:Function){
    preloadFonts('biu0hfr').then(() => {
        callback()
        const textElement:any = window.document.querySelector('.code-view-group');
        const ts = new TypeShuffle(textElement);
        ts.trigger('fx1');

    });
}
