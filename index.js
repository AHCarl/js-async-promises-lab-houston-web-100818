const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

const questionContainer = document.querySelector('.question-container')

let question;

function appendQuestion(question) {
  questionContainer.innerHTML = question.questionText;
}

function askQuestionThen(time) {
  question = questions[0]
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(question)
    }, time)
  })
}

function removeQuestion() {
  questionContainer.innerHTML = ''
}

function askQuestionThenRemoveQuestion() {
  
}