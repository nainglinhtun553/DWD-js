

// const passcode=123456;
// passcode=122;


// operators>> arithmetic add,subtract,multiple,divided,
// let a =10;
// let b =5;
//  let add =a+b;
//  let sub=a-b;
//  let mul=a*b;
//  let div=a/b;
//  let rem =a%b; // remainder operator အကြွင်း
//  let exp =a**b;// exponent operator

 // console.log(add);
 // console.log(exp); // 10*10*10*10*10=1000000



// let precedence = a+b*b/a-b// operator precedence
// there are 21 types in javascript



// let a =10;
// let b=5;
// let c= 3;
// let answer1=a+b*c;
// console.log('answer1'+answer1);
// let answer2=a+(b*c);// grouping operator
// console.log('answer2'+answer2);

// let answer3=(a+b)*c;// grouping operator
// console.log('answer3'+answer3);

// let test =(a+b)-(b*c)+(b-c);
// console.log(test);
// // အရင်ဦးဆုံး အလုပ်လုပ်ချင်တဲ့ကောင်ကို ကွင်းခက်ပေးပါ။



// property accessor 
// there are two types property accessors.
// 1.Do Nation
// 2.bracket notation


// syntex
// expression.identifier;
// identifier mean that the property name.



// let car ={
// 	name:"Mark1"
// }



// let car= {property:'driving'};
// console.log(car.property);


//object.property1,property2
// object or json
// let car ={
// 	male:{driver:'naing lin htun'},
// 	female:{driver:'su su'}
// }
// console.log(car.male.driver);
// console.log(car.female.driver);


let mmWeather={
	Mandalay:{
		PyinOoLwin:{temp:30,humandity:20,condition:'cool'},
		NayPyiDaw:{temp:40,numandity:30,condition:'hot'}
	},
	Yangon:{}
};

console.log(mmWeather.Mandalay.PyinOoLwin.condition);