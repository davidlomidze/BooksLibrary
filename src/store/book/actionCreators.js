import * as actionTypes from "./actionTypes";
import axios from "../../utils/axios";
import * as requests from "../../utils/constants/requests";
import Book from "../../models/Book";
import * as helpers from "../../utils/helpers";

export const setBooks = books => {
    return {
        type: actionTypes.SET_BOOKS,
        books
    }
}

export const addBook = book => {
    return {
        type: actionTypes.ADD_BOOK,
        book
    }
}

export const replaceBook = book => {
    return {
        type: actionTypes.REPLACE_BOOK,
        book
    }
}

export const removeBook = book => {
    return {
        type: actionTypes.REMOVE_BOOK,
        book
    }
}

export const setFetching = fetching => {
    return {
        type: actionTypes.SET_FETCHING,
        fetching
    }
}

export const setShowCreateBookModal = show => {
    return {
        type: actionTypes.SET_SHOW_CREATE_BOOK_MODAL,
        show
    }
}

export const setShowEditBookModal = (show, bookId) => {
    return {
        type: actionTypes.SET_SHOW_EDIT_BOOK_MODAL,
        show,
        bookId
    }
}

export const setSearchValue = searchValue => {
    return {
        type: actionTypes.SET_SEARCH_VALUE,
        searchValue
    }
}

export const invalidate = errorMessage => {
    return {
        type: actionTypes.INVALIDATE,
        errorMessage
    }
}

export const setDeletingBookId = (bookId) => {
    return {
        type: actionTypes.SET_DELETING_BOOK_ID,
        bookId
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
            .catch(error => {

                dispatch(invalidate("Couldn't fetch books. Check http-server availability"));

            });

    }
}

export const updateBook = (id, formData) => {
    return dispatch => {

        const book = new Book(formData);

        // check book title availability
        const titleAvailable = helpers.checkBookTitleAvailability(book);

        /**
         * Make fake promise, like it was an API call
         */
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if(titleAvailable) {

                    dispatch(replaceBook(book));

                    resolve();

                } else {

                    reject("Book with such title already exists!");

                }

            }, 500);
        });

    }
}

export const storeBook = (formData) => {
    return dispatch => {

        // find books next incremental id
        const nextId = helpers.findBooksNextId();

        // copy form data
        let bookData = {...formData};

        // add id to book payload
        bookData.id = nextId;

        // then initialize book entity model
        const book = new Book(bookData);

        // check book title availability
        const titleAvailable = helpers.checkBookTitleAvailability(book);

        /**
         * Make fake promise, like it was an API call
         */
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if(titleAvailable) {

                    dispatch(addBook(book));

                    resolve();

                } else {

                    reject("Book with such title already exists!");

                }

            }, 500);
        });

    }
}

export const deleteBook = (book) => {
    return dispatch => {

        /**
         * Make fake promise, like it was an API call
         */
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                dispatch(removeBook(book));

                resolve();

            }, 500);
        });

    }
}