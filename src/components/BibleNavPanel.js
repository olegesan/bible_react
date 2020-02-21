import React from "react";
import BookPicker from "./BookPicker";
import ChapterPicker from "./ChapterPicker";


function BibleNavPanel (props){
    return(
        <div className={'navBar'}>
            <ChapterPicker changeChapter={props.setChapter} book={props.book} chapter={props.chapter} ></ChapterPicker>
            <BookPicker changeBook={props.changeBook}></BookPicker>
        </div>
    )
}
export default BibleNavPanel;