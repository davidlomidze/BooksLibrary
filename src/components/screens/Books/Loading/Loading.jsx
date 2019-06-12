import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Loading = () => {
    return (
        <div className="col-12 py-5 text-center">
            <FontAwesomeIcon icon={["fas", "circle-notch"]} size="3x" className="mb-3 d-block mx-auto" spin />
            <p>Loading books...</p>
        </div>
    )
}

export default Loading;