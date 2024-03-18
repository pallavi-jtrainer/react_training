import React, { Component } from "react";
import BooksTableHeader from "./BooksTableHeader";
import BooksTableBody from "./BooksTableBody";

export default class BooksTable extends Component {
    render() {
        return(
            <table>
                <BooksTableHeader/>
                <BooksTableBody />
            </table>
        );
    }
}