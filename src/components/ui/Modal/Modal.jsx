import React, {Component, createRef} from "react";
import PropTypes from "prop-types";
import "./Modal.css";
import $ from "jquery"

class Modal extends Component {


    constructor(props) {
        super(props);

        // create node reference
        this.node = createRef();

    }

    componentDidMount() {

        // show as soon as component mounted
        $(this.node).modal("show");

        // init hide event callback
        $(this.node).on("hidden.bs.modal", this.props.closed);

        // execute prop method to pass function reference up to parent
        if(this.props.closeRef) {
            this.props.closeRef(this.closeModal);
        }

    }

    componentWillUnmount = () => {

        this.closeModal();

    }

    closeModal = () => {

        // perform modal close
        $(this.node).modal("hide");

    }

    nodeRefHandler = (node) => {

        // save ref to local property
        this.node = node;

        // execute prop method to pass reference up to parent
        if(this.props.nodeRef) {
            this.props.nodeRef(node);
        }

    }

    // render html
    render () {

        const { buttons, hasCancelButton, showCloseButton, title, width } = this.props;

        return (
            <div className="modal fade" tabIndex="-1" ref={this.nodeRefHandler}>

                <div className="modal-dialog modal-dialog-centered" style={{maxWidth: width}}>

                    <div className="modal-content customModalContent">

                        {
                            title &&
                            (
                                <div className="modal-header customModalHeader align-items-center">
                                    <h6 className="modal-title text-dark">{title}</h6>
                                    {
                                        showCloseButton &&
                                        <button type="button" className="btn close py-2 px-3" data-dismiss="modal"><span>&times;</span></button>
                                    }
                                </div>
                            )
                        }

                        <div className="modal-body">
                            {this.props.children}
                        </div>

                        {
                            buttons && buttons.length &&
                            (
                                <div className="modal-footer customModalFooter">
                                    {
                                        buttons.map((button, index) => {

                                            return (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    className={button.className}
                                                    data-dismiss={button.isCancel ? "modal" : false}
                                                    onClick={button.onClick}
                                                >
                                                    {button.text}
                                                </button>
                                            )

                                        })
                                    }
                                    {
                                        hasCancelButton &&
                                        (
                                            <button
                                                key={buttons.length + 1}
                                                type="button"
                                                className="btn btn-sm px-3"
                                                data-dismiss="modal"
                                            >
                                                Cancel
                                            </button>
                                        )
                                    }
                                </div>
                            )
                        }

                    </div>

                </div>

            </div>
        );
    }
}

Modal.defaultProps = {
    showCloseButton: true,
    hasCancelButton: true,
    buttons: [],
}

Modal.propTypes = {
    nodeRef: PropTypes.func,
    closeRef: PropTypes.func,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    showCloseButton: PropTypes.bool,
    closed: PropTypes.func.isRequired,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    hasCancelButton: PropTypes.bool,
    buttons: PropTypes.arrayOf(
        PropTypes.shape(
            {
                className: PropTypes.string,
                text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
                isCancel: PropTypes.bool,
                onClick: PropTypes.func,
            }
        )
    )
}

export default Modal;