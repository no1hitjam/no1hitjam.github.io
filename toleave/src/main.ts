let h = document.getElementById("h");
let p = document.getElementById("p");
let score = document.getElementById("score");

let message: string = 'Hello World';
console.log(message);


function print_score() {
  let my_score = 0;
  let total = 0;
  for (let item in data) {
    total += 1;
    if (item in touched) {
      my_score += 1;
    }
  }
  score.innerText = "[";
  for (let i = 0; i < total; i++) {
    if (i < my_score) {
      score.innerText += "|";
    } else {
      score.innerText += "_";
    }
  }
  score.innerText += "]";
}

function click_btn(text: string) {
  p.removeChild(p.lastChild);
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
    b.setAttribute("onClick","click_btn(this.innerText)");
    this.base.appendChild(b);
    return this;
  }
}

var data = {
  "I": new MyNode().sp("I ").btn("felt").sp(" like I head to get ").btn("out").sp("."),
  "felt": new MyNode().sp("Felt in ").btn("danger").sp(" and the ").btn("need").sp(" to protect myself"),
  "out": new MyNode().sp("Out of everything, I ").btn("think").sp(" this is the best ").btn("choice").sp("."),
  "danger": new MyNode().sp("Danger is a construct, like an ").btn("extreme").sp(" stress ").btn("avoidance").sp(" tactic"),
  "need": new MyNode().sp("Need to ").btn("stop").sp(" worrying about this ").btn("choice").sp(" I've made."),
  "think": new MyNode().sp("Think, think, ").btn("think").sp(" That's all ").btn("I").sp(" do."),
  "choice": new MyNode().sp("Choice is an illusion, right? I ").btn("don't").sp(" ").btn("think").sp(" that matters."),
  "extreme": new MyNode().sp("Extreme ").btn("behavior").sp(" doesn't ").btn("need").sp(" to be tolerated."),
  "avoidance": new MyNode().sp("Avoidance is my go-to though, how can ").btn("I").sp(" ").btn("trust").sp(" myself?"),
  "stop": new MyNode().sp("Stop thinking ").btn("about").sp(" it, ").btn("stop").sp(", please!"),
  "don't": new MyNode().sp("Don't know if ").btn("I").sp(" did the ").btn("best").sp(" thing for me..."),
};

var touched = {};

h.textContent = "To Leave"


let curr = data["I"];

p.appendChild(curr.base);