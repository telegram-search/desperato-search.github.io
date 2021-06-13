function startSearch () {
    if (!checkTextAreaEmpty()) {
        document.getElementById('textAreaChats').disabled = true;
        document.getElementById('search-button').disabled = true;
        document.getElementById('search-loading').removeAttribute("hidden");
        document.getElementById('search-text-label-ru').innerText = "";
    }
}

function checkTextAreaEmpty () {
    if(document.getElementById("textAreaChats").value.replace(/\s+/g, ' ').trim() == '') {
        return true
    }
    return false;
}