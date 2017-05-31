import buildProperty from '../buildProperty';

const toValue = num => {
    const val = num === 0 ? 0 : .25 * Math.pow(2, Math.abs(num-1))
    return num < 0 ? val * -1 : val;
}

const top        = buildProperty(['padding-top'], toValue);
const bottom     = buildProperty(['padding-bottom'], toValue);
const left       = buildProperty(['padding-left'], toValue);
const right      = buildProperty(['padding-right'], toValue);
const vertical   = buildProperty(['padding-top', 'padding-bottom'], toValue);
const horizontal = buildProperty(['padding-left', 'padding-right'], toValue);

const padding = buildProperty(['padding'], toValue, {
    top,
    bottom,
    left,
    right,
    vertical,
    horizontal,
});

export default padding;
