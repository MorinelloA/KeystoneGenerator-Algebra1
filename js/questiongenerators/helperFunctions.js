//Format number with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Return a + or - depending on the number
function posNegSign(num)
{
    if(num < 0)
        return '-';
    else
        return '+';
}

//Return the proper number with a + or - in front
function numPrefix(num)
{
    if(num < 0)
        return '-' + Math.abs(num);
    else
        return '+' + Math.abs(num);
}

//Returns the proper value of the number infront of a variable
//i.e. 1x becomes x, -1x becomes -x
//Does not account for 0
function varPrefix(num)
{
    if (num == 1)
    {
        return '+';
    }
    else if (num == -1)
    {
        return '-';
    }
    else if (num < 0)
    {
        return num;
    }
    else
    {
        return '+' + num;
    }
}

//Same as above but should not include a plus sign when positive
function varPrefixNoPlus(num)
{
    if (num == 1)
    {
        return '';
    }
    else if (num == -1)
    {
        return '-';
    }
    else
    {
        return num;
    }
}


//Returns a random field property
function fieldProperty(num){
    switch(num){
        case 0:
            return 'Associative';
        case 1:
            return 'Commutative';
        case 2:
            return 'Identity';
        case 3:
            return 'Inverse';
        case 4:
            return 'Distributive';
    }
}

//Finds the LCM of 2 numbers
function LCM(num1, num2){
    var working1 = num1;
    var working2 = num2;

    while(working1 != working2)
    {
        if(working1 < working2)
        {
            working1 += num1;
        }
        else
        {
            working2 += num2;
        }
    }

    return(working1);
}

//Finds GCF (GCD)
function GCF(a,b) {
    if (a < 0) a = -a;
    if (b < 0) b = -b;
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

//Generates a person's name randomly
function generateName(){
    var temp = Math.floor(Math.random() * 25);
    var name;
    var names = ['Andy', 'Anthony', 'Becky', 'Bethany', 'Bill', 'Brian', 'Carlos', 
    'Carmen', 'Dave', 'Donald', 'Ethan', 'Frank', 'Francis', 'Greg', 'Hillary', 'Ike', 
    'Isaiah', 'James', 'Jennifer', 'Joe', 'Kelly', 'Kathy', 'Lydia', 'Mark', 'Megan', 
    'Mike', 'Nick', 'Olivia', 'Oliver', 'Paula', 'Quinn', 'Rachel', 'Reggie', 'Sam', 'Tony', 
    'Tonya', 'Tristyn', 'Vanessa', 'Vicky', 'Wendy', 'Yolanda'];

    return names[Math.floor(Math.random() * names.length)];
}