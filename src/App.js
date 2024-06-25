import React, { useState } from 'react'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote'
import Note from './Note';

function App() {
  const [addItem, setAddItem] = useState([])

  const addNote = (note) => {
    setAddItem((prev) => {
      return [...prev, note]
    })
    // console.log(note);
  }

  const onDelete = (id) => {
    setAddItem((old) => {
      return old.filter((curr, index) => {
        return index !== id
      })

    })
  }
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {
        addItem.map((val, indx) => {

          console.log(val, indx)
          return (
            <Note
              key={indx}
              id={indx}
              title={val.title}
              content={val.content}
              deleteItem={onDelete} />
          )
        })
      }

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App;
