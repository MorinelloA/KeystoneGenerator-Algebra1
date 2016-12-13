function generateContent5(){
    //Question blank object
    var newQuestion = new QuestionObj();
    
    newQuestion.isDeployed = true;
    newQuestion.anchor = 'Operations with Real Numbers and Expressions';
    newQuestion.content = 'Add, subtract, and/or multiply polynomial expressions';
    
    var LX3, LX2, LX1, L;
    var RX3, RX1, R;
    
    //Setup for equation
    //((LX3)x^3+(LX2)x^2+(LX)x+(L)) + ((RX3)x^3+(RX)x+(R))
    
    ///Loop to eliminate the slim chance of producing the same possible answers
    do{
        //Random numbers 2-9
        LX3 = Math.floor((Math.random() * 8) + 2);
        LX2 = Math.floor((Math.random() * 8) + 2);
        LX1 = Math.floor((Math.random() * 8) + 2);
        L = Math.floor((Math.random() * 8) + 2);
        RX3 = Math.floor((Math.random() * 8) + 2);
        RX1 = Math.floor((Math.random() * 8) + 2);
        R = Math.floor((Math.random() * 8) + 2);
        
        newQuestion.correctAnswer = (LX3 + RX3) + "x<sup>3</sup> + " + LX2 + "x<sup>2</sup> + " + (LX1 + RX1) + "x + " + (L + R);
        
        newQuestion.incorrect1 = (LX3 + RX3) + "x<sup>6</sup> + " + LX2 + "x<sup>4</sup> + " + (LX1 + RX1) + "x<sup>2</sup> + " + (L + R);
        newQuestion.incorrect2 = (LX3 + RX3) + "x<sup>3</sup> + " + (LX2 + RX1) + "x<sup>2</sup> + " + (LX1 + R) + "x + " + L;
        newQuestion.incorrect3 = (LX3 + RX3) + "x<sup>6</sup> + " + (LX2 + LX1 + RX1) + "x<sup>2</sup> + " + (L + R);
    }while(newQuestion.correctAnswer == newQuestion.incorrect2 || newQuestion.incorrect1 == newQuestion.incorrect3);
    
    newQuestion.question = "Simplify: (" + LX3 + "x<sup>3</sup> + " + LX2 + "x<sup>2</sup> + " + LX1 + "x + " + L + ") + (" + RX3 + "x<sup>3</sup> + " + RX1 + "x + " + R + ")";
    
    return newQuestion;
}