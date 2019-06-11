import {displayBookDate} from "../../utils/helpers";

export const selectBooks = state => {
    return state.list;
}

export const selectIsFetching = state => {
    return state.isFetching;
}

export const selectsearchValue = state => {
    return state.searchValue;
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