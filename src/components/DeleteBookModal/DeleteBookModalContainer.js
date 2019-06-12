import DeleteBookModal from "./DeleteBookModal";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as bookActionCreators from "../../store/book/actionCreators";
import * as bookSelector from "../../store/book/selectors";

const mapStateToProps = state => {
    return {
        deletingBook: bookSelector.selectDeletingBook(state.book)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        bookActions: bindActionCreators(bookActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBookModal);
