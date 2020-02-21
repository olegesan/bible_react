import React, {useEffect, useState} from "react";
const link = 'https://bazz-bible-api.herokuapp.com/';
function ChapterPicker(props){
    const [options,setOptions]=useState([]);
    const [selectedOption, setSelectedOption] = useState(props.chapter)
    useEffect(()=>{
        setSelectedOption(props.chapter)
        fetch(`${link}api/bible/${props.book}/chapters`,{
            method:'GET',
        })
            .then(res => res.json())
            .then(response => {
                const listWithChapters = [...Array(response[(props.book).toUpperCase()]).keys()];
                setOptions(listWithChapters);
            })
    },[selectedOption,props.chapter,props.book]);
    const selectedChapter=(e)=>{
        setSelectedOption(e.target.value)
        props.changeChapter(e.target.value)
    }
    return(
        <div>
            <select value={selectedOption} name="books" id="bookSelector" onChange={selectedChapter}>
                {Object.keys(options).map((chapter,index) =>{
                    return <option key={index} value={index+1}>{index+1}</option>
                })}
            </select>

        </div>
    )
}
export default ChapterPicker;