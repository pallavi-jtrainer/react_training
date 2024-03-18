import React from 'react';
import Book from './Book';

const Books = ({books}) => {
    // let val = "";
    return (
        <>
            <div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Book Id</th>
                            <th>Title</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((item) => (
                            <Book key={item.id} 
                                n={item.id} 
                                value={item.title}
                                rate={item.price} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
        
    )
}

export default Books;