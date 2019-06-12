import * as actionTypes from "./actionTypes";

const initialState = {
    isFetching: false,
    didInvalidate: false,
    errorMessage: "",
    searchValue: "",
    showUpsertBookModal: false,
    editingBookId: null,
    deletingBookId: null,
    list: null
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case actionTypes.SET_BOOKS:

            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                errorMessage: "",
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

        case actionTypes.REMOVE_BOOK:

            return {
                ...state,
                list: state.list.filter(book => book.id !== action.book.id)
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

        case actionTypes.INVALIDATE:

            return {
                ...state,
                isFetching: false,
                didInvalidate: true,
                errorMessage: action.errorMessage
            }

        case actionTypes.SET_SHOW_CREATE_BOOK_MODAL:

            return {
                ...state,
                showUpsertBookModal: action.show
            }

        case actionTypes.SET_SHOW_EDIT_BOOK_MODAL:

            return {
                ...state,
                showUpsertBookModal: action.show,
                editingBookId: action.bookId
            }

        case actionTypes.SET_DELETING_BOOK_ID:

            return {
                ...state,
                deletingBookId: action.bookId
            }

        default:
            return state;
    }
}

export default reducer;