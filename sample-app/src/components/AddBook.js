import React from "react";

function AddBook({setData}) {
    const idRef = React.useRef();
    const titleRef = React.useRef();
    const rateRef = React.useRef();

    function handleAddBook(event) {
        event.preventDefault();
        // console.log(event.target.elements.bookId.value);
        // console.log(event.target.elements.title.value);
        const bookId = event.target.elements.bookId.value;
        const title = event.target.elements.title.value;
        const rate = event.target.elements.rate.value;

        const book = {
            id: bookId,
            title: title,
            price: rate
        };
        setData(prevData => {
            return prevData.concat(book)
        })
        
        idRef.current.value= "";
        titleRef.current.value = "";
        rateRef.current.value = "";
        // data.push(book)
        
        
      //  data.push(book)
        
       console.log(book);
    }

    return (
        <div>
            <form onSubmit={handleAddBook}>
                <div>
                    <input type="number" placeholder='Enter id' 
                        className='form-control'
                        id='bookId' name='bookId'
                        ref={idRef}/>
                </div>
                <div>
                    <input type="text" placeholder='Add Title' 
                        className='form-control'
                        id='title' name='title'
                        ref={titleRef}/>
                </div>
                <div>
                    <input type="text" placeholder='Add Price' 
                        className='form-control'
                        id='rate' name='rate'
                        ref={rateRef}/>
                </div>
                <button className='btn btn-primary' type='submit'>Add a new Book</button>
            </form>
        </div>
    )
}

export default AddBook;