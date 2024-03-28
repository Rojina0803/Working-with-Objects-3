
 //Inheritance


//  const proto= {
//     name:'Prototype',
//     complexity:"high"
//  }
//  console.log(proto);

//  let p={
//     run:()=>{
//         alert("RUN")
//     }
//  }
//  p.__proto__={
//     name:"LOBBIE"
//  }
//  proto.__proto__=p;
//  proto.run();
//  console.log(proto.name);

// const myCar = {
//     make: "Ford",
//     model: "Mustang",
//     year: 1969,
//   };

// Car.prototype.displayCar = function () {
//     const result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
//     console.log(result);
//   };


//Using "this" keywordd

  const Manager = {
    name: "Karina",
    age: 27,
    job: "Software Engineer",
  };
  const Intern = {
    name: "Tyrone",
    age: 21,
    job: "Software Engineer Intern",
  };
  
  function sayHi() {
    console.log(`Hello, my name is ${this.name}`);
  }
  

  Manager.sayHi = sayHi;
  Intern.sayHi = sayHi;
  
  Manager.sayHi();
  Intern.sayHi(); 

//Defining Getter and Setter


 
const myObj = {
    a: 7,
    get b() {
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2;
    },
  };
  
  console.log(myObj.a); 
  console.log(myObj.b); 
  myObj.c = 50; 
  console.log(myObj.a); 

  const Obj = { z: 0 };

Object.defineProperties(Obj, {
  b: {
    get() {
      return this.z+ 1;
    },
  },
  d: {
    set(x) {
      this.z= x / 2;
    },
  },
});

Obj.d= 10; 
console.log(myObj.b); 


//Comparing Objects

const obj_a={
    name:"Anuj"
};
const obj_b={
    name:"Anuj"
}
console.log(obj_a==obj_b);;



const obj1= {
    name:"Andheroo"
};
const obj2 = obj1;

console.log(obj2===obj1);
obj1.name="Saweera"
console.log(obj2);