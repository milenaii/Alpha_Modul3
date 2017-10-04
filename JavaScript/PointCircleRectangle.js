// K({1, 1}, 1.5)
//rectangle R(top=1, left=-1, width=6, height=2)
function solve (args){
    const XC = 1;
    const YC = 1;
    const RC = 1.5;

    // Ф-ЛА, С КОЯТО СЕ НАМИРА ДАЛИ ТОЧКА ПРИНАДЛЖИ НА КРЪГ
    //  (xp - xc) ^ 2 + (yp - yc) ^ 2 <= rc ^2     p - point, c - circle

    let xp = args[0],
        yp = args [1];

    circle = ((xp - XC) * (xp - XC) + (yp - YC) * (yp - YC) <= RC * RC);
    //rectangle  - от условието на зад следва, че: xr -> [1,7] и yr -> [-1,1], so we must check if the point is in these ranges

    rectx = (xp <= 7);
    rectxx = (xp >= 1);
    recty = (yp <= 1);
    rectyy = (yp >= -1);

    if (circle == true && rectx == true && rectxx == true && recty == true && rectyy == true)
    {
        console.log("inside circle inside rectangle");
    }

    if (!(circle == true) && rectx == true && rectxx == true && recty == true && rectyy == true)
    {
        console.log("outside circle inside rectangle");
    }

    if (!(circle == true) && !(rectx == true && rectxx == true && recty == true && rectyy == true))
    {
        console.log("outside circle outside rectangle");
    }
    if ((circle == true) && !(rectx == true && rectxx == true && recty == true && rectyy == true))
    {
        console.log("inside circle outside rectangle");
    }

}

solve (['0', '1'])