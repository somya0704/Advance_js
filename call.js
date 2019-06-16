var obj = {
  num : 2
};

var add = function(a){
   console.log(this.num + a);
};

add.call(obj, 3);