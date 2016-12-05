function CompleteQuestion(questions, correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3, standard) {
  this.question = question;
  this.correctAnswer = correctAnswer;
  this.incorrectAnswer1 = incorrectAnswer1;
  this.incorrectAnswer2 = incorrectAnswer2;
  this.incorrectAnswer3 = incorrectAnswer3;
  this.standard = standard;
  return this;
}

function CompleteQuestion() {
  this.question = 'test';
  this.correctAnswer;
  this.incorrectAnswer1;
  this.incorrectAnswer2;
  this.incorrectAnswer3;
  //this.standard;

  return this;
}
