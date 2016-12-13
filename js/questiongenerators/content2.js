function generateContent2(){
    //Question blank object
    var newQuestion = new QuestionObj();
    
    newQuestion.isDeployed = true;
    newQuestion.anchor = 'Operations with Real Numbers and Expressions';
    newQuestion.content = 'Find the Greatest Common Factor (GCF) and/or the Least Common Multiple (LCM) for sets of monomials';
    
    var num1, num2;
    //do while loop ensures that num1 is not a direct multiple of num2
    do{
        //random # 25-975 (by 50)
        num1 = (Math.floor(Math.random() * 38) + 1) * 25;

        //random # 500-9500 (by 500)
        num2 = (Math.floor(Math.random() * 19) + 1) * 500;
    }while(num2 % num1 === 0 || (LCM(num1, num2)) >= 100000);

    //exponents
    var x1, x2, y1, y2;

    //do while loop ensure x's don't equal one another
    do{
        //random #'s 2-8
        x1 = Math.floor(Math.random() * 7) + 2;
        x2 = Math.floor(Math.random() * 7) + 2;
    }while(x1 === x2); 
    
    //do while loop ensure y's don't equal one another
    do{
        //random #'s 2-8
        y1 = Math.floor(Math.random() * 7) + 2;
        y2 = Math.floor(Math.random() * 7) + 2;
    }while(y1 === y2); 

    //l = least, g = greatest
    var lx, ly, gx,gy
    if(x1 < x2)
    {
        lx = x1;
        gx = x2;
    }
    else
    {
        lx = x2;
        gx = x1;
    }

    if(y1 < y2)
    {
        ly = y1;
        gy = y2;
    }
    else
    {
        ly = y2;
        gy = y1;
    }

    var gcf = GCF(num1, num2);
    var lcm = LCM(num1, num2);

    //Randomly determine whether this is a LCM or GCF question
    //0-LCM, 1-GCF
    var temp = y1 = Math.floor(Math.random() * 2);
    var problem, probAbbr;
    if(temp === 0)
    {
        problem = 'least common multiple (LCM)';
        newQuestion.correctAnswer = lcm + 'x^' + gx + 'y^' + gy;
        newQuestion.incorrect3 = gcf + 'x^' + lx + 'y^' + ly;
    }
    else
    {
        problem = 'greatest common factor (GCF)';
        newQuestion.incorrect3 = lcm + 'x^' + gx + 'y^' + gy;
        newQuestion.correctAnswer = gcf + 'x^' + lx + 'y^' + ly;
    }

    newQuestion.question = 'Two monomials are shown below:<br><br>' +
        num1 + 'x^' + x1 + 'y^' + y1 + '<BR>' +
        num2 + 'x^' + x2 + 'y^' + y2 + '<BR><BR>' +
        'What is the ' + problem + ' of the monomials?';

    newQuestion.incorrect1 = lcm + 'x^' + lx + 'y^' + ly;
    newQuestion.incorrect2 = gcf + 'x^' + gx + 'y^' + gy; 

    return newQuestion;
}