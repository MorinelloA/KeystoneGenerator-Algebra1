function generateContent14(){
    //Question blank object
    var newQuestion = new QuestionObj();
    
    newQuestion.isDeployed = true;
    newQuestion.anchor = 'Linear Inequalities';
    newQuestion.content = 'Identify or graph the solution set to a linear inequality on a number line';

    var startingNum = Math.floor(Math.random() * 7000) + 1001;
    var increment = Math.floor(Math.random() * 75) + 21;

    newQuestion.question = 'The following numbers start a pattern:<br><br>' +
        numberWithCommas(startingNum) + ' ' + numberWithCommas(startingNum + increment) + ' ' + numberWithCommas(startingNum + (increment * 2)) + ' ' + numberWithCommas(startingNum + (increment * 3)) + ' ' + numberWithCommas(startingNum + (increment * 4)) + '<br><br>' +
        'Which expression can be used to determine the n number in the pattern?';

    newQuestion.correctAnswer = increment + 'n + ' + numberWithCommas(startingNum);

    newQuestion.incorrect1 = increment + '(n + ' + numberWithCommas(startingNum) + ')';
    newQuestion.incorrect2 = numberWithCommas(startingNum) + 'n + ' + increment;
    newQuestion.incorrect3 = numberWithCommas(startingNum) + 'n';

    return newQuestion;
}