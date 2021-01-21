import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';


const CreateArea=(props)=> {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  };

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}><AddIcon/></button>
      </form>
    </div>
  );
}

export default CreateArea;
