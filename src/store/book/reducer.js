import * as actionTypes from "./actionTypes";

const initialState = {
    isFetching: false,
    searchValue: "",
    list: null
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case actionTypes.SET_BOOKS:

            return {
                ...state,
                list: action.books
            }

        case actionTypes.ADD_BOOK:

            return {
                ...state,
                list: [...state.list, action.book]
            }

        case actionTypes.REPLACE_BOOK:

            return {
                ...state,
                list: state.list.map(book => book.id !== action.book.id ? book : action.book)
            }

        case actionTypes.SET_FETCHING:

            return {
                ...state,
                isFetching: action.fetching
            }

        case actionTypes.SET_SEARCH_VALUE:

            return {
                ...state,
                searchValue: action.searchValue
            }

        default:
            return state;
    }
}

export default reducer;