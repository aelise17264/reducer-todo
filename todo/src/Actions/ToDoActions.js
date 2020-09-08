
export const TOGGLE_ADD = 'TOGGLE_ADD';
export const toggleAdd = () => ({
    type: TOGGLE_ADD
});
export const SET_ADD = 'SET_ADD';
export const setAdd = item => {
    console.log(`setAdd AC ${item}`);
    return {type: SET_ADD, payload: item}
}