/**
 * Created by SHJ on 2017/1/13.
 */
/** 箭头操作符*/
//var array = [1,2,3];
////传统写法
//array.forEach(function(v, i, a){
//    console.log(v);
//});
//
////ES6
//array.forEach(v => console.log(v));
class Animal{
    //ES6 新型构造器
    constructor(name){
        this.name=name;
    }
    //实例方法
    sayName(){
        console.log('My name is'+this.name);
    }
}
//类继承
class Programmer extends Animal {
 constructor(name){
     //直接调用父类构造函数进行初始
     super(name);
 }
    program(){
        console.log("I'm coding");
    }
}

//测试我们的类
var animal = Animal('dummy');
wayou = new Programmer('wayou');
animal.sayName();
wayou.sayName();
wayou.program();