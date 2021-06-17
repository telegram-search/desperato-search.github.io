function startSearch () {
    if (!checkTextAreaEmpty() || document.getElementById('textAreaChats').disabled === true) {
        document.getElementById('textAreaChats').disabled = true;
        document.getElementById('search-button').disabled = true;
        document.getElementById('search-loading').removeAttribute("hidden");
        document.getElementById('search-text-label-ru').innerText = "";
        sendSearchData()
    }
}

function checkLanguageSettings (lang) {
    var ru = document.getElementById('ruChats').checked;
    var en = document.getElementById('enChats').checked;


    if (lang === 'ru') {
        if(ru) {
            document.getElementById('enChats').disabled = true;
            document.getElementById('ruChats').value = '1'
        } else {
            document.getElementById('enChats').disabled = false;
            document.getElementById('ruChats').value = '0';
        }
    } else if (lang === 'en') {
        if(en) {
            document.getElementById('ruChats').disabled = true;
            document.getElementById('enChats').value = '1';
        } else {
            document.getElementById('ruChats').disabled = false;
            document.getElementById('enChats').value = '0'
        }
    }

}

function checkTextAreaEmpty () {
    if(document.getElementById("textAreaChats").value.replace(/\s+/g, ' ').trim() == '') {
        return true
    }
    return false;
}

function sendSearchData () {
    console.log(document.getElementById('searchFormData'));
}