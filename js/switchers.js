function categorySearch(chatsCategory) {
    disableConfig()

    var i;
    var categories = document.getElementsByClassName('categories-list')[0].children;

    var selectedStatusesArr = [];

    for(i = 0; i < categories.length; i++) {
        if(categories[i].nodeName === 'DIV') {
            if(categories[i].childNodes[3].childNodes[1].value === '1') {
                selectedStatusesArr.push('added');
            }
        }
    }

    var checkboxState = document.getElementById(chatsCategory).value

    if(checkboxState === '0') {
        document.getElementById(chatsCategory).value = '1'
        document.getElementById(chatsCategory).checked = true
        document.getElementById('textAreaChats').disabled = false;
        if(selectedStatusesArr.length === 0) {
            document.getElementById('textAreaChats').disabled = false;
        } else {
            document.getElementById('textAreaChats').disabled = true;
        }
    }

    if(checkboxState === '1') {
        document.getElementById(chatsCategory).value = '0'
        document.getElementById(chatsCategory).checked = false
        document.getElementById('textAreaChats').disabled = true;
        if(selectedStatusesArr.length === 0) {
            document.getElementById('textAreaChats').disabled = true;
        } else {
            document.getElementById('textAreaChats').disabled = false;
        }
    }
}

function disableConfig() {
    document.getElementById('textAreaChats').disabled = true;
    document.getElementById('ruChats').disabled = true;
    document.getElementById('enChats').disabled = true;
    document.getElementById('directSearch').disabled = true;
}