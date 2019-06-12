import React, {Component, createRef} from "react";
import defaultBookCover from "../../../assets/images/defaultBookCover.jpg";
import Book from "../../../models/Book";
import PropTypes from "prop-types";
import {ErrorMessage, Field} from "formik";
import Cover from "./Cover/Cover";
import classNames from "classnames";

class Form extends Component {

    constructor(props) {
        super(props);

        // define local state for image file handling
        this.state = {
            coverFile: null
        }

        // create file input node ref
        this.fileInputNode = createRef();

    }

    componentDidMount() {

        // pass submitForm function reference to parent
        this.props.submitRef(this.props.submitForm);

    }

    componentDidUpdate(prevProps, prevState) {

        // pass submitForm function reference to parent
        this.props.submitRef(this.props.submitForm);

    }

    fileInputChangeHandler = event => {

        this.setState({
            coverFile: event.target.files[0]
        }, () => {

            // clear file input as soon as we read file from it
            this.fileInputNode.value = null;

        });

    }

    uploadImageButtonClickHandler = () => {

        this.fileInputNode.click();

    }

    coverFileReadHandler = base64Image => {

        // clear file instance in state as soon as we read image from it
        this.setState({
            coverFile: null
        }, () => {

            // set cover base64 image to form value
            this.props.setFieldValue("cover", base64Image);

        });

    }

    titleChangeHandler = event => {

        let value = event.target.value;

        // prevent entering non letter characters
        value = value.replace(/[^a-zA-Z0-9 ]/g, "");

        this.props.setFieldValue("title", value);

    }

    render() {

        const {
            values,
            errors,
            touched,
            handleBlur,
            handleSubmit
        } = this.props;

        // define input classes to show invalid-feedback
        const titleClassNames = classNames("form-control form-control-sm", {
            "is-invalid": errors.title && touched.title
        });
        const dateClassNames = classNames("form-control form-control-sm", {
            "is-invalid": errors.date && touched.date
        });
        const authorClassNames = classNames("form-control form-control-sm", {
            "is-invalid": errors.author && touched.author
        });

        return (
            <form onSubmit={handleSubmit} className="d-flex flex-row pt-3 px-4">
                <div className="flex-shrink-0 text-center">
                    <Cover
                        file={this.state.coverFile}
                        currentImage={values.cover}
                        defaultImage={defaultBookCover}
                        onFileRead={this.coverFileReadHandler}
                    />
                    <input
                        type="file"
                        className="d-none"
                        accept="image/png, image/jpeg, image/gif"
                        ref={node => this.fileInputNode = node}
                        onChange={this.fileInputChangeHandler}
                    />
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary mt-3 rounded-pill"
                        onClick={this.uploadImageButtonClickHandler}
                    >
                        Upload cover
                    </button>
                </div>
                <div className="flex-shrink-1 pl-4 w-100">
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            className={titleClassNames}
                            placeholder="Enter book title"
                            onChange={this.titleChangeHandler}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        <ErrorMessage name="title">
                            {msg => <div className="invalid-feedback">{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <Field type="text" name="date" className={dateClassNames} placeholder="Enter book date (2019-05-30)" />
                        <ErrorMessage name="date">
                            {msg => <div className="invalid-feedback">{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="form-group mb-0">
                        <label>Author</label>
                        <Field type="text" name="author" className={authorClassNames} placeholder="Enter book author" />
                        <ErrorMessage name="author">
                            {msg => <div className="invalid-feedback">{msg}</div>}
                        </ErrorMessage>
                    </div>
                </div>
            </form>
        )
    }
}

Form.propTypes = {
    book: PropTypes.instanceOf(Book),
    submitRef: PropTypes.func.isRequired,
    succeeded: PropTypes.func.isRequired
}

export default Form;
