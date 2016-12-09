function generateContent8(){
    //Question blank object
    var newQuestion = new QuestionObj();

    newQuestion.isDeployed = true;
    newQuestion.anchor = 'Linear Equations';
    newQuestion.content = 'Write, solve, and/or apply a linear equation';
    
    var name = generateName();

    var dayOfWeek = 'Monday';
    temp = Math.floor(Math.random() * 7);
    switch(temp) {
    case 0:
        dayOfWeek = 'Sunday';
        break;
    case 1:
        dayOfWeek = 'Monday';
        break;
    case 2:
        dayOfWeek = 'Tuesday';
        break;
    case 3:
        dayOfWeek = 'Wednesday';
        break;
    case 4:
        dayOfWeek = 'Thursday';
        break;
    case 5:
        dayOfWeek = 'Friday';
        break;
    case 6:
        dayOfWeek = 'Saturday';
        break;
    }

    var pay, hours;
    //Loop verifies pay does not equal hours.
    do
    {
        pay = Math.floor(Math.random() * 7) + 6;
        hours = Math.floor(Math.random() * 7) + 3;
    }while(pay === hours);

    var total = pay * hours + (Math.floor(Math.random() * 30) + 10);

    newQuestion.question = name + ' has a job that pays her $' + pay + ' per hour plus tips (t). ' + name + ' worked for ' + hours + ' hours on ' + dayOfWeek + ' and made $' + total + ' in all. Which equation could be used to find t, the amount ' + name + ' made in tips?';

    newQuestion.correctAnswer = total + ' = ' + pay + '(' + hours + ') + t';
    newQuestion.incorrect1 = total + ' = ' + hours + 't + ' + pay;
    newQuestion.incorrect2 = total + ' = ' + pay + 't + ' + hours;
    temp = Math.floor(Math.random() * 2);
    if(temp === 0)
    {
        newQuestion.incorrect3 = total + ' = ' + pay + 't / ' + hours;
    }
    else
    {
        newQuestion.incorrect3 = total + ' = ' + hours + 't / ' + pay;
    }

    return newQuestion;
}