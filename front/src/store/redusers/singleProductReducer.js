const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT'

export const loadSingleProductAction = payload => ({type:LOAD_SINGLE_PRODUCT, payload})

export const singleProductReducer = (state = [], action) => {
    if (action.type === LOAD_SINGLE_PRODUCT) {
        return action.payload
    }
    return state
}