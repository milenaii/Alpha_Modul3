function solve(args) {
    
        var x = +args[0],
    
            pos = 3;
    
        var mask = 1 << pos;
    
        var xAndMask = x & mask;
    
        var bit = xAndMask >> pos;
    
        console.log(bit);
    
    }
   // solve(['1024'])