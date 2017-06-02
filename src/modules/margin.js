import buildProperty from '../util/buildProperty';

const toValue = num => {
    const val = num === 0 ? 0 : .25 * Math.pow(2, Math.abs(num-1))
    return `${num < 0 ? val * -1 : val}rem`;
}

const top        = buildProperty(['margin-top'], toValue);
const bottom     = buildProperty(['margin-bottom'], toValue);
const left       = buildProperty(['margin-left'], toValue);
const right      = buildProperty(['margin-right'], toValue);
const vertical   = buildProperty(['margin-top', 'margin-bottom'], toValue);
const horizontal = buildProperty(['margin-left', 'margin-right'], toValue);

const margin = buildProperty(['margin'], toValue, {
    top,
    bottom,
    left,
    right,
    vertical,
    horizontal,
});

export default margin;
