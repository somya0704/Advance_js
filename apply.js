var obj = {
    num:3
};
var obj1 = {
    num : 5
};
var arr=[1,2,3];

var add =function(a,b,c){
    return this.num + a + b + c;
};

console.log(add.apply(obj, arr));
console.log(add.apply(obj1,arr));