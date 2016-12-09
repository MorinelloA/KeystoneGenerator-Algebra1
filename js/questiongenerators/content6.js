function generateContent6(){
    //Question blank object
    var newQuestion = new QuestionObj();
    
    newQuestion.isDeployed = true;
    newQuestion.anchor = 'Operations with Real Numbers and Expressions';
    newQuestion.content = 'Factor algebraic expressions, including difference of squares and trinomials';

    var num1, num2;
    var strCorNum1, strCorNum2, strIn1Num1, strIn1Num2, strIn2Num1, strIn2Num2, strIn3Num1, strIn3Num2;
    
    //Random number -9 to 9, not including 1's or 0
    //num1 + num2 cannot equal -1, 0, or 1
    do{
        do{
            num1 = Math.floor((Math.random() * 19) - 9);
        }while(num1 < 2 && num1 > -2);
        
        do{
            num2 = Math.floor((Math.random() * 19) - 9);
        }while(num2 < 2 && num2 > -2);
    }while(num1 + num2 >= -1 && num1 + num2 <= 1);

    if (num1 > 0)
    {
        strCorNum1 = "+"+num1;
        strIn1Num1 = num1 * -1;
    }
    else
    {
        strCorNum1 = num1;
        strIn1Num1 = "+"+(num1 * -1);
    }
    
    if (num2 > 0)
    {
        strCorNum2 = "+"+num2;
        strIn1Num2 = num2 * -1;
    }
    else
    {
        strCorNum2 = num2;
        strIn1Num2 = "+"+(num2 * -1);
    }

    if (num1 + num2 > 0)
    {
        strIn2Num1 = "+"+(num1+num2);
        strIn3Num1 = (num1+num2) * -1;
    }
    else
    {
        strIn2Num1 = num1+num2;
        strIn3Num1 = "+"+((num1+num2) * -1);
    }
    
    if (num1 * num2 > 0)
    {
        strIn2Num2 = "+"+(num1*num2);
        strIn3Num2 = num1*num2*-1;
    }
    else
    {
        strIn2Num2 = num1*num2;
        strIn3Num2 = "+"+(num1*num2*-1);
    }

    newQuestion.correctAnswer = "(x" + strCorNum1 + ")(x" + strCorNum2 + ")"; 
    newQuestion.incorrect1 = "(x" + strIn1Num1 + ")(x" + strIn1Num2 + ")";
    newQuestion.incorrect2 = "(x" + strIn2Num1 + ")(x" + strIn2Num2 + ")";
    newQuestion.incorrect3 = "(x" + strIn3Num1 + ")(x" + strIn3Num2 + ")";
    
    newQuestion.question = "Factor: x^2" + strIn2Num1 + "x" + strIn2Num2;
    
    return newQuestion;
}