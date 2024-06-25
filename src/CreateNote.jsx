import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './style.css'
export default function CreateNote(props) {

    const [note, addNote] = useState({
        title: "",
        content: ""
    })

    const inputEvent = (ev) => {
        const { name, value } = ev.target;
        addNote((prevData) => {
            return {
                ...prevData,//ye saare notes ha mere
                [name]: value//agar name title ha to title ki value ho jaee and content ha to content ki value ho jaee
            }
        })
        console.log(note);
    }

    const addEvent = () => {
        props.passNote(note);
        addNote({
            title: "",
            content: ""
        })
    }

    return (
        <>
            <div className="formBox">
                <form>
                    <input type="text" name="title" value={note.title} onChange={inputEvent} placeholder="Title"></input>
                    <textarea name="content" value={note.content} onChange={inputEvent} placeholder="Note"></textarea>
                    <div className="btn">
                        <Button onClick={addEvent} variant="dark">ADD</Button>
                    </div>
                </form>
            </div>
        </>
    )
}