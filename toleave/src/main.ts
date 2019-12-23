var h = document.getElementById("h");
var p = document.getElementById("p");
var score = document.getElementById("score");

class El {  // ement
  public base: Node;
  public text: string;
  constructor(text: string) {
    this.text = text;
    this.base = document.createElement("span");
  }

  sp(text: string) {
    let s = document.createElement("span");
    s.innerText = text;
    this.base.appendChild(s);
    return this;
  }

  btn(text: string) {
    let b = document.createElement("button");
    b.innerText = text;
    b.setAttribute("onClick","display(this.innerText)");
    this.base.appendChild(b);
    return this;
  }
}

const initial: string = "how";
const data_raw: string[] = [];

var data = function () {
  const delims = [" ", ",", ".", "!", "?", "'"];
  // get all keys
  let data = {};
  for (let i = 0; i < data_raw.length; i++) {
    let entry = data_raw[i];
    let key_length: number = delims.map(s => entry.indexOf(s))
      .reduce((prev, curr, _, __) => curr >= 0 && curr < prev ? curr : prev, entry.length);
    let key: string = entry.substr(0, key_length);
    data[key] = new El(entry);
    console.log("{{" + key + ", " + key_length + "}}");
    console.log(entry);
  }
  console.log(data);
  // sequence by checking against keys
  for (const key in data) {
    let pin = 0;
    for (let i = 1; i < data[key].text.length - key.length; i++) {
      for (const other_key in data) {
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

var revealed_string = "thoughtsarejustthoughts......"

var touched = {}


function print_score() {
  score.innerText = "";
  let index = 0;
  for (const key in data) {
    if (key == initial) {
      continue;
    }
    let letter_div = document.createElement("div");
    letter_div.className = "WavyLetter";
    score.appendChild(letter_div);
    if (key in touched) {
      letter_div.innerText = revealed_string[index];
    } else {
      letter_div.innerText = "*";
      letter_div.style.color = "#888";
    }
    index += 1;
  }
}

function display(text: string) {
  while (p.childElementCount > 0) {
    p.removeChild(p.lastChild);
  }
  touched[text] = true;
  print_score();
  p.appendChild(data[text].base);
}



h.textContent = "To Leave"

display("how");