import React from "react";
import Button from 'react-bootstrap/Button';
export default function Note(props) {
    function deleteNote() {
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <div className="noteBtn">
                    <Button onClick={deleteNote} variant="dark">Delete</Button>
                </div>
            </div>
        </>
    )
}