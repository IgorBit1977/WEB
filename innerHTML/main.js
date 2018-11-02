function createOptionsInnerHTML(arrayOfStrings, selectDiv) {
    var string = "";
    for (var i = 0; i < arrayOfStrings.length; i++) {
        string += '<option>' + arrayOfStrings[i] + ' </option>';
    }

    selectDiv.innerHTML = "<select>" + string + "</select>";
}
var prviDiv = document.querySelector("div:first-of-type");
createOptionsInnerHTML(["opcija1", "opcija2", "opcija3"], prviDiv);



function createOptionsDomManipulation(arrayOfStrings, selectDiv) {
    var text;
    var option;
    var select = document.createElement("select");
    for (var i = 0; i < arrayOfStrings.length; i++) {
        text = document.createTextNode(arrayOfStrings[i]);
        option = document.createElement('option');
        option.appendChild(text);
        select.appendChild(option);
    }

    selectDiv.appendChild(select);
}
var poslednjiDiv = document.querySelector("div:last-of-type");
createOptionsDomManipulation(["opcija1", "opcija2", "opcija3"], poslednjiDiv);
