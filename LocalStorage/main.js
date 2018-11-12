
function save(name, value) {
    let data = localStorage.setItem(name, value);
    // let data1 = localStorage.setItem('name1', 'Igor');
    if (data == undefined) {
        console.log('there is no data');
    }
}

function getItem(name) {
    let readData = localStorage.getItem(name);

    console.log(readData);
}
function reset() {
    var erased = localStorage.clear();
}
// save();
save('name2', 'Miodrag')
getItem(name);
// reset();


function saveSession(name, value) {
    let data = sessionStorage.setItem(name, value);
    // let data1 = localStorage.setItem('name1', 'Igor');
}

function getSessionItem(name) {
    let readSessionData = sessionStorage.getItem(name);

    console.log(readSessionData);
}
function resetSession() {
    var erasedSession = sessionStorage.clear();
}
// saveSession("name", "Nenad");
// saveSession('name2', 'Miodrag')
// getSessionItem("name");
// reset();