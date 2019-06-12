import Form from "./Form";
import {withFormik} from "formik";
import yup from "../../../utils/yup";
import {connect} from "react-redux";
import * as bookActionCreators from "../../../store/book/actionCreators";
import {bindActionCreators} from "redux";

let formWithFormik = withFormik({

    // Enable reinitialize to update values after prop updated
    enableReinitialize: true,

    // map props to values
    mapPropsToValues: props => {

        const {book} = props;

        // if book exists then it's editing time
        if(book) {

            return {
                id: book.id,
                title: book.title || "",
                cover: book.cover || null,
                date: book.date.format("YYYY-MM-DD") || "",
                author: book.author || ""
            }

        } else {

            return {
                title: "",
                cover: null,
                date: "",
                author: ""
            }

        }
    },

    validationSchema: yup.object().shape({
        title: yup.string().max(100).required(),
        cover: yup.string().nullable(),
        date: yup.string()
            .matches(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/, {message: "Format should be: YYYY-MM-DD"})
            .max(10).required(),
        author: yup.string().max(50).required(),
    }),

    handleSubmit: (values, {setFieldError, props}) => {

        // if id exists, it's update time
        if(values.id) {

            props.bookActions.updateBook(values.id, values)
                .then(() => {

                    // trigger form successeded prop
                    if(props.succeeded) props.succeeded();

                })
                .catch(error => {

                    setFieldError("title", error);

                });

        } else {

            props.bookActions.storeBook(values)
                .then(() => {

                    // trigger form successeded prop
                    if(props.succeeded) props.succeeded();

                })
                .catch(error => {

                    setFieldError("title", error);

                });

        }

    }

})(Form);

const mapDispatchToProps = dispatch => {
    return {
        bookActions: bindActionCreators(bookActionCreators, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(formWithFormik);