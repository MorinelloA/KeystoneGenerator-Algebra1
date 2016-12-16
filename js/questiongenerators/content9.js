function generateContent9(){
    //Question blank object
    var newQuestion = new QuestionObj();
    
    newQuestion.isDeployed = true;
    newQuestion.anchor = 'Linear Equations';
    newQuestion.content = 'Use and/or identify an algebraic property to justify any step in an equation-solving process';
    
    //Randomly determine the types of question to ask
    //0 = Identify the algebraic property used
    //1 = Use the distributive property to solve a problem
    //2 = Combine Like Terms
    //3 = Expand an equation
    
    var typeOfQuestion = Math.floor(Math.random() * 4) + 1;
    //var typeOfQuestion = 3; //debug

    if(typeOfQuestion == 0) //Identify the algebraic property used
    {
        //Question only generates Field properties
        //Future implimentations should consider implementing Properties of Equality and Inequality

        var cor, i1, i2, i3;

        cor = Math.floor(Math.random() * 4) + 1;

        do
        {
            i1 = Math.floor(Math.random() * 5);
        }while (cor === i1);

        do
        {
            i2 = Math.floor(Math.random() * 5);
        }while(cor === i2 || i1 === i2);

        do
        {
            i3 = Math.floor(Math.random() * 5);
        }while(cor === i3 || i1 === i3 || i2 === i3);

        switch(cor){
            case 1:
                //Commutative
                //Random num -20 to 20
                var a = Math.floor(Math.random() * 8) + 2;
                if (a === 0) a = 3; 

                //Random num 2 to 7
                var b = Math.floor(Math.random() * 6) + 2;

                var c = Math.floor(Math.random() * 20) + 1;
                if (c === 0) c = 11;

                var d = Math.floor(Math.random() * 81) - 40;

                //temp = 0 - addition
                //temp = 1 - multiplication (****Needs added****)

                //var temp = Math.floor(Math.random() * 2);
                var temp = 0;
                if(temp === 0)
                {
                    newQuestion.question = 'Which algebraic property is being demonstrated below:<br><br>'+
                        b + 'x + ' + a + 'x<sup>2</sup> + ' + c + ' = ' + d + '<br>'+  
                        a + 'x<sup>2</sup> + ' + b + 'x + ' + c + ' = ' + d;
                }
                else
                {
                    //NEEDS IMPLEMENTED
                }
                break;
            case 2:
                //Identity

                //Random num -20 to 20
                var a = Math.floor(Math.random() * 41) - 20;
                if (a === 0) a = 6; 

                //Random num 2 to 7
                var b = Math.floor(Math.random() * 6) + 2;

                //temp = 0 - addition
                //temp = 1 - multiplication

                var temp = Math.floor(Math.random() * 2);
                if(temp === 0)
                {
                    newQuestion.question = 'Which algebraic property is being demonstrated below:<br><br>'+
                        a + ' = ' + b + 'x + 0<br>'+  
                        a + ' = ' + b + 'x';
                }
                else
                {
                    newQuestion.question = 'Which algebraic property is being demonstrated below:<br><br>'+
                        a + ' = ' + b + 'x * 1<br>'+  
                        a + ' = ' + b + 'x';
                }
                break;
            case 3:
                //Inverse
                //Random num -20 to 20
                var a = Math.floor(Math.random() * 41) + 1;
                if (a === 0) a = 3; 

                //Random num 2 to 7
                var b = Math.floor(Math.random() * 6) + 2;

                var c = Math.floor(Math.random() * 41) + 1;
                if (c === 0) c = 11; 
                //temp = 0 - addition
                //temp = 1 - multiplication (****Needs added****)

                //var temp = Math.floor(Math.random() * 2);
                var temp = 0;
                if(temp === 0)
                {
                    newQuestion.question = 'Which algebraic property is being demonstrated below:<br><br>'+
                        a + 'x<sup>2</sup> + ' + b + 'x + ' + c + ' - ' + b + 'x<br>'+  
                        a + 'x<sup>2</sup> + ' + c;
                }
                else
                {
                    //NEEDS IMPLEMENTED
                }
                break;

            case 4:
                //Distributive

                //Random num 2 to 9
                var a = Math.floor(Math.random() * 8) + 2;

                //Random num 2 to 6
                var b = Math.floor(Math.random() * 5) + 2;

                //Random num 1 - 9
                var c = Math.floor(Math.random() * 9) + 1;

                //Random num -10 to 10
                var d = Math.floor(Math.random() * 21) - 10;

                newQuestion.question = 'Which algebraic property is being demonstrated below:<br><br>'+
                    a + '(' + b + 'x + ' + c + ') = ' + d + '<br>' +
                    (a * b) + 'x + ' + (a * c) + ' = ' + d;
                break;
        }

        newQuestion.correctAnswer = fieldProperty(cor);
        newQuestion.incorrect1 = fieldProperty(i1);
        newQuestion.incorrect2 = fieldProperty(i2);
        newQuestion.incorrect3 = fieldProperty(i3);
    }
    else if(typeOfQuestion === 1) //Use distributive property
    {

        //equation setup:
        //ax(bx =/- c)
        
        var a, b, c;
        //Loop makes sure that a zero doesn't come up for the incorrect answers
        do{
            //Loop makes sure the beginning of the equation doesn't start with a -1, 0, or 1
            do{
                a = Math.floor(Math.random() * 21) - 10;
            }while(a === -1 || a === 0 || a === 1);

            //Loop makes sure the start of the () doesn't start with a -1, 0, or 1
            do{
                b = Math.floor(Math.random() * 21) - 10;
            }while(b === -1 || b === 0 || b === 1);

            //Loop makes sure that the end of the equation has a value (not 0)
            do{
                c = Math.floor(Math.random() * 21) - 10;
            }while(c === 0);
        }while((a + b) === 0 || (a + c) === 0);

        //cSign is used to place a + or - throughout the equations
        var cSign; if(c < 0) cSign = "-"; else cSign = "+";

        newQuestion.question = 'Simplify the expression:<br><br>' +
            a + 'x(' + b + 'x' + ' ' + cSign + ' ' + Math.abs(c) + ')';

        if((c * a) < 0) cSign = "-"; else cSign = "+";
        newQuestion.correctAnswer = (a * b) + 'x<sup>2</sup> ' + cSign + ' ' + Math.abs(a * c) + 'x';   
        newQuestion.incorrect1 = (a * b) + 'x ' + cSign + ' ' + Math.abs(a * c); 

        if((c + a) < 0) cSign = "-"; else cSign = "+";
        newQuestion.incorrect2 = (a + b) + 'x<sup>2</sup> ' + cSign + ' ' + Math.abs(a + c) + 'x';
        newQuestion.incorrect3 = (a + b) + 'x ' + cSign + ' ' + Math.abs(a + c);



    }
    else if(typeOfQuestion === 2) // Combine like Terms
    {
        //NOTE: This question does not make use of the variablePrefix function
        //May want to refactor this section to make it more readable

        //Equation setup
        //ax +/- by +/- cx +/- dy

        var a, b, c, d;
        //Loop makes sure any possible answer doesn't contain a zero'
        do{
            //Loop makes sure the beginning of the equation doesn't start with a -1, 0, or 1
            do{
                a = Math.floor(Math.random() * 21) - 10;
            }while(a === -1 || a === 0 || a === 1);

            //Loop makes sure the beginning of the equation doesn't start with a -1, 0, or 1
            do{
                b = Math.floor(Math.random() * 21) - 10;
            }while(b === -1 || b === 0 || b === 1);

            //Loop makes sure the beginning of the equation doesn't start with a -1, 0, or 1
            do{
                c = Math.floor(Math.random() * 21) - 10;
            }while(c === -1 || c === 0 || c === 1);

            //Loop makes sure the beginning of the equation doesn't start with a -1, 0, or 1
            do{
                d = Math.floor(Math.random() * 21) - 10;
            }while(d === -1 || d === 0 || d === 1);

        }while(Math.abs(a)===Math.abs(b) || Math.abs(a)===Math.abs(c) || Math.abs(a)===Math.abs(d) ||
            Math.abs(b)===Math.abs(c) || Math.abs(b)===Math.abs(d) || Math.abs(c)===Math.abs(d) || (a+b+c+d)===0); 

        //Signs used to place a + or - throughout the equations
        var bSign, cSign, dSign;
        if(b < 0) bSign = "-"; else bSign = "+";
        if(c < 0) cSign = "-"; else cSign = "+";
        if(d < 0) dSign = "-"; else dSign = "+";

        newQuestion.question = 'Simplify the following equation:<br><br>' +
            a + 'x ' + bSign + ' ' + Math.abs(b) + 'y ' + cSign + ' ' + Math.abs(c) + 'x ' + dSign + ' ' + Math.abs(d) + 'y';

        //used to place a + or - throughout the equations
        var ySign, firstNum, secondNum;

        if((b + d) < 0) ySign = "-"; else ySign = "+";
        if((a + c) === 1) firstNum = ''; else if((a + c) === -1) firstNum = '-'; else firstNum = a + c;
        if(Math.abs(b + d) === 1) secondNum = ''; else secondNum = Math.abs(b + d);
        newQuestion.correctAnswer = firstNum + 'x ' + ySign + ' ' + secondNum + 'y';
        
        //Gives a variety of possible incorrect responses
        var possibleChoices = [];

        possibleChoices.push(firstNum + 'x<sup>2</sup> ' + ySign + ' ' + secondNum + 'y<sup>2</sup>');

        if(a - c === 1)
            possibleChoices.push('x ' + ySign + ' ' + secondNum + 'y');
        else if(a - c === -1)
            possibleChoices.push('-x ' + ySign + ' ' + secondNum + 'y');
        else
            possibleChoices.push((a - c) + 'x ' + ySign + ' ' + secondNum + 'y');
        
        if((a + c) === 1) firstNum = '-'; else if((a + c) === -1) firstNum = ''; else firstNum = -1 * (a + c);
        possibleChoices.push(firstNum + 'x ' + ySign + ' ' + secondNum + 'y');

        if((a + c) === 1) firstNum = ''; else if((a + c) === -1) firstNum = '-'; else firstNum = a + c;
        if((b + d) < 0) ySign = "+"; else ySign = "-";
        possibleChoices.push(firstNum + 'x ' + ySign + ' ' + secondNum + 'y');

        if((b * d) < 0) ySign = "-"; else ySign = "+";
        possibleChoices.push((a * c) + 'x ' + ySign + ' ' + Math.abs(b * d) + 'y');

        possibleChoices.push((a + b + c + d) + 'xy');

        if((b - d) < 0) ySign = "-"; else ySign = "+";
        if(b - d === 1)
            possibleChoices.push('x ' + ySign + ' y');
        else if(b - d === -1)
            possibleChoices.push('x ' + ySign + ' - y');
        else
            possibleChoices.push(firstNum + 'x ' + ySign + ' ' + Math.abs(b - d) + 'y');

        possibleChoices.push('Cannot be simplified any further');

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

    }
    else //Expand an equation
    {
        //Equation setup
        //(ax +/- b)(cx +/- d)

        var a, b, c, d;
        //Ensure a, b, c, and d are random nums != 0
        do{
            a = Math.floor(Math.random() * 21) - 10;
        }while(a === 0);
        do{
            b = Math.floor(Math.random() * 21) - 10;
        }while(b === 0);
        do{
            c = Math.floor(Math.random() * 21) - 10;
        }while(c === 0);
        do{
            d = Math.floor(Math.random() * 21) - 10;
        }while(d === 0);

        newQuestion.question = 'Expand the follow equation:<br><br>' +
            '(' + varPrefixNoPlus(a) + 'x' + numPrefix(b) + ')(' + varPrefixNoPlus(c) + 'x' + numPrefix(d) + ')';

        //correct answer setup
        //ex^2 + fx + g
        var e, f, g;
        e = a * c;
        f = (b * c)+(a * d);
        g = b * d;

        newQuestion.correctAnswer = varPrefixNoPlus(e) + 'x<sup>2</sup>' + varPrefix(f) + 'x' + numPrefix(g);

        //Gives a variety of possible incorrect responses
        var possibleChoices = [];

        possibleChoices.push('Cannot be simplified any further');
        possibleChoices.push(varPrefixNoPlus(e) + 'x<sup>2</sup>' + numPrefix(g));
        possibleChoices.push(varPrefixNoPlus(e) + 'x' + numPrefix(g));
        possibleChoices.push(varPrefixNoPlus(e) + 'x<sup>2</sup>' + varPrefix(f * -1) + 'x' + numPrefix(g));
        possibleChoices.push(varPrefixNoPlus(e) + 'x<sup>2</sup>' + varPrefix(f) + 'x' + numPrefix(g * -1));
        possibleChoices.push(varPrefixNoPlus(e * -1) + 'x<sup>2</sup>' + varPrefix(f * -1) + 'x' + numPrefix(g));

        e = a + c;
        f = (b + c)+(a + d);
        g = b + d;
        possibleChoices.push(varPrefixNoPlus(e) + 'x<sup>2</sup>' + varPrefix(f) + 'x' + numPrefix(g));

        e = a * c;
        f = (b * c)+(a * d * -1);
        g = b * d;
        possibleChoices.push(varPrefixNoPlus(e) + 'x<sup>2</sup>' + varPrefix(f) + 'x' + numPrefix(g));

        e = a * c;
        f = (b * c * -1)+(a * d);
        g = b * d;
        possibleChoices.push(varPrefixNoPlus(e) + 'x<sup>2</sup>' + varPrefix(f) + 'x' + numPrefix(g));

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
    }

    return newQuestion;
}