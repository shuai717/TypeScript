//函数定义
function add(x, y) {
    return x + y;
}

let myAdd = function(x, y) { return x + y; };

//为函数定义类型
function adds(x:number ,y:number) :number {
    return x+y
}

let myAdds=function(x:number,y:number):number{return x+y}

//完整函数类型
let myAdd1:(x:number,y:number)=>number=function(x:number,y:number):number{return x+y}