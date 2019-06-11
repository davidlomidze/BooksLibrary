import React from "react";
import PropTypes from "prop-types";
import Book from "../../../../models/Book";
import * as helpers from "../../../../utils/helpers";
import Thumbnail from "./Thumbnail/Thumbnail";

const Card = props => {

    const { book } = props;

    return (
        <div className="d-flex flex-row">
            <div className="flex-shrink-0">
                <Thumbnail cover={book.cover} />
            </div>
            <div className="flex-shrink-1 pl-3">
                <h2 className="h5 text-dark">
                    { book.title }
                </h2>
                <small className="mb-3 d-block">
                    <p className="text-secondary mb-1">
                        { helpers.displayBookDate(book.date) }
                    </p>
                    <p className="text-secondary mb-1">
                        { book.author }
                    </p>
                </small>
                <div className="">
                    <button type="button" className="btn btn-sm btn-outline-secondary rounded-pill py-0">
                        Edit
                    </button>
                    <button type="button" className="btn btn-sm btn-outline-danger rounded-pill ml-2 py-0">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    book: PropTypes.instanceOf(Book).isRequired
}

export default Card;