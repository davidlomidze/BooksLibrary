import React, {Component} from "react";
import PropTypes from "prop-types";
import loadingImage from "../../../assets/images/loading.gif";

const withImagePreview = (WrappedComponent) => {

    return class extends Component {

        static propTypes = {
            file: PropTypes.instanceOf(File),
            defaultImage: PropTypes.any.isRequired,
            currentImage: PropTypes.any,
            onFileRead: PropTypes.func
        }

        constructor(props) {
            super(props);

            // define local state
            this.state = {
                loading: false,
                image: null,
            }

        }


        componentDidUpdate(prevProps) {

            if(prevProps.file !== this.props.file) {

                // if file is not set yet
                if(!this.props.file) {

                    // clear image in state
                    this.setState({
                        loading: false,
                        image: null,
                    });

                } else {

                    // load image
                    this.setState(
                        {
                            loading: true
                        },
                        () => {

                            // init file reader
                            let reader = new FileReader();

                            // define listener
                            reader.onloadend = () => {

                                const base64Image = reader.result;

                                // show loading little bit longer
                                setTimeout(() => {
                                    // save reader result
                                    this.setState({
                                        loading: false,
                                        image: base64Image
                                    }, () => {

                                        // trigger prop method to pass base64Image up to parent component
                                        if(this.props.onFileRead) {
                                            this.props.onFileRead(base64Image);
                                        }

                                    });
                                }, 500);

                            };

                            // read file received with props
                            reader.readAsDataURL(this.props.file);

                        }
                    );

                }

            }

        }

        render() {

            // cut file prop and pass other to children, because they will belong to children
            const {file, defaultImage, currentImage, ...childProps} = this.props;

            // define image to fill with specific value
            let image = null;

            // define which image to pass to WrappedComponent
            switch (true) {
                case this.state.loading:
                    image = loadingImage;
                    break;
                case this.state.image !== null:
                    image = this.state.image;
                    break;
                case currentImage !== null && currentImage !== "":
                    image = currentImage;
                    break;
                default:
                    image = defaultImage;
                    break;
            }

            return <WrappedComponent image={image} {...childProps} />;

        }

    }

}

export default withImagePreview;