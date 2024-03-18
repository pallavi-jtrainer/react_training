import React from "react";
// import Books from "./Books";

const Searchbooks = ({books}) => {
    const [filteredBooks, setFilteredBooks] = React.useState(books);

    //const element = document.createElement("input")
    // //console.log(element)
    // element.id = "text1"
    // element.type = "number"
    // element.innerHTML = "Heading Demo"
    //document.body.appendChild(element)

    function handleSearch(event) {
        event.preventDefault();
        const rate = event.target.elements.searchvalue.value;

        const filteredData = filteredBooks.filter((item) => {
            return item.price >= rate
        })
        console.log(filteredData)
        setFilteredBooks(filteredData)

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