import defaultBookCover from "../assets/images/defaultBookCover.jpg";

export const getBookCover = cover => {
    return cover ? cover : defaultBookCover;
}

export const displayBookDate = momentDate => {
    return momentDate.format("MMM Do YYYY");
}