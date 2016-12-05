$(document).ready(main);

    /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
/*function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}*/

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.anchorbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  if (!event.target.matches('.contentbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function generateQuestion(event){
    var questionToGenerate = event.data.contentNum;

    var newQuestion = {
        isDeployed: false,
        anchor: null,
        content: null,
        question: null,
        correctAnswer: null,
        incorrect1: null,
        incorrect2: null,
        incorrect3: null,
        userAnswer: null
    };

    var testString = 'generateContent' + questionToGenerate;
    alert(testString);
    if (typeof window[testString] === 'function') { 
        newQuestion = window[testString](newQuestion);
    }
    else {
        alert('This question has not yet been implemented');
    }

    displayQuestion();
}

function displayQuestion(){
    
    var fadeInterval = 750;
    var fadeTimer = 500;
    var testObject = new CompleteQuestion();
    testObject.standard = 'hey';
    //alert(testObject.standard);
    //alert(testObject.question);

    var x = document.getElementById('word1');
    
    //x.innerHTML='hello';
    $(x).html('hey');

    var num1 = Math.floor(Math.random()*11);
    var n1 = document.getElementById('num1');
    $(n1).html(num1);

    var num2 = Math.floor(Math.random()*11);
    var n2 = document.getElementById('num2');
    $(n2).html(num2);

    var correctAnswer = num1 + num2;
    var incorrectAnswer1 = num1 + num2 + 1;
    var incorrectAnswer2 = num1 + num2 - 1;
    var incorrectAnswer3 = num1 * num2;

    if(incorrectAnswer3 === correctAnswer || incorrectAnswer3 === incorrectAnswer2){
        incorrectAnswer3 = num1 + num2 + 2;
    }

    var answers = [correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3];
    shuffle(answers);

    var a = document.getElementById('A');
    $(a).html(answers[0]); 

    var b = document.getElementById('B');
    $(b).html(answers[1]);  

    var c = document.getElementById('C');
    $(c).html(answers[2]);  

    var d = document.getElementById('D');
    $(d).html(answers[3]);     

    hideAllQuestions();

    $('.question').fadeIn(fadeTimer);
    setTimeout(function(){
        $('.answer1').fadeIn(fadeTimer);
    }, fadeInterval);
    setTimeout(function(){
        $('.answer2').fadeIn(fadeTimer);
    }, fadeInterval * 2);
    setTimeout(function(){
        $('.answer3').fadeIn(fadeTimer);
    }, fadeInterval * 3);
    setTimeout(function(){
        $('.answer4').fadeIn(fadeTimer);
    }, fadeInterval * 4);

    var userAnswer;

    $('.answer1').on('click', function(){
        unselectAnswers()
        $(this).addClass('active');
        userAnswer = answers[0];
        $('.submit').show();
    });

    $('.answer2').on('click', function(){
        unselectAnswers()
        $(this).addClass('active');
        userAnswer = answers[1];
        $('.submit').show();
    });

    $('.answer3').on('click', function(){
        unselectAnswers()
        $(this).addClass('active');
        userAnswer = answers[2];
        $('.submit').show();
    });

    $('.answer4').on('click', function(){
        unselectAnswers()
        $(this).addClass('active');
        userAnswer = answers[3];
        $('.submit').show();
    });

    $('.submit').on('click', function(){
        if(userAnswer === correctAnswer){
            alert('Correct');
        }
        else{
            alert('Incorrect');
        }
    });
}

function main(){
    hideAllQuestions();
    var anchor1 = 'Operations with Real Numbers and Expressions';
    var anchor2 = 'Linear Equations';
    var anchor3 = 'Linear Inequalities';
    var anchor4 = 'Functions';
    var anchor5 = 'Coordinate Geometry';

    var content = [];
    content[0] = 'Compare and/or order any real numbers';
    content[1] = 'Simplify square roots';
    content[2] = 'Find the Greatest Common Factor (GCF) and/or the Least Common Multiple (LCM) for sets of monomials';
    content[3] = 'Simplify/evaluate expressions involving properties/laws of exponents, roots, and/or absolute values to solve problems';
    content[4] = 'Use estimation to solve problems';
    content[5] = 'Add, subtract, and/or multiply polynomial expressions';
    content[6] = 'Factor algebraic expressions, including difference of squares and trinomials';
    content[7] = 'Simplify/reduce a rational algebraic expression';
    content[8] = 'Write, solve, and/or apply a linear equation';
    content[9] = 'Use and/or identify an algebraic property to justify any step in an equation-solving process';
    content[10] = 'Interpret solutions to problems in the context of the problem situation (Linear equations)';
    content[11] = 'Write and/or solve a system of linear equations (including problem situations) using graphing, substitution, and/or elimination';
    content[12] = 'Interpret solutions to problems in the context of the problem situation (System of linear equations)';
    content[13] = 'Write or solve compound inequalities and/or graph their solution sets on a number line';
    content[14] = 'Identify or graph the solution set to a linear inequality on a number line';
    content[15] = 'Interpret solutions to problems in the context of the problem situation (Linear inequalities)';
    content[16] = 'Write and/or solve a system of linear inequalities using graphing';
    content[17] = 'Interpret solutions to problems in the context of the problem situation (System of linear inequalities)';
    content[18] = 'Analyze a set of data for the existence of a pattern and represent the pattern algebraically and/or graphically';
    content[19] = 'Determine whether a relation is a function, given a set of points or a graph';
    content[20] = 'Identify the domain or range of a relation';
    content[21] = 'Create, interpret, and/or use the equation, graph, or table of a linear function';
    content[22] = 'Translate from one representation of a linear function to another';
    content[23] = 'Identify, describe, and/or use constant rates of change';
    content[24] = 'Apply the concept of linear rate of change (slope) to solve problems';
    content[25] = 'Write or identify a linear equation when given the graph of the line, two points on the line, or the slope and a point on the line';
    content[26] = 'Determine the slope and/or y-intercept represented by a linear equation or graph';
    content[27] = 'Draw, identify, find, and/or write an equation for a line of best fit for a scatter plot';
    content[28] = 'Calculate and/or interpret the range, quartiles, and interquartile range of data';
    content[29] = 'Estimate or calculate to make predictions based on a circle, line, bar graph, measure of central tendency, or other representation';
    content[30] = 'Analyze data, make predictions, and/or answer questions based on displayed data';
    content[31] = 'Make predictions using the equations or graphs of best-fit lines of scatter plots';
    content[32] = 'Find probabilities for compound events and represent as a fraction, decimal, or percent';

    $(document.getElementById('strAnchor1')).html(anchor1);
    $(document.getElementById('strAnchor2')).html(anchor2);
    $(document.getElementById('strAnchor3')).html(anchor3);
    $(document.getElementById('strAnchor4')).html(anchor4);
    $(document.getElementById('strAnchor5')).html(anchor5);

    for(var i = 0; i <= 32; i++)
    {
        $(document.getElementById('strContent' + i)).html(content[i]);
    }

    $('.anchorbtn').on('click', function(){
        document.getElementById("anchorDropdown").classList.toggle("show");
    });

    $('.contentbtn').on('click', function(){
        document.getElementById("contentDropdown").classList.toggle("show");
    });

    $('.contentbtn').hide();
    hideAllContent();

    $('.anchor1').on('click', function(){
        var anchorString = anchor1;
        $(document.getElementById('strAnchor')).html(anchorString);
        $('.contentbtn').show();
        hideAllContent();
        for(var i = 0; i <= 7; i++)
        {
            $('.content' + i).show();
        }
    });

    $('.anchor2').on('click', function(){
        var anchorString = anchor2;
        $(document.getElementById('strAnchor')).html(anchorString);
        $('.contentbtn').show();
        hideAllContent();
        for(var i = 8; i <= 12; i++)
        {
            $('.content' + i).show();
        }
    });

    $('.anchor3').on('click', function(){
        var anchorString = anchor3;
        $(document.getElementById('strAnchor')).html(anchorString);
        $('.contentbtn').show();
        hideAllContent();
        for(var i = 13; i <= 22; i++)
        {
            $('.content' + i).show();
        }
    });

    $('.anchor4').on('click', function(){
        var anchorString = anchor4;
        $(document.getElementById('strAnchor')).html(anchorString);
        $('.contentbtn').show();
        hideAllContent();
        for(var i = 23; i <= 27; i++)
        {
            $('.content' + i).show();
        }
    });

    $('.anchor5').on('click', function(){
        var anchorString = anchor5;
        $(document.getElementById('strAnchor')).html(anchorString);
        $('.contentbtn').show();
        hideAllContent();
        for(var i = 28; i <= 32; i++)
        {
            $('.content' + i).show();
        }
    });

    for(var i = 0; i <= 32; i++)
    {
        $('.content' + i).click({contentNum: i}, generateQuestion);
    }
}

function unselectAnswers(){
    $('.answer1').removeClass('active');
    $('.answer2').removeClass('active');
    $('.answer3').removeClass('active');
    $('.answer4').removeClass('active');
}

function hideAllContent(){
    for(var i = 0; i <= 32; i++)
    {
        $('.content' + i).hide();
    }
}

function hideAllQuestions(){
    //alert('inside hideAllQuestions');
    $('.question').hide();
    $('.answer1').hide();
    $('.answer2').hide();
    $('.answer3').hide();
    $('.answer4').hide();
    $('.submit').hide();
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

