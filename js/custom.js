function startSearch () {
    document.getElementById('textAreaChats').disabled = true;
    document.getElementById('search-button').disabled = true;
    document.getElementById('search-loading').removeAttribute("hidden");
    document.getElementById('search-text-label-ru').innerText = "";
}