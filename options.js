function load_setting(key) {
    return localStorage.getItem(key) ? localStorage.getItem(key) : 'aaa';
}

function save_setting(key, value) {
    localStorage.setItem(key, value);
}

window.onload = function(){
    var btn = document.getElementById("btn-save");
    var textarea = document.getElementById("text-format");

    // initialize
    document.getElementById("company").value = load_setting("company");
    document.getElementById("section").value = load_setting("section");
    document.getElementById("name").value = load_setting("name");
    document.getElementById("email").value = load_setting("email");
    document.getElementById("address").value = load_setting("address");
    document.getElementById("tel").value = load_setting("tel");
    document.getElementById("url").value = load_setting("url");

    // set save event
    btn.addEventListener("click", function(){
        save_setting("company", document.getElementById("company").value);
        save_setting("section", document.getElementById("section").value);
        save_setting("name", document.getElementById("name").value);
        save_setting("email", document.getElementById("email").value);
        save_setting("address", document.getElementById("address").value);
        save_setting("tel", document.getElementById("tel").value);
        save_setting("url", document.getElementById("url").value);
        alert("saved!");
    });
}