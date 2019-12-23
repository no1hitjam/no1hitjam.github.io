var h = document.getElementById("h");
var p = document.getElementById("p");
var score = document.getElementById("score");
var El = /** @class */ (function () {
    function El(text) {
        this.text = text;
        this.base = document.createElement("span");
    }
    El.prototype.sp = function (text) {
        var s = document.createElement("span");
        s.innerText = text;
        this.base.appendChild(s);
        return this;
    };
    El.prototype.btn = function (text) {
        var b = document.createElement("button");
        b.innerText = text;
        b.setAttribute("onClick", "display(this.innerText)");
        this.base.appendChild(b);
        return this;
    };
    return El;
}());
var initial = "how";
var data_raw = [];
var data = function () {
    var delims = [" ", ",", ".", "!", "?", "'"];
    // get all keys
    var data = {};
    var _loop_1 = function (i) {
        var entry = data_raw[i];
        var key_length = delims.map(function (s) { return entry.indexOf(s); })
            .reduce(function (prev, curr, _, __) { return curr >= 0 && curr < prev ? curr : prev; }, entry.length);
        var key = entry.substr(0, key_length);
        data[key] = new El(entry);
        console.log("{{" + key + ", " + key_length + "}}");
        console.log(entry);
    };
    for (var i = 0; i < data_raw.length; i++) {
        _loop_1(i);
    }
    console.log(data);
    // sequence by checking against keys
    for (var key in data) {
        var pin = 0;
        for (var i = 1; i < data[key].text.length - key.length; i++) {
            for (var other_key in data) {
                if (data[key].text[i - 1] == " "
                    && data[key].text.substr(i, other_key.length) == other_key
                    && delims.indexOf(data[key].text.substr(i + other_key.length, 1)) != -1) {
                    data[key].sp(data[key].text.substring(pin, i));
                    data[key].btn(other_key);
                    i += other_key.length;
                    pin = i;
                }
            }
        }
        data[key].sp(data[key].text.substring(pin));
    }
    return data;
}();
var revealed_string = "thoughtsarejustthoughts......";
var touched = {};
function print_score() {
    score.innerText = "";
    var index = 0;
    for (var key in data) {
        if (key == initial) {
            continue;
        }
        var letter_div = document.createElement("div");
        letter_div.className = "WavyLetter";
        score.appendChild(letter_div);
        if (key in touched) {
            letter_div.innerText = revealed_string[index];
        }
        else {
            letter_div.innerText = "*";
            letter_div.style.color = "#888";
        }
        index += 1;
    }
}
function display(text) {
    while (p.childElementCount > 0) {
        p.removeChild(p.lastChild);
    }
    touched[text] = true;
    print_score();
    p.appendChild(data[text].base);
}
h.textContent = "To Leave";
display("how");
