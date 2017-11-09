var canclear = true;

function cleartopicfield() {
    if (document.getElementById("topic").innerHTML == "Topic" && canclear) {
        document.getElementById("topic").innerHTML = "";
    }
}

function enableedit() {
    canclear = true;
    $('#changeedit').attr('onclick', 'disableedit()');
    $('button#changeedit').text("Disable editing");
    $('.edit').attr('contenteditable','true');
}

function disableedit() {
    canclear = false;
    $('#changeedit').attr('onclick', 'enableedit()');
    $('button#changeedit').text("Enable editing");
    $('.edit').attr('contenteditable','false');
}