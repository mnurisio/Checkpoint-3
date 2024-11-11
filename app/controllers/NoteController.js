import { AppState } from "../AppState.js";
import { noteService } from "../services/NotesService.js";
import { EventEmitter } from "../utils/EventEmitter.js";



export class NoteController {
    constructor() {
        // this.drawNotes()
        AppState.on('Notes', this.drawNotes)
        AppState.on('activeNote', this.drawActiveNote)
        AppState.on('activeNote', this.drawNotes)
        noteService.loadNote()

    }

    drawNotes() {
        const notesElem = document.getElementById('notes-list')
        notesElem.innerHTML = ''
        AppState.Notes.forEach(Notes => notesElem.innerHTML += Notes.listTemplate)
        const noteCountElem = document.getElementById('note-count')
        noteCountElem.innerText = AppState.Notes.length.toString()
    }

    drawActiveNote(){
        const activeNote = document.getElementById('note-active')
        activeNote.innerHTML = AppState.activeNote.activeTemplate
    }

    createNote() {
        console.log('create note');
        window.event.preventDefault()
        const formElm = event.target
        const formData = {
            color: formElm.color.value,
            title: formElm.title.value,
        }
        noteService.createNote(formData)
        this.drawNotes()
    }

    selectActiveNote(noteID){
        noteService.selectActiveNote(noteID)
    }

    saveActiveNote(){
        window.event.preventDefault()
        const formElm = event.target
        let newNote = formElm.body.value
        noteService.saveActiveNote(newNote)

        
    }

    deleteNote(noteID){
        const confirmed = confirm('Are you sure you wanna delete this thang?')
        if(!confirmed) return
        const typeItOut = prompt('Please type "Yes, no one can know my thoughts" to delete')
        if(typeItOut != 'Yes, no one can know my thoughts') return
        noteService.deleteNote(noteID)
        this.drawNotes()
    }


}