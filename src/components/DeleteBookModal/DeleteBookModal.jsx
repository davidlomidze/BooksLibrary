import React, {Component} from "react";
import Modal from "../ui/Modal/Modal";

class DeleteBookModal extends Component {

    constructor(props) {
        super(props);

        this.modalCloseTrigger = null;

    }

    modalCloseRefHandler = closeModal => {

        // save passed trigger
        this.modalCloseTrigger = closeModal;

    }

    modalCloseHandler = () => {

        this.props.bookActions.setDeletingBookId(null);

    }

    deleteBookHandler = () => {

        this.props.bookActions.deleteBook(this.props.deletingBook)
            .then(() => {

                // close modal (nicely with jquery, and also trigger this.modalCloseHandler)
                if(this.modalCloseTrigger) this.modalCloseTrigger();

            });

    }

    getModalButtons = () => {

        return [
            {
                className: "btn btn-sm btn-danger px-3",
                text: "Delete",
                onClick: this.deleteBookHandler
            }
        ]

    }

    render() {

        const { deletingBook } = this.props;

        return (
            <Modal
                title={"Do you really want do delete this book?"}
                width={500}
                closed={this.modalCloseHandler}
                closeRef={this.modalCloseRefHandler}
                buttons={this.getModalButtons()}
            >
                <h2 className="h4 text-center">{ deletingBook.title }</h2>
            </Modal>
        )
    }

}

export default DeleteBookModal;
