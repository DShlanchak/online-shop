import { loadAllCategoriesAction } from "../store/redusers/categoriesReducer";
import url from './url'

export const getAllCategories = () => {
    return dispatch => {
        fetch('http://localhost:3333/categories/all')
        // fetch(`${url}/categories/all`)
        .then(res => res.json())
        .then(json => dispatch(loadAllCategoriesAction(json)))
    }
}
