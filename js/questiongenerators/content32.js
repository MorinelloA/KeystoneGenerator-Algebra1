function generateContent32(){
//Fractions in this question are currently NOT simplified. Need to consider doing this.
//Simplifying will make the questions harder

    //Question blank object
    var newQuestion = new QuestionObj();
    
    newQuestion.isDeployed = true;
    newQuestion.anchor = 'Data Analysis';
    newQuestion.content = 'Find probabilities for compound events and represent as a fraction, decimal, or percent';

    var sidedDice = 6;
    var possibleRolls = sidedDice * sidedDice;
    var sumToLookFor = Math.floor(Math.random() * ((sidedDice * 2) - 2)) + 2;

    var correctRolls = 0;
    for(var a = 1; a <= sidedDice; a++)
    {
        for(var b = 1; b <= sidedDice; b++)
        {
            if(sumToLookFor === a + b)
            {
                correctRolls++;
            }
        }
    }

    newQuestion.question = 'Two dice have ' + sidedDice + ' sides each, 1-' + sidedDice + '. When thrown, what is the probability that the sum of two dice will equal ' + sumToLookFor + '?';

    newQuestion.correctAnswer = correctRolls + ' / ' + possibleRolls;

    var temp1;
    do
    {
        temp1 = Math.floor(Math.random() * sidedDice) + 1;
    }while(temp1 === correctRolls);

    newQuestion.incorrect1 = temp1 + ' / ' + possibleRolls;

    var temp2;
    do
    {
        temp2 = Math.floor(Math.random() * sidedDice) + 1;
    }while(temp2 === correctRolls || temp2 === temp1);

    newQuestion.incorrect2= temp2 + ' / ' + possibleRolls;

    var temp3;
    do
    {
        temp3 = Math.floor(Math.random() * sidedDice) + 1;
    }while(temp3 === correctRolls || temp3 === temp1 || temp3 === temp2);

    newQuestion.incorrect3 = temp3 + ' / ' + possibleRolls;

    return newQuestion;
}