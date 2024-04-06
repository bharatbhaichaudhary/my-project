const quesions = [
  {
    que: "Which of the following is a markup language?",
    a: "HTML",
    b: "css",
    c: "js",
    d: "php",
    correct: "a",
  },
  {
    que: "Weat year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1222",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "What does css stands for?",
    a: "Hypertet Markup language",
    b: "cascading Style Shiet",
    c: "Jason Object Notation",
    d: "JAVA",
    correct: "b",
  },
];
let index = 0;
let totel = quesions.length;
let right = 0,
  wrong = 0;
const quesBox = document.getElementById("quesBox");
const oprtionInput = document.querySelectorAll(".oprtion");
const loadQuestion = () => {
  if (index === totel) {
    return endQuiz();
  } else {
    reset();
  }
  const data = quesions[index];
  quesBox.innerText = `${index + 1}) ${data.que}`;
  oprtionInput[0].nextElementSibling.innerText = data.a;
  oprtionInput[1].nextElementSibling.innerText = data.b;
  oprtionInput[2].nextElementSibling.innerText = data.c;
  oprtionInput[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = quesions[index];
  const ans = grtAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const grtAnswer = () => {
  let answer;
  oprtionInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
    // return input.ariaValueMax;
  });
  return answer;
};

const reset = () => {
  oprtionInput.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
   <h3>Thank you</h3>
   <h2>${right}/ ${totel}</h2>
  `;
};

loadQuestion();
