import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const EmptyResultsMessage = () => {
    return (
        <div className="col-12 py-5 text-center text-info">
            <FontAwesomeIcon icon={["far", "folder-open"]} size="3x" className="mb-3 d-block mx-auto"/>
            <p>Sorry, nothing found. Try something else</p>
        </div>
    )
}

export default EmptyResultsMessage;