var obj={
    num:3
};


var add= function(a,b,c){
    return this.num + a + b + c;
};

var bound = add.bind(obj);
console.log(bound(1,2,3));
