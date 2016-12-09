function generateContent8(){
    //Question blank object
    var newQuestion = new QuestionObj();

    newQuestion.isDeployed = true;
    newQuestion.anchor = 'Linear Equations';
    newQuestion.content = 'Write, solve, and/or apply a linear equation';
    
    var temp = Math.floor(Math.random() * 25);
    var name;
    switch(temp) {
    case 0:
        name = 'Megan';
        break;
    case 1:
        name = 'Andy';
        break;
    case 2:
        name = 'Dave';
        break;
    case 3:
        name = 'Tristyn';
        break;
    case 4:
        name = 'Wendy';
        break;
    case 5:
        name = 'James';
        break;
    case 6:
        name = 'Lydia';
        break;
    case 7:
        name = 'Vanessa';
        break;
    case 8:
        name = 'Mike';
        break;
    case 9:
        name = 'Reggie';
        break;
    case 10:
        name = 'Mark';
        break;
    case 11:
        name = 'Bethany';
        break;
    case 12:
        name = 'Yolanda';
        break;
    case 13:
        name = 'Carmen';
        break;
    case 14:
        name = 'Carlos';
        break;
    case 15:
        name = 'Frank';
        break;    
    case 16:
        name = 'Rachel';
        break;
    case 17:
        name = 'Tonya';
        break;
    case 18:
        name = 'Jennifer';
        break;
    case 19:
        name = 'Brian';
        break;
    case 20:
        name = 'Paula';
        break;
    case 21:
        name = 'Hillary';
        break;
    case 22:
        name = 'Donald';
        break;
    case 23:
        name = 'Joe';
        break;
    case 24:
        name = 'Bill';
        break;                                                  
    default:
        name = 'Tony';
    }

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