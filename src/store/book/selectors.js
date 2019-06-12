import {displayBookDate} from "../../utils/helpers";

export const selectIsFetching = state => {
    return state.isFetching;
}

export const selectDidInvalidate = state => {
    return state.didInvalidate;
}

export const selectErrorMessage = state => {
    return state.errorMessage;
}

export const selectSearchValue = state => {
    return state.searchValue;
}

export const selectShowUpsertBookModal = state => {
    return state.showUpsertBookModal;
}

export const selectEditingBook = state => {
    return state.list.find(book => book.id === state.editingBookId);
}

export const selectDeletingBook = state => {
    return (state.list && state.list.find(book => book.id === state.deletingBookId)) || null;
}

export const selectFilteredBooks = state => {

    // show all books by default
    let filteredBooks = state.list;

    // get search string in lowercase
    const searchValue = state.searchValue.toLowerCase();

    // if search and books are not empty
    if(searchValue && filteredBooks) {

        // filter books that match to search string
        filteredBooks = filteredBooks.filter(book => {

            return (
                book.title.toLowerCase().includes(searchValue) ||
                book.author.toLowerCase().includes(searchValue) ||
                displayBookDate(book.date).toLowerCase().includes(searchValue)
            )

        });

    }

    return filteredBooks;
}