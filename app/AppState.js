import { Note } from './models/Notes.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

Notes = [
  new Note ({
    title: 'best spongebob character',
    body: 'obviously its gary the snail, squidward is the worst, guy just has a horrible attitude',
    createdAt: '11/08/2024',
    color: 'Red'
  }),
  new Note ({
    title: 'can woodchucks chuck wood?',
    body: 'based off of empirical and anecdotal evidence, it appears through observation that woodchucks can indeed chuck wood',
    createdAt: '11/08/2024',
    color: 'Blue'
  }),
  new Note ({
    title: 'How to MVC',
    body: 'Marsupial Volunteer Care. You must travel to Australia and adopt a marsupial of your choice for 6 months and care for them as a pet',
    createdAt: '11/08/2024',
    color: 'Green'
  }),
]

/** @type {Note} */
activeNote= null

}

export const AppState = createObservableProxy(new ObservableAppState())