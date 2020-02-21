import React, {useEffect, useState} from "react";
const link = 'https://bazz-bible-api.herokuapp.com/'
function Text(props) {
    const [book,setBook] = useState(props.book)
    const [chapter,setChapter] = useState(props.chapter)
    const [text,setText] = useState([])
    useEffect(()=>{
        setChapter(props.chapter);
        setBook(props.book);
        fetch(`${link}api/bible/${props.book}/${props.chapter}`,{
            method:'GET',
        })
            .then(res => res.json())
            .then(response => {
                setText(response)})
            .catch(error => console.log(error))

    },[props.chapter]);
    useEffect(()=>{
        setChapter(1);
        setBook(props.book);
        fetch(`${link}api/bible/${props.book}/1`,{
            method:'GET',
        })
            .then(res =>
                res.json())
            .then(response => {

                setText(response)})
            .catch(error => console.log(error))

    },[props.book]);
    return(
        <div className={'text'}>
            <div className={'verses'}>
                    {Object.keys(text).map((key,index)=>{
                    return <div className={"verse"} id={`verse_${key}`} key={index}><strong>{key}</strong>: {text[key]}</div>
                })}
            </div>

        </div>
    )
}
export default Text;