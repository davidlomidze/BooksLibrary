import React, {Component} from "react";
import Modal from "../ui/Modal/Modal";
import Form from "./Form/FormContainer";

class UpsertBookModal extends Component {

    constructor(props) {
        super(props);

        // define form submit triggers
        this.formSubmitTrigger = null;

    }

    formSubmitRefHandler = submitForm => {

        // save passed trigger
        this.formSubmitTrigger = submitForm;

    }

    modalCloseRefHandler = closeModal => {

        // save passed trigger
        this.modalCloseTrigger = closeModal;

    }

    modalCloseHandler = () => {

        this.props.bookActions.setShowEditBookModal(false, null);

    }

    formSuccessededHandler = () => {

        // trigger modal close as soon as form successeds
        this.modalCloseTrigger();

    }

    getModalTitle = () => {

        return this.props.editingBook ? "Edit book" : "Add book";

    }

    getModalButtons = () => {

        return [
            {
                className: "btn btn-sm btn-primary px-3",
                text: this.props.editingBook ? "Save" : "Add",
                onClick: () => this.formSubmitTrigger()
            }
        ]

    }

    render() {

        const { editingBook } = this.props;

        return (
            <Modal
                title={this.getModalTitle()}
                width={500}
                closed={this.modalCloseHandler}
                closeRef={this.modalCloseRefHandler}
                buttons={this.getModalButtons()}
            >
                <Form book={editingBook} submitRef={this.formSubmitRefHandler} succeeded={this.formSuccessededHandler} />
            </Modal>
        )
    }

}

export default UpsertBookModal;
