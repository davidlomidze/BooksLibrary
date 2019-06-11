import React from "react";
import * as helpers from "../../../../../utils/helpers";
import PropTypes from "prop-types";
import "./Thumbnail.css";

const Thumbnail = props => {

    const { cover } = props;

    const style = {
        backgroundImage: `url(${helpers.getBookCover(cover)})`
    }

    return (
        <div
            className="bookCardThumbnail bg-white shadow rounded-lg"
            style={style}
        >
        </div>
    )
}

Thumbnail.propTypes = {
    cover: PropTypes.string
}

export default Thumbnail;