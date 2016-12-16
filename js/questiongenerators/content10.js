function generateContent10(){
    //Question blank object
    var newQuestion = new QuestionObj();
    
    newQuestion.isDeployed = true;
    newQuestion.anchor = 'Linear Equations';
    newQuestion.content = 'Interpret solutions to problems in the context of the problem situation (Linear equations)';
    
    var name = generateName();

    var product1, product2;
    var num = Math.floor(Math.random() * 7);
    switch(num){
        case 0:
            product1 = 'hamburgers';
            product2 = 'hotdogs';
            break;
        case 1:
            product1 = 'tablets';
            product2 = 'folders';
            break;
        case 2:
            product1 = 'packs of pencils';
            product2 = 'packs of pens';
            break;
        case 3:
            product1 = 'boxes of crayons';
            product2 = 'coloring books';
            break;
        case 4:
            product1 = 'hardcover books';
            product2 = 'softcover books';
            break;
        case 5:
            product1 = 'corndogs';
            product2 = 'slices of pizza';
            break;
        case 6:
            product1 = 'candy bars';
            product2 = 'packs of gum';
            break;
        default:
            product1 = 'hamburgers';
            product2 = 'hotdogs';
    }

    var prod1Cost, prod1Quantity, prod2Cost, prod2Quantity, total;
    do{
        prod1Quantity = Math.floor(Math.random() * 3) + 2;
        prod2Quantity = Math.floor(Math.random() * 3) + 2;
        prod1Cost = Math.floor(Math.random() * 4) + 2;
        prod2Cost = Math.floor(Math.random() * 4) + 2;
    }while(prod1Quantity === prod2Quantity || prod1Cost === prod2Cost);
    total = (prod1Cost * prod1Quantity) + (prod2Cost * prod2Quantity);

    newQuestion.question = name + ' purchased <i>x</i> ' + product1 + ' and  <i>y</i> ' + product2 +
        '. They spent a total of $' + total + '. The equation below describes the relationship between ' + 
        'the number of ' + product1 + ' and ' + product2 + ':<br><br>' +
        varPrefixNoPlus(prod1Cost) + 'x' + varPrefix(prod2Cost) + 'y=' + total + '<br><br>' +
        'The ordered pair (' + prod1Quantity + ', ' + prod2Quantity + ') is a solution of the equation. What does ' +
        'this ordered pair represent?'

    newQuestion.correctAnswer = name + ' purchased ' + prod1Quantity + ' ' + product1 + ' and ' + prod2Quantity + ' ' + product2 
    newQuestion.incorrect1 = product1 + ' cost $' + prod1Quantity + ' each and ' + product2 + ' cost $' + prod1Quantity + ' each';
    newQuestion.incorrect2 = name + ' spent $' + prod1Quantity + ' on ' + product1 + ' and $' + prod2Quantity + ' on ' + product2;
    newQuestion.incorrect3 = prod1Cost + ' ' + product1 + ' and ' + prod2Cost + ' ' + product2 + ' cost $' + total;

    return newQuestion;
}