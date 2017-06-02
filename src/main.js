import padding from './modules/padding';
import aphrodite from 'aphrodite';
const { StyleSheetServer, css } = aphrodite;

const a = padding.top(0).bottom(2).top(2);
const b = padding.top(0).bottom(2).top(2);

console.log(StyleSheetServer.renderStatic(() => {
    css(a);
    css(b);
}));
