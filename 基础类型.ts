//数字
let num:number = 1;
let sum:number = 2;
let min = 2;
//min =true  不能将boolean值分配给number
//布尔
let flag : boolean =true;
let flag2: boolean =false
let flag3=false;
//flag3='a' 错误

//字符串
let str :string ='a'
let str2:string ='b'

//数组 两种定义方式
//1.泛型
let arr:Array<number> = [1];
let arr3:Array<string> = ['sting']
let arr4:Array<boolean>=[true,false]
//2.元素类型
let arr2:number[]=[1,2,3,4]
let arr5:boolean[]=[true,false]


//元组
let tuple:[string,number,boolean,null,undefined]=['a',1,true,null,undefined];

//枚举
enum Name {a=2 , b='1', c='2'}
enum Color {Red = 1, Green, Blue}
let people :Name =Name.a
let children :string =Name.b
console.log(people,children)

//任意值
let a :any ='a'
a=false

//空值
let empy :void=null
let empy2:void =undefined

//null 和 undefined

let nulls:null=null
let undefineds :undefined =undefined

let b:number=null
let c:string=undefined
let d:number[]=[null,undefined]

//never
//类型断言

