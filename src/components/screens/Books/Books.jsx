import React, {Component} from "react";
import Card from "./Card/CardContainer";
import EmptyResultsMessage from "./EmptyResultsMessage/EmptyResultsMessage";
import ErrorMessage from "./ErrorMessage/ErrorMessageContainer";
import Loading from "./Loading/Loading";
import UpsertBookModal from "../../UpsertBookModal/UpsertBookModalContainer";
import DeleteBookModal from "../../DeleteBookModal/DeleteBookModalContainer";

class Books extends Component {

    componentDidMount() {

        this.props.bookActions.fetchBooks();

    }

    newBookButtonClickHandler = () => {

        this.props.bookActions.setShowCreateBookModal(true);

    }

    render() {

        const {
            isFetching,
            books,
            didInvalidate,
            showUpsertBookModal,
            deletingBook
        } = this.props;

        return (
            <div className="container pt-5">

                <div className="d-flex flex-row justify-content-between align-items-center mb-5">

                    <h1 className="h3">Books</h1>

                    <button
                        type="button"
                        className="btn btn-sm btn-primary rounded-pill px-3"
                        onClick={this.newBookButtonClickHandler}
                    >
                        New Book
                    </button>

                </div>

                <div className="row">

                    {
                        isFetching &&
                        <Loading />
                    }

                    {
                        !isFetching && didInvalidate &&
                        <ErrorMessage />
                    }

                    {
                        books && !books.length &&
                        <EmptyResultsMessage />
                    }

                    {
                        books && books.map(book => (
                            <div key={book.id} className="col-sm-4 mb-5">

                                <Card book={book} />

                            </div>
                        ))
                    }

                    {
                        showUpsertBookModal &&
                        <UpsertBookModal />
                    }

                    {
                        deletingBook &&
                        <DeleteBookModal />
                    }

                </div>

            </div>
        )
    }
}

export default Books;