function generateContent13(){
    //Question blank object
    var newQuestion = new QuestionObj();
    
    newQuestion.isDeployed = true;
    newQuestion.anchor = 'Linear Inequalities';
    newQuestion.content = 'Write or solve compound inequalities and/or graph their solution sets on a number line';
    
    //Less than unicode - &#60
    //Great than unicode - &#62
    //Less than equal to unicdoe - &#8804
    //Greater than equal to unicode - &#8805

    //Generate number for random equality sign
    var temp = Math.floor(Math.random() * 4);
    var equalitySign, oppEqualitySign;
    switch(temp){
        case 0:
            equalitySign = ' &#60; ';
            oppEqualitySign = ' &#62; ';
            break;
        case 1:
            equalitySign = ' &#8804; ';
            oppEqualitySign = ' &#8805; ';
            break;
        case 2:
            equalitySign = ' &#62; ';
            oppEqualitySign = ' &#60; ';
            break;
        case 3:
            equalitySign = ' &#8805; ';
            oppEqualitySign = ' &#8804; ';
            break;
        default:
            equalitySign = ' &#60; ';
            oppEqualitySign = ' &#62; ';
    }

    //Equation setup
    //(a*c) +- d <> d +- cX <> (b*c) +- d

    var a, b, c, d;

    do
    {
        a = Math.floor(Math.random() * 31) - 15;
    }while(a === 0);
    do
    {
        b = Math.floor(Math.random() * 31) - 15;
    }while(b === 0 || a === b);
    do
    {
        c = Math.floor(Math.random() * 31) - 15;
    }while(c === 0);
    do
    {
        d = Math.floor(Math.random() * 31) - 15;
    }while(d === 0);

    //Check if a and b need switched based on the equality signs
    if((temp <= 1 && (a * c) > b) || (temp >= 2 && (a * c) < b))
    {
        temp = a;
        a = b;
        b = temp;
    }

    newQuestion.question = 'What is the solution of the compound inequality below?<br><br>' +
        (a * c + d) + equalitySign + d + varPrefix(c) + 'x' + equalitySign + (b * c + d);
    
    //Gives a variety of possible incorrect responses
    var possibleChoices = [];

    if(c > 0)
    {
        newQuestion.correctAnswer = a + equalitySign + 'x' + equalitySign + b;
        possibleChoices.push(a + oppEqualitySign + 'x' + oppEqualitySign + b);
    }
    else
    {
        newQuestion.correctAnswer = a + oppEqualitySign + 'x' + oppEqualitySign + b;
        possibleChoices.push(a + equalitySign + 'x' + equalitySign + b);
    }

    possibleChoices.push((a * -1) + oppEqualitySign + 'x' + oppEqualitySign + (b * -1));
    possibleChoices.push((a * -1) + equalitySign + 'x' + equalitySign + (b * -1));

    possibleChoices.push((a - (2 * d)) + equalitySign + 'x' + equalitySign + (b - (2 * d)));
    possibleChoices.push((a * -1) + oppEqualitySign + 'x' + oppEqualitySign + (b * -1));

    possibleChoices.push('x' + equalitySign + (b - a));

    //Make sure no two incorrect answers equal one another
    var in1, in2, in3;
    do{
        in1 = Math.floor(Math.random() * possibleChoices.length);
        in2 = Math.floor(Math.random() * possibleChoices.length);
        in3 = Math.floor(Math.random() * possibleChoices.length);
    }while(in1 === in2 || in1 === in3 || in2 === in3);

    //Set the incorrect answers
    newQuestion.incorrect1 = possibleChoices[in1];
    newQuestion.incorrect2 = possibleChoices[in2];
    newQuestion.incorrect3 = possibleChoices[in3];    

    return newQuestion;
}