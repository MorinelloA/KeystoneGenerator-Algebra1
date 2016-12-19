function generateContent11(){
    //Question blank object
    var newQuestion = new QuestionObj();
    
    newQuestion.isDeployed = true;
    newQuestion.anchor = 'Linear Equations';
    newQuestion.content = 'Write and/or solve a system of linear equations (including problem situations) using graphing, substitution, and/or elimination';
    
    //Equations setup
    //(a1)x + (b1)y = total1
    //(a2)x + (b2)y = total2

    var a1, a2, b1, b2;
    do{
        do{
            a1 = Math.floor(Math.random() * 19) - 9;
        }while(a1 === 0); //Make sure the variable is not zero
        do{
            b1 = Math.floor(Math.random() * 19) - 9;
        }while(b1 === 0); //Make sure the variable is not zero
        do{
            a2 = Math.floor(Math.random() * 19) - 9;
        }while(a2 === 0); //Make sure the variable is not zero
        do{
            b2 = Math.floor(Math.random() * 19) - 9;
        }while(b2 === 0); //Make sure the variable is not zero
    }while(a1 === a2 && b1 === b2); //Make sure the equations are not the same

    var x, y;
    do{
        x = Math.floor(Math.random() * 20) - 5;
    }while(x === 0); //Make sure the variable is not zero
    do{
        y = Math.floor(Math.random() * 20) - 5;
    }while(y === 0); //Make sure the variable is not zero
    
    var total1, total2;
    total1 = (a1 * x) + (b1 * y);
    total2 = (a2 * x) + (b2 * y);

    newQuestion.question = 'Solve:<br><br>' +
        varPrefixNoPlus(a1) + 'x' + varPrefix(b1) + 'y=' + total1 + '<br>' +
        varPrefixNoPlus(a2) + 'x' + varPrefix(b2) + 'y=' + total2;
    
    newQuestion.correctAnswer = 'x = ' + x + ', y = ' + y;

    //Gives a variety of possible incorrect responses
    var possibleChoices = [];

    //possibleChoices.push('No possible solution');
    if(x !== y)
    {
        possibleChoices.push('x = ' + y + ', y = ' + x);
    }

    possibleChoices.push('x = ' + (x * -1) + ', y = ' + y);
    possibleChoices.push('x = ' + x + ', y = ' + (y * -1));
    possibleChoices.push('x = ' + (x - 1) + ', y = ' + y);
    possibleChoices.push('x = ' + (x + 1) + ', y = ' + y);
    possibleChoices.push('x = ' + x + ', y = ' + (y - 1));
    possibleChoices.push('x = ' + x + ', y = ' + (y + 1));

    //Add complete random possibilities
    var xx, yy;
    for(var i = 0; i < 7; i++)
    {
        do{
            xx = Math.floor(Math.random() * 20) - 5;
            yy = Math.floor(Math.random() * 20) - 5;
        }while(xx === x && yy === y); //Eliminate the possibility of a correct answer
        possibleChoices.push('x = ' + xx + ', y = ' + yy);
    }

    //Make sure no two incorrect answers equal one another
    //Due to random inclusions, this is entirely possible
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