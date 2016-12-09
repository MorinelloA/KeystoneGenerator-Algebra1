function generateContent3(){

    //Currently, the incorrect answers are not very unique
    //Future implamentations should offer varying ranges so they are less predictable

    //Question blank object
    var newQuestion = new QuestionObj();  
      
    newQuestion.isDeployed = true;
    newQuestion.anchor = 'Operations with Real Numbers and Expressions';
    newQuestion.content = 'Simplify/evaluate expressions involving properties/laws of exponents, roots, and/or absolute values to solve problems';

    var temp1, temp2, temp3, temp4;
    
    //Loop for valid question
    //With random numbers, possibility of answers equaling each other
    var isValid = false;
    do
    {
        //Equation setup below
        //temp1(temp2 sqrt(temp3))^temp4
        
        temp1 = Math.floor((Math.random() * 4) + 1);
        if (temp1 < 2)
            temp1 = 2;
        
        temp2 = Math.floor((Math.random() * 4) + 1);
        if (temp2 < 2)
            temp2 = 2;
            
        temp3 = Math.floor((Math.random() * 7) + 2);
        temp3 *= temp3;
        
        temp4 = Math.floor((Math.random() * 8) - 4);
        if (temp4 == 0 || temp4 == 1) temp4 = 2;
        if (temp4 == -1) temp4 = -2;
        
        var correctAnswerDouble = temp1 * Math.pow(temp2 * Math.sqrt(temp3),temp4);

        if (temp4 > 0)
        {
            newQuestion.correctAnswer = correctAnswerDouble;
            newQuestion.incorrect1 = correctAnswerDouble / 2;
            newQuestion.incorrect2 = correctAnswerDouble * 2;
            newQuestion.incorrect3 = correctAnswerDouble * 10;
        }
        else
        {
            newQuestion.correctAnswer = correctAnswerDouble.toFixed(3);
            newQuestion.incorrect1 = (correctAnswerDouble / 2).toFixed(3);
            newQuestion.incorrect2 = (correctAnswerDouble * 2).toFixed(3);
            newQuestion.incorrect3 = (correctAnswerDouble * 10).toFixed(3);
        }
        
        newQuestion.question = "Simplify:  " + temp1 + "(" + temp2 + "\u221A" + temp3 + ")^" + temp4;
        
        if (!(newQuestion.correctAnswer === newQuestion.incorrect1 || newQuestion.correctAnswer === newQuestion.incorrect2 || newQuestion.correctAnswer === newQuestion.incorrect3 || newQuestion.incorrect1 === newQuestion.incorrect2 || newQuestion.incorrect1 === newQuestion.incorrect3 || newQuestion.incorrect2 === newQuestion.incorrect3))
        {
            isValid = true;
        }
    }while(!isValid);
    
    return newQuestion;
}