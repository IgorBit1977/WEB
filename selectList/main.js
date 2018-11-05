function createSelect(array, tag) {
    var select = document.createElement('select');
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement('option');
        var text = document.createTextNode(array[i]);
        option.appendChild(text);
        select.appendChild(option);
    }

    tag.appendChild(select);
}
var drugiDiv = document.querySelector('div:nth-of-type(2)');
createSelect([1, 2, 3, 4, 55], drugiDiv);


function createSelectInner(array, tag) {
    var string = "";
    for (var i = 0; i < array.length; i++) {

        string += "<option>" + array[i] + "</option> ";
    }


    treciDiv.innerHTML = "<select>" + string + "</select>";
}

var treciDiv = document.querySelector('div:last-of-type');

createSelectInner([1, 2, 3, 4, 5, 6, 7, 8, 9], treciDiv);