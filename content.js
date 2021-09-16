function load_setting(key) {
    return localStorage.getItem(key) ? localStorage.getItem(key) : 'aaa';
}

var text_company = load_setting("company");
var text_section = load_setting("section");
var text_name = load_setting("name");
var text_address = load_setting("email");
var text_tel = load_setting("address");
var text_email = load_setting("tel");
var text_url = load_setting("url");

var arg =
        "company=" + encodeURI(text_company) +
        "&section=" + encodeURI(text_section) +
        "&name=" + encodeURI(text_name) +
        "&email=" + encodeURI(text_email) +
        "&address=" + encodeURI(text_address) +
        "&tel=" + encodeURI(text_tel) +
        "&url=" + encodeURI(text_url)
      ;
window.open("download.php?" + arg);
window.history.back();
