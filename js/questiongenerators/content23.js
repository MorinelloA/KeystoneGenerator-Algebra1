function generateContent23(){
    //Question blank object
    var newQuestion = new QuestionObj();
    
    newQuestion.isDeployed = true;
    newQuestion.anchor = 'Coordinate Geometry';
    newQuestion.content = 'Identify, describe, and/or use constant rates of change';
    
    //Generate a random name
    var name = generateName();

    //productMain is the product being sold (hotdog, pizza, ect)
    //productAddition is the addition (topping, condiment, ect)
    var productMain, productAddition;

    //Vary the names of the products
    var num = Math.floor(Math.random() * 6);
    switch(num)
    {
        case 0:
            productMain = 'hot dog';
            productAddition = 'condiment';
            break;
        case 1:
            productMain = 'pizza';
            productAddition = 'topping';
            break;
        case 2:
            productMain = 'hamburger';
            productAddition = 'topping';
            break;
        case 3:
            productMain = 'hot dog';
            productAddition = 'condiment';
            break;
        case 4:
            productMain = 'pizza';
            productAddition = 'topping';
            break;
        case 5:
            productMain = 'hamburger';
            productAddition = 'topping';
            break;
        default:
            productMain = 'hamburger';
            productAddition = 'topping';
    }

    //Random price $2 - $7
    var priceMain = Math.floor(Math.random() * 6) + 2;

    //Random price $0.20 - $0.70
    var priceAddition = ((Math.floor(Math.random() * 6) + 2) * .1).toFixed(2);

    //50% of asking what the price of additions are
    //50% of asking for the price of a plain main product
    var temp = Math.floor(Math.random() * 2)

    //NOTE: The question here uses <br> because it is assumed it will be displayed in a <p> block. Will need refactored if changed
    if(temp === 0)
    {
        newQuestion.question = name + ' sells ' + productMain + 's. The amount charged for a ' + productMain + ' (' + productMain.charAt(0) + ') is based on the cost for a plain ' + productMain + ' plus an additional charge for each ' + productAddition + ' (' + productAddition.charAt(0) + ') as shown below:<br><br>'+ productMain.charAt(0) + ' = ' + priceAddition + productAddition.charAt(0) + ' + ' + priceMain + '<br><br>What does the number ' + priceAddition + ' represent in the equation?';

        newQuestion.correctAnswer = 'The additional cost for each ' + productAddition;
        newQuestion.incorrect1 = 'The number of ' + productAddition + 's';
        newQuestion.incorrect2 = 'The cost of a plain ' + productMain;
        newQuestion.incorrect3 = 'The cost of a ' + productMain + ' with 1 ' + productAddition; 
    }
    else
    {
        newQuestion.question = name + ' sells ' + productMain + 's. The amount charged for a ' + productMain + ' (' + productMain.charAt(0) + ') is based on the cost for a plain ' + productMain + ' plus an additional charge for each ' + productAddition + ' (' + productAddition.charAt(0) + ') as shown below:<br><br>'+ productMain.charAt(0) + ' = ' + priceAddition + productAddition.charAt(0) + ' + ' + priceMain + '<br><br>What does the number ' + priceMain + ' represent in the equation?';

        newQuestion.incorrect2 = 'The additional cost for each ' + productAddition;
        newQuestion.incorrect1 = 'The number of ' + productAddition + 's';
        newQuestion.correctAnswer = 'The cost of a plain ' + productMain;
        newQuestion.incorrect3 = 'The cost of a ' + productMain + ' with 1 ' + productAddition;
    }

    return newQuestion;
}