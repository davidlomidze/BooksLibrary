import React from "react";

const Search = props => {

    const { searchValue, bookActions } = props;

    const searchChangeHandler = event => {
        bookActions.setSearchValue(event.target.value);
    }

    return (
        <input
            type="search"
            className="form-control form-control-sm rounded-pill px-3"
            placeholder="Search"
            value={searchValue}
            onChange={searchChangeHandler}
        />
    )
}

export default Search;