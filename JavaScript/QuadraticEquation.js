function QuadraticEquation(args){
    let a = +args[0],
        b = +args[1],
        c = +args[2];

        let discr =b*b - 4*a*c;

        if(discr < 0){
        console.log("no real roots");
        }
        else if(discr = 0){
            x = -b/2*a;
            console.log('x1=x2='+x);
        }
        else{
            x1=(-b-Math.sqrt(discr))/2*a;
            x2=(-b+Math.sqrt(discr))/2*a;
            console.log('x1='+x1+'x2='+x2);
        }
}