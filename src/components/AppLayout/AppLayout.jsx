import React, {Component} from "react";
import BooksScreen from "../screens/Books/BooksContainer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

class AppLayout extends Component {


    render() {
        return (
            <div className="w-100">

                <Header/>

                <div className="w-100 pb-5">

                    <BooksScreen/>

                </div>

                <Footer/>

            </div>
        )
    }
}

export default AppLayout;