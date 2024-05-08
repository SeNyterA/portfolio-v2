import { preloadFonts } from './utils';
import { TypeShuffle } from './typeShuffle';

export const initTypeShuffle = () =>{
    const textElement = document.querySelector('.content');
    const ts = new TypeShuffle(textElement);
    ts.trigger('fx1');
};

