//Algebra 1 Anchors
var anchor1 = 'Operations with Real Numbers and Expressions';
var anchor2 = 'Linear Equations';
var anchor3 = 'Linear Inequalities';
var anchor4 = 'Functions';
var anchor5 = 'Coordinate Geometry';

//Algebra 1 Content
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

//main function gets loaded once the document is ready
$(document).ready(main);

// Click events that close the dropdown menus if the user clicks outside of them
window.onclick = function(event) {
  if (!event.target.matches('#anchorbtn')) {
    var dropdown = document.getElementById('anchorDropdown');
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
  }

  if (!event.target.matches('#contentbtn')) {
    var dropdown = document.getElementById('contentDropdown');
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
  }
}

//function that will generate a question
function generateQuestion(event){
    //variable 0-32, matches the content number to call
    var questionToGenerate = event.data.contentNum;
    $(document.getElementById('strContent')).html(content[questionToGenerate]);

    //Question blank object
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
    
    //String used to call the proper generateContent method
    var genQuestionString = 'generateContent' + questionToGenerate;

    //Test to make sure the method being called exists
    if (typeof window[genQuestionString] === 'function') { 
        newQuestion = window[genQuestionString]();
    }
    else {
        alert('This question has not yet been implemented');
    }

    //Call displayQuestion() function
    //Eventually this will have a newQuestion parameter
    if(newQuestion.isDeployed){
        //Needed to avoid multiple questions being checked
        $( "#submit" ).unbind( "click" );
        displayQuestion(newQuestion);
    }
    else
        alert('This question has not yet been implemented')
}

//function displays the question, answers, and submit button to the user 
function displayQuestion(newQuestion){
    //Fade timer variables
    //fadeInterval is time between items being faded
    var fadeInterval = 750;
    //fadeTimer is length it takes to complete a fade
    var fadeTimer = 500;

    var questionw = document.getElementById('question');
    $(questionw).html(newQuestion.question);

    //shuffle multiple choice answers to display to the user 
    var answers = [newQuestion.correctAnswer, newQuestion.incorrect1, newQuestion.incorrect2, newQuestion.incorrect3];
    shuffle(answers);

    //Display all answers in their appropriate spans
    var a = document.getElementById('answer1');
    $(a).html('A. ' + answers[0]); 

    var b = document.getElementById('answer2');
    $(b).html('B. ' + answers[1]);  

    var c = document.getElementById('answer3');
    $(c).html('C. ' + answers[2]);  

    var d = document.getElementById('answer4');
    $(d).html('D. ' + answers[3]);     

    //hide all question material to be faded
    hideAllQuestions();

    //fade in the question, answers, and submit button
    $('#question').fadeIn(fadeTimer);
    setTimeout(function(){
        $('#answer1').fadeIn(fadeTimer);
    }, fadeInterval);
    setTimeout(function(){
        $('#answer2').fadeIn(fadeTimer);
    }, fadeInterval * 2);
    setTimeout(function(){
        $('#answer3').fadeIn(fadeTimer);
    }, fadeInterval * 3);
    setTimeout(function(){
        $('#answer4').fadeIn(fadeTimer);
    }, fadeInterval * 4);

    //Declare a user answer
    //Get their response in the click events below
    var userAnswer;

    //Click event for answer #1
    //Makes it appear active and stores the answer as the user's choice
    $('#answer1').on('click', function(){
        unselectAnswers()
        $(this).addClass('active');
        newQuestion.userAnswer = answers[0];
        $('#submit').show();
    });

    //Click event for answer #2
    //Makes it appear active and stores the answer as the user's choice
    $('#answer2').on('click', function(){
        unselectAnswers()
        $(this).addClass('active');
        newQuestion.userAnswer = answers[1];
        $('#submit').show();
    });

    //Click event for answer #3
    //Makes it appear active and stores the answer as the user's choice
    $('#answer3').on('click', function(){
        unselectAnswers()
        $(this).addClass('active');
        newQuestion.userAnswer = answers[2];
        $('#submit').show();
    });

    //Click event for answer #4
    //Makes it appear active and stores the answer as the user's choice
    $('#answer4').on('click', function(){
        unselectAnswers()
        $(this).addClass('active');
        newQuestion.userAnswer = answers[3];
        $('#submit').show();
    });

    //Click event for the submit button
    //Alert user if they were correct or not
    //Will changed as the site develops
    $('#submit').on('click', function(){
        if(newQuestion.userAnswer === newQuestion.correctAnswer){
            alert('Correct');
        }
        else{
            alert('Incorrect');
        }
    });
}

function main(){
    //Hide code for the question, possible answers, and submit button
    hideAllQuestions();

    //Set all the dropdown anchors items to the strings above
    $(document.getElementById('strAnchor1')).html(anchor1);
    $(document.getElementById('strAnchor2')).html(anchor2);
    $(document.getElementById('strAnchor3')).html(anchor3);
    $(document.getElementById('strAnchor4')).html(anchor4);
    $(document.getElementById('strAnchor5')).html(anchor5);

    //Set all the dropdown content items to the strings above
    for(var i = 0; i <= 32; i++)
    {
        $(document.getElementById('strContent' + i)).html(content[i]);
    }


    $('#anchorbtn').on('click', function(){
        document.getElementById("anchorDropdown").classList.toggle("show");
    });

    $('#contentbtn').on('click', function(){
        document.getElementById("contentDropdown").classList.toggle("show");
    });

    $('#contentbtn').hide();
    hideAllContent();

    //anchor1 click event
    //Will show all content items for anchor1
    $('.anchor1').on('click', function(){
        
        var anchorString = anchor1;
        $(document.getElementById('strAnchor')).html(anchorString);
        $('#contentbtn').show();
        hideAllContent();
        for(var i = 0; i <= 7; i++)
        {
            $('.content' + i).show();
        }
    });

    //anchor2 click event
    //Will show all content items for anchor2
    $('.anchor2').on('click', function(){
        
        var anchorString = anchor2;
        $(document.getElementById('strAnchor')).html(anchorString);
        $('#contentbtn').show();
        hideAllContent();
        for(var i = 8; i <= 12; i++)
        {
            $('.content' + i).show();
        }
    });

    //anchor3 click event
    //Will show all content items for anchor3
    $('.anchor3').on('click', function(){
        var anchorString = anchor3;
        $(document.getElementById('strAnchor')).html(anchorString);
        $('#contentbtn').show();
        hideAllContent();
        for(var i = 13; i <= 22; i++)
        {
            $('.content' + i).show();
        }
    });

    //anchor4 click event
    //Will show all content items for anchor4
    $('.anchor4').on('click', function(){
        var anchorString = anchor4;
        $(document.getElementById('strAnchor')).html(anchorString);
        $('#contentbtn').show();
        hideAllContent();
        for(var i = 23; i <= 27; i++)
        {
            $('.content' + i).show();
        }
    });

    //anchor5 click event
    //Will show all content items for anchor5
    $('.anchor5').on('click', function(){
        var anchorString = anchor5;
        $(document.getElementById('strAnchor')).html(anchorString);
        $('#contentbtn').show();
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

//Removes active attributes from all possible answers
function unselectAnswers(){
    $('#answer1').removeClass('active');
    $('#answer2').removeClass('active');
    $('#answer3').removeClass('active');
    $('#answer4').removeClass('active');
}

//Hides all content options from the content dropdown
function hideAllContent(){
    for(var i = 0; i <= 32; i++)
    {
        $('.content' + i).hide();
    }
}

//Hides the questions, answers, and submit button
//Used to toggle fade effects
function hideAllQuestions(){
    $('#question').hide();
    $('#answer1').hide();
    $('#answer2').hide();
    $('#answer3').hide();
    $('#answer4').hide();
    $('#submit').hide();
}

//Randomly shuffles the elements in an array
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