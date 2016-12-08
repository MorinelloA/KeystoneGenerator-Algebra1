function generateContent0(){
    //Question blank object
    var newQuestion = new QuestionObj();

    newQuestion.isDeployed = true;
    newQuestion.anchor = 'Operations with Real Numbers and Expressions';
    newQuestion.content = 'Compare and/or order any real numbers';
		
    //Flag for duplicate correct answers
    var isValid = false;
    do
    {
        //answers as strings
        var part1, part2, part3, part4;
        //numeric values of string above
        var part1Value, part2Value, part3Value, part4Value;

        var tempWholeRand = Math.floor((Math.random() * 7) + 2);

        var tempDecimalRand = (Math.floor(Math.random() * 3) + 1) * 25;

        var temp, temp2, temp3;

        part1Value = tempWholeRand + (tempDecimalRand / 100 - .01); 
        part1 = part1Value;
        
        part2Value = tempWholeRand + tempDecimalRand / 100;
        part2 = tempWholeRand + " " + (tempDecimalRand / 25) + "/4";
        
        //Random number to determine which way to round the number, up or down, to be square rooted
        //temp = rand.nextInt(2);
        temp = Math.floor(Math.random() * 2);
        if (temp == 1)
            part3Value = tempWholeRand;
        else
            part3Value = tempWholeRand + 1;
        
        // \u221A is the symbol for square root
        part3 = "\u221A" + (part3Value*part3Value);

        //3-6, generated to determine the denominator
        temp = Math.floor(Math.random() * 4) + 3;
        
        //Random number to determine which way to round the numerator, up or down
        temp2 = Math.floor(Math.random() * 2);
        
        //1-5 chance of adding 1 to the fraction
        temp3 = Math.floor(Math.random() * 5);
        if (temp3 == 0)
        tempWholeRand++;

        if (temp2 == 1)
        {
            part4Value = tempWholeRand + (1.0 / temp);
            part4 = (temp * tempWholeRand + 1) + "/" + temp;
        }
        else
        {
            part4Value = tempWholeRand - (1.0 / temp);
            part4 = (temp * tempWholeRand - 1) + "/" + temp;                            
        }                             

        newQuestion.question = "Which has the greatest value? " + part1 + ", " + part2 + ", " + part3 + ", or " + part4;

        //Finding and setting the correct value (The max value in this case)
        var correctAnswerValue = part1Value;
        newQuestion.correctAnswer = part1;
        newQuestion.incorrect1 = (part2);
        newQuestion.incorrect2 = (part3);
        newQuestion.incorrect3 = (part4);
        if (part2Value > correctAnswerValue)
        {
            newQuestion.correctAnswer = (part2);
            correctAnswerValue = part2Value;
            
            newQuestion.incorrect1 = (part1);
            newQuestion.incorrect2 = (part3);
            newQuestion.incorrect3 = (part4);
        }
        if (part3Value > correctAnswerValue)
        {
            newQuestion.correctAnswer = (part3);
            correctAnswerValue = part3Value;
            
            newQuestion.incorrect1=(part1);
            newQuestion.incorrect2=(part2);
            newQuestion.incorrect3=(part4);
        }
        if (part4Value > correctAnswerValue)
        {
            newQuestion.correctAnswer=(part4);
            correctAnswerValue = part4Value;
            
            newQuestion.incorrect1=(part1);
            newQuestion.incorrect2=(part2);
            newQuestion.incorrect3=(part3);
        }//End setting correct value
        
        //Question is not valid if there is more than 1 correct answer
        var correctCount = 0;
        if (part1Value == correctAnswerValue)
            correctCount++;
        if (part2Value == correctAnswerValue)
            correctCount++;
        if (part3Value == correctAnswerValue)
            correctCount++;
        if (part4Value == correctAnswerValue)
            correctCount++;
        
        if (correctCount == 1)
        {
            isValid = true;
        }//end testing for valid question/answers

    }while(!isValid);

    return newQuestion;
}