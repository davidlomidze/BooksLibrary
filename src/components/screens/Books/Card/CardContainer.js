import Card from "./Card";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as bookActionCreators from "../../../../store/book/actionCreators";

const mapDispatchToProps = dispatch => {
    return {
        bookActions: bindActionCreators(bookActionCreators, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Card);
