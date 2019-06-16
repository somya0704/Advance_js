var obj = {
    num:3
};

var arr=[1,2,3];

var add =function(a,b,c){
    return this.num + a + b + c;
};

console.log(add.apply(obj, arr));