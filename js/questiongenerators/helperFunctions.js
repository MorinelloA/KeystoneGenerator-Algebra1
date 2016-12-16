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
    return name;
}