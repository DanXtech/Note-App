// // import Note from "./Note";

// // const NotesList = () => {
// //   return (
// //     <>
// //       <div className="note-list">
// //         <Note />
// //       </div>
// //     </>
// //   )
// // }
// // export default NotesList;

// import Note from "../components/Note"
// import AddNote from './AddNote';
// function NotesList({notes, handleAddNote}) {
//   return (
//     <>
//       <div className="notes-list">
//         {/* <Note /> */}  
//       {notes.map((note) =>( 
// <Note
//  id={note.id}
//   text={note.text}
//   date={note.date}/>
//       ))}

//   <AddNote handleAddNote={handleAddNote}/>
//       </div>
//     </>
//   );
// }

// export default NotesList;


// // ES7 + React/Redux/React-Native snippets
import Note from "./Note";
import AddNote from "./AddNote";

// you can distruture this in this pros
const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {/* <Note /> */}
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NotesList