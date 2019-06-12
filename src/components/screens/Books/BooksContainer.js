import Books from "./Books";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as bookActionCreators from "../../../store/book/actionCreators";
import * as bookSelector from "../../../store/book/selectors";

const mapStateToProps = state => {
    return {
        isFetching: bookSelector.selectIsFetching(state.book),
        didInvalidate: bookSelector.selectDidInvalidate(state.book),
        showUpsertBookModal: bookSelector.selectShowUpsertBookModal(state.book),
        deletingBook: bookSelector.selectDeletingBook(state.book),
        books: bookSelector.selectFilteredBooks(state.book)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        bookActions: bindActionCreators(bookActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);