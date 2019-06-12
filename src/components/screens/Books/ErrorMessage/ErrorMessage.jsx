import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ErrorMessage = props => {

    const { errorMessage, bookActions } = props;

    return (
        <div className="col-12 py-5 text-center text-danger">
            <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} size="3x" className="mb-3 d-block mx-auto"/>
            <p>{ errorMessage }</p>
            <button
                type="button"
                className="btn btn-sm btn-outline-danger"
                onClick={bookActions.fetchBooks}
            >
                Try again
            </button>
        </div>
    )
}

export default ErrorMessage;