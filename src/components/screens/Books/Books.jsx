import React, {Component} from "react";
import Card from "./Card/Card";
import EmptyResultsMessage from "./EmptyResultsMessage/EmptyResultsMessage";

class Books extends Component {

    componentDidMount() {

        this.props.bookActions.fetchBooks();

    }

    render() {

        const { isFetching, books } = this.props;

        return (
            <div className="container pt-5">

                <div className="d-flex flex-row justify-content-between align-items-center mb-5">

                    <h1 className="h3">Books</h1>

                    <button type="button" className="btn btn-sm btn-primary rounded-pill px-3">
                        New Book
                    </button>

                </div>

                <div className="row">

                    {
                        books && books.map(book => (
                            <div key={book.id} className="col-sm-4 mb-5">

                                <Card book={book} />

                            </div>
                        ))
                    }

                    {
                        books && !books.length &&
                        <EmptyResultsMessage />
                    }

                    {
                        isFetching &&
                        <p>Loading...</p>
                    }

                </div>

            </div>
        )
    }
}

export default Books;