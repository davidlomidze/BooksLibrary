import ErrorMessage from "./ErrorMessage";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as bookActionCreators from "../../../../store/book/actionCreators";
import * as bookSelector from "../../../../store/book/selectors";

const mapStateToProps = state => {
    return {
        errorMessage: bookSelector.selectErrorMessage(state.book),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        bookActions: bindActionCreators(bookActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);
