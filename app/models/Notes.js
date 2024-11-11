import { generateId } from "../utils/GenerateId.js"


export class Note {
    constructor(data) {
        this.id = data.id || generateId()
        this.title = data.title
        this.color = data.color
        this.body = data.body || ''
        this.createdAt = data.createdAt == undefined ? new Date() : new Date(data.createdAt)
        this.updatedAt = data.updatedAt == undefined ? new Date() : new Date(data.updatedAt)
    }



    get listTemplate() {
        return `
 <div onclick="app.NoteController.selectActiveNote('${this.id}')" role="button" class="container-fluid ${this.color}">
     <div class="row justify-content-between pt-2 bg-white">
         <div class="col-7 text-start">
             <h6>${this.title}</h6>
         </div>
         <div class="col-3 text-center p-1 me-2">${this.reportedDate}</div>
         <div class="py-4">${this.body}</div>
     </div>
 </div>
 <hr>
 `
    }

    get activeTemplate(){
        return `
        <div class="${this.color} bg-secondary px-3 pb-5 pt-2 mt-3 me-5">
          <div class="row align-items-end">
            <div class="col-6">
              <h4>${this.title}</h4>
              <p class="fw-bold mb-0">Created Date: ${this.reportedDate}</p>
              <p class="fw-bold">Updated At: ${this.updatedDate}</p>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-end mb-2">
                <button onclick="app.NoteController.deleteNote('${this.id}')" class="me-2 btn btn-danger"><i class="mdi mdi-delete"></i> Delete</button><button
                  class="btn btn-success" form="body-note"><i class="mdi mdi-content-save-all"></i> Save</button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <form id="body-note" onsubmit="app.NoteController.saveActiveNote()">
                <textarea class="form-control p-3" rows="25" name="body" id="note-body">${this.body}</textarea>
              </form>
            </div>
          </div>
        </div>
        `
    }

    get reportedDate(){
        return this.createdAt.toLocaleDateString('en-us', {month: '2-digit', day: '2-digit', year: '2-digit'})
    }

    get updatedDate(){
        return this.updatedAt.toLocaleDateString('en-us', { weekday: 'short', month: 'long', day: '2-digit', year: 'numeric', hour: 'numeric', minute: 'numeric'})
    }
}