let create = document.getElementById("create");
let newNote = document.getElementById("add");
let form = document.getElementById("form");
let exit = document.getElementById("exit");
let title = document.getElementById("title");
let note = document.getElementById("note");
let searchBar = document.getElementById("search")




function clearInputs() {
    title.value = '';
    note.value = '';
}




create.onclick = function () {
    form.classList.remove("hide");
    console.log("done")
}

exit.onclick = function () {
    form.classList.add("hide");
}





let data;
if (localStorage.notes != null) {
    data = JSON.parse(localStorage.notes);
}
else {
    data = [];
}




newNote.onclick = function () {
    let Notes = {
        title: title.value,
        note: note.value
    }
    data.push(Notes);
    localStorage.setItem("notes", JSON.stringify(data));
    clearInputs();
    showData();
    form.classList.add("hide");
}

showData();
function showData() {
    let table = '';
    for (i = 0; i < data.length; i++) {
        table += `
            <div class="noteItem">
                <button id="delete" onclick="deleteItems(${i})"><img src="trash-bin.png"></button>
                <h1>${data[i].title}</h1>
                <p>${data[i].note}</p>
            </div>
        
        `
    }

    document.getElementById("notes").innerHTML = table;

}

function deleteItems(i) {
    data.splice(i, 1);
    localStorage.notes = JSON.stringify(data);
    showData();
}

function search() {
    let table = '';
    for (i = 0; i < data.length; i++) {
        if(data[i].title.includes(searchBar.value)) {
            table += `
                <div class="noteItem">
                    <button id="delete" onclick="deleteItems(${i})"><img src="trash-bin.png"></button>
                    <h1>${data[i].title}</h1>
                    <p>${data[i].note}</p>
                </div>
        `
            document.getElementById("notes").innerHTML = table;
        }
    }

}



