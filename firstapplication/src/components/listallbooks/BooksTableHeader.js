import React, {Component} from "react";

export default class BooksTableHeader 
    extends Component {
    render() {
        return(
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
            </thead>
        );
    }
}
