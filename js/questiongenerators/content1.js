function generateContent1(){
    //Question blank object
    var newQuestion = new QuestionObj();
    
    newQuestion.isDeployed = true;
    newQuestion.anchor = 'Operations with Real Numbers and Expressions';
    newQuestion.content = 'Simplify square roots';
    
    var tempOutside, tempInside, x;

    //Random number 2-6. Used for outside of SqRt
    tempOutside = Math.floor((Math.random() * 5) + 2);
    do
    {
        //Random number 21 - 81. Used for inside of SqRt
        //Checked in loop to make sure its not a SqRt
        tempInside = Math.floor((Math.random() * 61) + 21);
    }while(Math.sqrt(tempInside) % 1 == 0);

    //Two lines to find x
    //random number 3-7
    x = Math.floor((Math.random() * 5) + 3);

    newQuestion.incorrect1 = x;
    x *= x;
    newQuestion.correctAnswer = x;
    newQuestion.incorrect2 = x * 2;
    newQuestion.incorrect3 = x * 4;
 
    newQuestion.question = "What value of x makes the expression " + tempOutside + "\u221A" + tempInside + "x equivalent to " + (tempOutside * Math.sqrt(x) + "\u221A" + tempInside);

    return newQuestion;
}