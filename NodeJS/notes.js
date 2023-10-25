const fs = require('fs');
const getNotes = function(){
    return 'Your notes...'
};

const loadNotes = function() {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    }
catch(e) {
    return []
}

    
 }

 const saveNotes = function(notes){
    const dataJSON = JSON.stringify(saveNotes)
    fs.writeFileSync('notes.json',dataJSON)
}

 


const addNote = function(title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note){
        return note.title ===title// quality operator - zero items if no duplicates
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
console.log('New note added');



    }else {
        console.log('Title is taken')
    }

    

   
    // console.log(notes)
    notes.push({
        title: title,
        body: body
        })
    saveNotes(notes)

}


module.exports = {
    getNotes: getNotes,
    addNote: addNote
    }
    