import React from "react";

const Book = ({n, value, rate}) => {
    return (
            <tr>
                <td>{n}</td>
                <td>{value}</td>
                <td>{rate}</td>
            </tr>
    )
}

export default Book;