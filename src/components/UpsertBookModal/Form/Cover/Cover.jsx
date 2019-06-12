import React from "react";
import withImagePreview from "../../../ui/WithImagePreview/WithImagePreview";
import Thumbnail from "../../../screens/Books/Card/Thumbnail/Thumbnail";

const Cover = props => {

    const { image } = props;

    return (
        <Thumbnail cover={image} />
    )

}

export default withImagePreview(Cover);