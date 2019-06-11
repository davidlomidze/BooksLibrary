import moment from "../utils/moment";

class Book {

    constructor(payload) {

        this._id = payload.id || null;
        this._title = payload.title || null;
        this._author = payload.author || null;
        this._cover = payload.cover || null;
        this._date = (payload.date && moment(payload.date)) || null;
        this._payload = payload || null;

    }

    toDataObject() {
        return {
            id: this.id || null,
            title: this.title || null,
            author: this.author || null,
            cover: this.cover || null,
            date: this.date || null,
        }
    }

    get payload() {
        return this._payload;
    }

    set payload(value) {
        this._payload = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }


    get cover() {
        return this._cover;
    }

    set cover(value) {
        this._cover = value;
    }
}

export default Book;