let h = document.getElementById("h");
let p = document.getElementById("p");
let score = document.getElementById("score");

let message: string = 'Hello World';
console.log(message);


function print_score() {
  score.innerText = "";
  let index = 0;
  for (let i = 0; i < data_keys.length; i++) {
    let key = data_keys[i];
    if (key == "I") {
      continue;
    }
    let letter_div = document.createElement("div");
    letter_div.className = "WavyLetter";
    score.appendChild(letter_div);
    if (key in touched) {
      letter_div.innerText = revealed_string[index];
    } else {
      letter_div.innerText = "*"
    }
    index += 1;
  }
}

function display_choice(text: string) {
  while (p.childElementCount > 0) {
    p.removeChild(p.lastChild);
  }
  touched[text] = true;
  print_score();
  p.appendChild(data[text].base);
}

class MyNode {
  public base: Node;
  constructor() {
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
    b.setAttribute("onClick","display_choice(this.innerText)");
    this.base.appendChild(b);
    return this;
  }
}

var data = {
  "I": new MyNode().sp("I ").btn("felt").sp(" like I had to get ").btn("out").sp("."),
  "felt": new MyNode().sp("felt in ").btn("danger").sp(" and the ").btn("need").sp(" to protect myself"),
  "out": new MyNode().sp("out of everything, this ").btn("seems").sp(" ").btn("best").sp("."),
  "seems": new MyNode().sp("seems like ").btn("I").sp(" could be ").btn("making").sp(" a mistake."),
  "best": new MyNode().sp("best for everyone, ").btn("I").sp(" ").btn("think"),
  "danger": new MyNode().sp("danger is like an ").btn("extreme").sp(" stress ").btn("avoidance").sp(" tactic"),
  "need": new MyNode().sp("need to ").btn("stop").sp(" worrying so ").btn("much").sp("."),
  "much": new MyNode().sp("much ado ").btn("about").sp(" ").btn("nothing").sp("."),
  "about": new MyNode().sp("about time I ").btn("trust").sp(" myself for ").btn("once").sp("."),
  "think": new MyNode().sp("think, think, think, that's ").btn("all").sp(" ").btn("I").sp(" do."),
  "extreme": new MyNode().sp("extreme ").btn("behavior").sp(" doesn't ").btn("need").sp(" to be tolerated."),
  "avoidance": new MyNode().sp("Avoidance is ").btn("making").sp(" it hard to ").btn("trust").sp(" ").btn("my").sp(" decision."),
  "stop": new MyNode().sp("stop thinking ").btn("about").sp(" it, please!"),
  "behavior": new MyNode().sp("behavior ").btn("change").sp(" isn't ").btn("all").sp(" or ").btn("nothing").sp("."),
  "all": new MyNode().sp("all ").btn("I").sp(" ").btn("want").sp(" is to love and be loved."),
  "nothing": new MyNode().sp("nothing ").btn("seems").sp(" to be what I ").btn("need").sp("."),
  "trust": new MyNode().sp("trust ").btn("will").sp(" never ").btn("last").sp("."), 
  "will": new MyNode().sp("will I be present and ").btn("stop").sp(" thinking?"),
  "want": new MyNode().sp("want to be ").btn("my").sp(" friend?"),
  "my": new MyNode().sp("my ").btn("behavior").sp(" isn't the ").btn("best").sp(" either..."),
  "change": new MyNode().sp("change ").btn("will").sp(" always be denied by ").btn("avoidance").sp("."),
  "making": new MyNode().sp("making ").btn("change").sp(" work is ").btn("all").sp(" ").btn("I").sp(" ").btn("want").sp(" to happen."),
  "last": new MyNode().sp("last time this didn't work ").btn("out").sp(" the ").btn("best"),
  "once": new MyNode().sp("once ").btn("I").sp(" get some sleep the feeling ").btn("will").sp(" ").btn("change").sp("."),
};

var revealed_string = "thoughtsarejustthoughts"

var data_keys = [];
for (let entry in data) {
  data_keys.push(entry);
}

var touched = {}

h.textContent = "To Leave"


display_choice("I");