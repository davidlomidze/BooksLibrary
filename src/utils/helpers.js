import defaultBookCover from "../assets/images/defaultBookCover.jpg";
import store from "../store";

export const getBookCover = cover => {
    return cover ? cover : defaultBookCover;
}

export const displayBookDate = momentDate => {
    return momentDate.format("MMM Do YYYY");
}

export const findBooksNextId = () => {

    const state = store.getState();

    let maxId = 0;

    state.book.list.forEach(book => {
        if(book.id > maxId) maxId = book.id;
    });

    return ++maxId;
}

export const checkBookTitleAvailability = book => {

    const state = store.getState();

    let titleExists = state.book.list.find(thisBook => thisBook.title === book.title && thisBook.id !== book.id);

    return !titleExists;
}