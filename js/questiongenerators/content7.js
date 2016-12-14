function generateContent7(){
    //Question blank object
    var newQuestion = new QuestionObj();
    
    newQuestion.isDeployed = true;
    newQuestion.anchor = 'Operations with Real Numbers and Expressions';
    newQuestion.content = 'Simplify/reduce a rational algebraic expression';

    //The following is just one possible rational expression. Future implementations should generate other polynomials as well

    var num1, num2;
    var cont;
    //Random number 2-9
    var multiplier = Math.floor(Math.random() * 8) + 2;

    //exponents
    var x1, x2, y1, y2;

    do //This loop makes sure you don't have a blank numerator or denominator'
    {
        do
        {
            cont = true;
            //Random number 1-9
            num1 = Math.floor(Math.random() * 9) + 1;
            num2 = Math.floor(Math.random() * 9) + 1;
            if (num1 % num2 === 0 || num2 % num1 === 0) cont = false; //Make sure the numbers aren't divisible... 
            if (num1 === 1 || num2 === 1) cont = true; //..Unless one of them is 1... 
            if (num1 === num2) cont = false; //But not both.
            if (GCF(num1, num2) !== 1) cont = false; //GCF of both numbers must be 1
        }while(!cont);

        //do while loop ensure x's don't equal one another
        do{
            //random #'s 2-6
            x1 = Math.floor(Math.random() * 5) + 2;
            x2 = Math.floor(Math.random() * 5) + 2;
        }while(x1 === x2);

        //do while loop ensure x's don't equal one another
        do{
            //random #'s 2-6
            y1 = Math.floor(Math.random() * 5) + 2;
            y2 = Math.floor(Math.random() * 5) + 2;
        }while(y1 === y2); 
    }while((num1 < num2 && x1 < x2 && y1 < y2) || (num1 > num2 && x1 > x2 && y1 > y2));
    //make exponent values actual exponents
    var sx1 = '<sup>' + x1 + '</sup>';
    var sx2 = '<sup>' + x2 + '</sup>';
    var sy1 = '<sup>' + y1 + '</sup>';
    var sy2 = '<sup>' + y2 + '</sup>';

    var numerator = (num1 * multiplier) + 'x' + sx1 + 'y' + sy1;
    var denominator = (num2 * multiplier) + 'x' + sx2 + 'y' + sy2;

    newQuestion.question = 'Simplify:<br><br><table><td>'+
        numerator +
        '<hr>' +
        denominator+'</td></table>';

    var cnum1;
    if(num1 <= 1)
    {
        cnum1 = '';
    }
    else
    {
        cnum1 = num1;
    }
    var cnum2;
    if(num2 <= 1)
    {
        cnum2 = '';
    }
    else
    {
        cnum2 = num2;
    }

    cx1 = x1 - x2;
    cy1 = y1 - y2;
    if(cx1 < 1)
    {
        cx1 = ''; 
    }
    else if(cx1 != 1)
    {
        cx1 = 'x<sup>' + cx1 + '</sup>';
    }
    else
    {
        cx1 = 'x';
    }

    if(cy1 < 1)
    {
        cy1 = ''; 
    }
    else if(cy1 != 1)
    {
        cy1 = 'y<sup>' + cy1 + '</sup>';
    }
    else
    {
        cy1 = 'y';
    }

    cx2 = x2 - x1;
    cy2 = y2 - y1;
    if(cx2 < 1)
    {
        cx2 = ''; 
    }
    else if(cx2 != 1)
    {
        cx2 = 'x<sup>' + cx2 + '</sup>';
    }
    else
    {
        cx2 = 'x';
    }

    if(cy2 < 1)
    {
        cy2 = ''; 
    }
    else if(cy2 != 1)
    {
        cy2 = 'y<sup>' + cy2 + '</sup>';
    }
    else
    {
        cy2 = 'y';
    }
    
    newQuestion.correctAnswer = '<table><td>' + cnum1 + cx1 + cy1 + '<hr>' +
        cnum2 + cx2 + cy2 + '</td></table>';

    newQuestion.incorrect1 = '<table><td>' + (num1 * multiplier) + cx1 + cy1 + '<hr>' +
        (num2 * multiplier) + cx2 + cy2 + '</td></table>';

    newQuestion.incorrect2 = '<table><td>' + cnum1 + 'x' + sx1 + 'y' + sy1 + '<hr>' +
        cnum2 + 'x' + sx2 + 'y' + sy2 + '</td></table>';

    if(num2 === 1) //Fraction in front is a whole number (Denominator is 1)
    {
        //Add whole number in front (num1)
        newQuestion.incorrect3 = '<table><td>' + num1 + '</td>' +
            '<td>+</td>' +
            '<td>x' + sx1 + '<hr>' +
            'x' + sx2 + '</td>' +
            '<td>+</td>' +
            '<td>y' + sy1 + '<hr>' +
            'y' + sy2 + '</td></table>';
    }
    else //Fraction in front is NOT a whole number
    {
        newQuestion.incorrect3 = '<table><td>' + num1 + '<hr>' +
            num2 + '</td>' +
            '<td>+</td>' +
            '<td>x' + sx1 + '<hr>' +
            'x' + sx2 + '</td>' +
            '<td>+</td>' +
            '<td>y' + sy1 + '<hr>' +
            'y' + sy2 + '</td></table>';
    }
    return newQuestion;
}