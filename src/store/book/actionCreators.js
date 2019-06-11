import * as actionTypes from "./actionTypes";
import axios from "../../utils/axios";
import * as requests from "../../utils/constants/requests";
import Book from "../../models/Book";

export const setBooks = books => {
    return {
        type: actionTypes.SET_BOOKS,
        books,
    }
}

export const addBook = book => {
    return {
        type: actionTypes.ADD_BOOK,
        book,
    }
}

export const replaceBook = book => {
    return {
        type: actionTypes.REPLACE_BOOK,
        book,
    }
}

export const removeBook = book => {
    return {
        type: actionTypes.REMOVE_BOOK,
        book,
    }
}

export const setFetching = fetching => {
    return {
        type: actionTypes.SET_FETCHING,
        fetching,
    }
}

export const setSearchValue = searchValue => {
    return {
        type: actionTypes.SET_SEARCH_VALUE,
        searchValue,
    }
}

export const fetchBooks = () => {
    return dispatch => {

        dispatch(setFetching(true));

        return axios.get(requests.FETCH_BOOKS)
            .then(response => response.data.books)
            .then(rawBooks => {

                // build entity models from raw books data
                const books = rawBooks.map(book => new Book(book));

                dispatch(setBooks(books));

            })
            .finally(() => {

                dispatch(setFetching(false));

            });

    }
}

export const updateBook = (id, formData) => {
    return dispatch => {

        // TODO: dispatch(showGlobalLoader());

        // return axios.post(requests.UPDATE_BOOK.replace("{id}", id), formData)
        //     .then(response => {
        //
        //         const menu = new Menu(response.data.menu);
        //
        //         // then dispatch
        //         dispatch(replaceMenu(menu));
        //
        //         return menu;
        //     });

    }
}