import { Component } from "react";

const books = [
    {id: 1, title: "book1", price: 343},
    {id: 2, title: "book2", price: 445}
];
export default class BooksTableBody extends Component {   
    render() {
        const list = books.map(book => 
            <tr>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.price}</td>
            </tr>);
        return(
            <tbody>
                {list}
            </tbody>
        );
    }    
}