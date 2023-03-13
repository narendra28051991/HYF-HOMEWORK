console.log("\n\n\nNOnoN0nOYes (NOTE TAKING APP)\n\n");

const notes = [];

function saveNote(content, id) {
    notes.push({content, id});
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

function getNote(id) {
    for (let item = 0; item < notes.length; item++) {
      if (notes[item].id === id) {
        return notes[item];
      }
    }
}

const firstNote = getNote(1);
console.log(firstNote);

function logOutNotesFormatted() {
    for (const item of notes) {
        console.log(`\nThe note with id: ${item.id}, has the following note text: ${item.content}`);
    }
}

logOutNotesFormatted();
