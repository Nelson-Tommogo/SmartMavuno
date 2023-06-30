const addButton = document.getElementById('add');
const updateLocalStorageData = () =>{
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];
    console.log(textAreaData);
    textAreaData.forEach((note) =>{
        return notes.push(note.value);
    })
    console.log(notes);

    localStorage.setItem('MyNotes', JSON.stringify(notes))
}
const addNewNote = (text = '') => {

    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
                <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
                </div>

                <div class="main ${text ? "" : "hidden" } "></div>
                <textarea class=" ${ text ? "hidden": ""}"></textarea>   `;

    note.insertAdjacentHTML('afterbegin', htmlData);
    const editButton = note.querySelector('.edit');
    const deleteButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    deleteButton.addEventListener('click', ()=>{
        note.remove();
        updateLocalStorageData(); 
    })
    textArea.value = text;
    mainDiv.innerHTML = text;

    editButton.addEventListener('click', ()=>{
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })


    textArea.addEventListener('change', (event)=>{
        const value = event.target.value;
        mainDiv.innerHTML = value;
        updateLocalStorageData(); 
     })


document.body.appendChild(note)

}
const bounceBack_StoredLocalNotes = JSON.parse(localStorage.getItem('MyNotes'));

if(bounceBack_StoredLocalNotes){
    bounceBack_StoredLocalNotes.forEach( (curNote) => addNewNote(curNote))
}

addButton.addEventListener('click', ()=> addNewNote());