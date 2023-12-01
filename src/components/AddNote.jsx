// import { useState } from "react";

// function AddNote() {
// const [noteText, setNoteText] = useState('');

// const handleChange = (event) => {
// // console.log(event.target.value)
// setNoteText(event.target.value)
// };

// // The next is to create a function for it to add the note

// const handleSaveClick = () => {
//     handleAddNote()
// }
//   return (
//     <>
//     <div className="n                                 ote new">
//     <textarea
//      cols="10" 
//      rows="8" placeholder="Type to add a note"
//      value={noteText}
//      onChange={handleChange}
//      >
//      </textarea>
//      <div className="note-footer">
//         <small>200 Remaining</small>
//         <button className="save" onClick={handleSaveClick}>Save</button>
//      </div>
//     </div>
//     </>
//   );
// }

// export default AddNote;


import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  // conuting thie number of text
  const characterLimit = 200;

  const handleChange = (event) => {
    // console.log(event.target.value)
    // This is showing us to tark some length of the value
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  }

  const handleSaveClick = () => {
    // To make my note text area  to delete when I save my note

    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('')
    }
  }

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      >
      </textarea>

      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}

export default AddNote