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
    if (key in touched) {
      score.innerText += "X";
    } else {
      score.innerText += "."
    }
    index += 1;
    if (index % 4 == 0) {
      score.innerHTML += "<br />"
    }
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
  "out": new MyNode().sp("out of everything, I ").btn("think").sp(" this is the best ").btn("choice").sp("."),
  "danger": new MyNode().sp("danger is a construct, like an ").btn("extreme").sp(" stress ").btn("avoidance").sp(" tactic"),
  "need": new MyNode().sp("need to ").btn("stop").sp(" worrying about this ").btn("choice").sp(" I've made."),
  "think": new MyNode().sp("think, think, think, that's all ").btn("I").sp(" do."),
  "choice": new MyNode().sp("choice is an illusion, right? I ").btn("don't").sp(" ").btn("think").sp(" that matters."),
  "extreme": new MyNode().sp("extreme ").btn("behavior").sp(" doesn't ").btn("need").sp(" to be tolerated."),
  "avoidance": new MyNode().sp("Avoidance is ").btn("making").sp(" it hard to ").btn("trust").sp(" my decision."),
  "stop": new MyNode().sp("stop thinking ").btn("about").sp(" it, please!"),
  "don't": new MyNode().sp("don't know if ").btn("I").sp(" did the ").btn("best").sp(" thing for me..."),
  "behavior": new MyNode().sp("behavior ").btn("change").sp(" isn't all or nothing, ").btn("I").sp(" ").btn("need").sp(" to be patient"),
  "trust": new MyNode().sp("trust ").btn("will").sp(" be broken, that's a fact of ").btn("life").sp("."), 
  "will": new MyNode().sp("will I be present and ").btn("stop").sp(" thinking?"),
  "change": new MyNode().sp("change is refuted with ").btn("avoidance").sp("."),
  "making": new MyNode().sp("making a ").btn("commitment").sp(" to meditate so I can ").btn("trust").sp(" myself."),
  "commitment": new MyNode().sp("commitment tends to ").btn("read").sp(" as ").btn("danger").sp(" unfortunately"),
  "read": new MyNode().sp("read their ").btn("behavior").sp(" and ").btn("focus").sp(" on them."),
  "focus": new MyNode().sp("focus on ").btn("making").sp(" this a ").btn("learning").sp(" experience."),
  "learning": new MyNode().sp("learning is the ").btn("extreme").sp(" opposite of ").btn("avoidance"),
  "best": new MyNode().sp("best to not ").btn("think").sp(" ").btn("about").sp(" it."),
  "about": new MyNode().sp("about time ").btn("I").sp(" ").btn("stop").sp(" taking shit from people!"),
  "life": new MyNode().sp("life is worth living, ").btn("I").sp(" ").btn("read").sp(" that somewhere ").btn("once").sp("."),
  "once": new MyNode().sp("once ").btn("I").sp(" ").btn("get").sp(" some sleep the feeling ").btn("will").sp(" ").btn("change").sp("."),
  "get": new MyNode().sp("get the ").btn("will").sp(" to make a ").btn("change"),
};

var data_keys = [];
for (let entry in data) {
  data_keys.push(entry);
}

var touched = {}

h.textContent = "To Leave"


display_choice("I");