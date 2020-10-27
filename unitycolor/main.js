function fix(v) {
    v = v.toFixed(2);
    while(v.length > 0 && v.endsWith("0")) {
        v = v.substr(0, v.length - 1);
    }
    return v;
}

function on_submit() {
    var s = input_text.value;
    s = s.trim();
    if (s.startsWith("#")) {
        s = s.substr(1);
    }
    if (s.length < 6) {
        return;
    }
    var r = fix(parseInt(s.substr(0, 2), 16) / 255.0);
    var g = fix(parseInt(s.substr(2, 2), 16) / 255.0);
    var b = fix(parseInt(s.substr(4, 2), 16) / 255.0);

    result.innerHTML = "new Color(" + r + "f, " + g + "f, " + b + "f)";
}

var form = document.createElement("form");
document.body.appendChild(form);

var label = document.createElement("label");
label.innerHTML = "Color hex string: "
form.appendChild(label);

var input_text = document.createElement("input");
input_text.type = "text";
form.appendChild(input_text);

var input_submit = document.createElement("input");
input_submit.type = "button";
input_submit.value = "Convert";
input_submit.onclick = on_submit;
form.appendChild(input_submit);

var result = document.createElement("div");
document.body.appendChild(result);

