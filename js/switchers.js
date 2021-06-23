function categorySearch(chatsCategory) {
    disableConfig()

    var checkboxState = document.getElementById(chatsCategory).value

    if(checkboxState === '0') {
        document.getElementById(chatsCategory).value = '1'
        document.getElementById(chatsCategory).checked = true
        document.getElementById('textAreaChats').disabled = false;
        if(getActiveOptions() === 0) {
            document.getElementById('textAreaChats').disabled = false;
            enableConfig();
        } else {
            document.getElementById('textAreaChats').disabled = true;
        }
    }

    if(checkboxState === '1') {
        document.getElementById(chatsCategory).value = '0'
        document.getElementById(chatsCategory).checked = false
        if(getActiveOptions() === 0) {
            document.getElementById('textAreaChats').disabled = false;
            enableConfig();
        } else {
            document.getElementById('textAreaChats').disabled = true;
        }
    }
}

function disableConfig() {
    document.getElementById('options-container-2').classList.add("disable-options")
}

function enableConfig() {
    document.getElementById('options-container-2').classList.remove("disable-options")
}

function getActiveOptions() {

    var i;
    var selectedStatusesArr = [];
    var categories = document.getElementsByClassName('categories-list')[0].children;

    for(i = 0; i < categories.length; i++) {
        if(categories[i].nodeName === 'DIV') {
            if(categories[i].childNodes[3].childNodes[1].value === '1') {
                selectedStatusesArr.push('added');
            }
        }
    }

    return selectedStatusesArr.length;
}