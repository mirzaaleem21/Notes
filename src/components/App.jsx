import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const addNotes = (note) => {
    setItems((prevItems) => {
      return [...prevItems, note];
    });
  };

  const deleteNotes = (id) => {
    console.log(id);

    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {items.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNotes}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
