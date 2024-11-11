import { AppState } from "../AppState.js"
import { Note } from "../models/Notes.js"
import { loadState, saveState } from "../utils/Store.js"



class NoteService {

    createNote(formData){
        const createdNote = new Note (formData)
        AppState.Notes.push(createdNote)
        this.saveNote()
    }

    deleteNote(noteID){
            const deletedNote = AppState.Notes.find(note => note.id == noteID)
            console.log('delete', deletedNote);
            const removeNote = AppState.Notes.indexOf(deletedNote)
            AppState.Notes.splice(removeNote, 1)
            AppState.emit('activeNote')
            this.saveNote()

    }

    selectActiveNote(noteID){
        const selectedNote = AppState.Notes.find(Note => noteID == Note.id)
        console.log(selectedNote)
        AppState.activeNote = selectedNote
    }

    saveActiveNote(newNote){
        const note = AppState.activeNote
        note.body = (newNote)
        note.updatedAt = new Date()
        AppState.emit('activeNote')
        this.saveNote()
    }


    saveNote(){
        saveState('Notes', AppState.Notes)
        
    }

    loadNote(){
        AppState.Notes = loadState('Notes', [Note])
    }

}


export const noteService = new NoteService()