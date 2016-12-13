function generateContent21(){
    //Question blank object
    var newQuestion = new QuestionObj();
    
    newQuestion.isDeployed = true;
    newQuestion.anchor = 'Functions';
    newQuestion.content = 'Create, interpret, and/or use the equation, graph, or table of a linear function';
    
    var nameBusiness, nameProduct, nameFee;

    //Vary the names of the products
    var num = Math.floor(Math.random() * 7);
    switch(num)
    {
        case 0:
            nameBusiness = 'pizza shop';
            nameProduct = 'pizza';
            nameFee = 'delivery';
            break;
        case 1:
            nameBusiness = 'movie theater';
            nameProduct = 'movie';
            nameFee = 'membership';
            break;
        case 2:
            nameBusiness = 'taxi company';
            nameProduct = 'mile';
            nameFee = 'fare';
            break;
        case 3:
            nameBusiness = 'pet store';
            nameProduct = 'pet';
            nameFee = 'adoption';
            break;
        case 4:
            nameBusiness = 'movie rental';
            nameProduct = 'dvd';
            nameFee = 'membership';
            break;
        case 5:
            nameBusiness = 'packaging company';
            nameProduct = 'wrapped package';
            nameFee = 'service';
            break;
        default:
            nameBusiness = 'snow plow company';
            nameProduct = 'snow removal';
            nameFee = 'sign-up';
    }

    //Random price $4 - $15
    var productPrice = Math.floor(Math.random() * 12) + 4;

    //Random price $2 - $7
    var feePrice = Math.floor(Math.random() * 6) + 2;

    newQuestion.question = 'A ' + nameBusiness + ' charges for each ' + nameProduct + ' and adds a ' + nameFee + ' fee.' +
        ' The cost (c) for a number of ' + nameProduct + 's (' + nameProduct.charAt(0) + ') is described in by the function c = ' +
        productPrice + nameProduct.charAt(0) + ' + ' + feePrice + '. What statement is true?';

    newQuestion.correctAnswer = 'Each ' + nameProduct + ' costs $' + productPrice + ', and the ' + nameFee + ' fee is $' + feePrice;
    newQuestion.incorrect1 = 'Each ' + nameProduct + ' costs $' + feePrice + ', and the ' + nameFee + ' fee is $' + productPrice;
    newQuestion.incorrect2 = 'Each ' + nameProduct + ' costs $' + (feePrice + productPrice);
    newQuestion.incorrect3 = 'The cost of ' + feePrice + ' ' + nameProduct + 's is $' + productPrice;

    return newQuestion;
}