import buildProperty from '../util/buildProperty';

const mods = {
    flex: buildProperty(['display'], 'flex')
};
const display = buildProperty(['display'], null, mods);

export default display;
