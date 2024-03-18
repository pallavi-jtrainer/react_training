import React from "react";

const Searchbooks = ({books, setData}) => {
    function handleSearch(event) {
        event.preventDefault();
        const rate = event.target.elements.searchvalue.value;

        setData(
            books.filter((item) => {
                return item.price >= rate
            })
        )
        // console.log(event.target.elements.searchvalue.value)
    }

    return(
        <div>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
                <input className="form-control me-2" type="search" 
                    placeholder="Search"
                    id="searchvalue"
                    name="searchvalue" />
                <button className="btn btn-outline-success" 
                    type="submit">Search</button>
            </form>
        </div>
    )
}

export default Searchbooks