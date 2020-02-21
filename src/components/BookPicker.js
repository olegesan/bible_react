import React, {useEffect, useState} from "react";
const link = 'https://bazz-bible-api.herokuapp.com/'
function BookPicker(props){
    const [options,setOptions]=useState([]);
    const [selectedOption, setSelectedOption] = useState('gen')
    useEffect(()=>{
        fetch(`${link}api/bible/books`,{
            method:'GET',
        })
        .then(res => res.json())
        .then(response => {
            console.log(response)
            setOptions(response);
        })
    },[selectedOption])
    const selected = (id) =>{
        setSelectedOption(id.target.value)
        props.changeBook(id.target.value)

    }
    return(
        <div>
            <select value={selectedOption} name="books" id="bookSelector" onChange={selected}>
                {Object.keys(options).map((book,index) =>{
                    return <option key={index} value={book.toLowerCase()}>{options[book]}</option>
                })}
            </select>

        </div>
    )
}
export default BookPicker;