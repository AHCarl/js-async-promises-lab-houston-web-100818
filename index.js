const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion() {
  let q = document.createElement("p");
  q.innerHTML = questions["questionText"]
  document.querySelector(".question-container").appendChild(q)
}