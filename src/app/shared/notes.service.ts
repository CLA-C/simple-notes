import { Injectable } from '@angular/core';

import { Note } from './models/note';

/**
 * This is the service who manages all business logic of Notes
 * 
 * Notes will be stored using localstorage
 * 
 * Available methods are: 
 *  - list
 *  - insert
 *  - update
 *  - getNote
 *  - delete
 */


@Injectable()
export class NotesService {
  
  //get all notes 
  list(): Note[] {
    
    if (!localStorage.getItem('simpleNotes')) {  //if there isn't a list in ls create a empty one

      localStorage.setItem('simpleNotes', JSON.stringify([]))
      return []

    } else { //return the list from ls

      return JSON.parse(localStorage.getItem('simpleNotes'))
      
    }
  }

  //insert a new note into ls
  insert() {
    
    let list = this.list(),
        newNote: Note = <Note>{}

    //create id for new note
    newNote.id = createId()
    //create temp title
    newNote.title = 'Insert title'

    list.push(newNote)

    //put new list in ls
    localStorage.setItem('simpleNotes', JSON.stringify(list))

    return newNote

  }

   //update an existing note
  update(note: Note) {
    
    let list = this.list(),
        indexToUpdate = list.findIndex( (el: Note) => el.id === note.id )

    if (indexToUpdate > -1) //update element if found 
      list[indexToUpdate] = note

    //put new list in ls
    localStorage.setItem('simpleNotes', JSON.stringify(list))

    return note

  }

  //get a single note given its id
  getNote(id: string) {

    let list = this.list()
    //find the note in lust
    let note = list.find( (el: Note) => el.id === id )
    return note

  }


  delete(id: string) {

    let list = this.list(),
        //find index of note to delete
        indexToDelete = list.findIndex( (el: Note) => el.id === id )
    
    if (indexToDelete > -1) //remove element if found 
      list.splice(indexToDelete, 1)
    
    //put new list in ls
    localStorage.setItem('simpleNotes', JSON.stringify(list))
    
    return list

  }

}

//mock function to create an id
const createId = () => "id" + Math.random().toString(36).substring(8);

//mock datas to test
// const mockNotes: Note[] = [
//   {
//     id: 'id50004',
//     title: 'A good note',
//     content: 'What a bautiful idea'
//   },
//   {
//     id: 'id5033',
//     title: 'Remember to do dishes',
//     content: 'Consume Clean Die'
//   }
// ]

