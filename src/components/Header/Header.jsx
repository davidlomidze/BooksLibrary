import React, {Component} from "react";
import Search from "./Search/SearchContainer";

class Header extends Component {

    render() {
        return (
            <div className="w-100 bg-white border-bottom">
                <div className="container">

                    <nav className="navbar navbar-light px-0">

                        <div className="navbar-brand">Books Library</div>

                        <form className="form-inline">

                            <Search />

                        </form>

                    </nav>

                </div>
            </div>
        )
    }
}

export default Header;