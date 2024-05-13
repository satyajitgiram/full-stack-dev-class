// // alert("hello everyone !")
// document.getElementById("test").innerHTML = "My first js programm !"



console.log("This file is running")


// let mark =58;

// if(mark >= 90) {
//     console.log('A')
// }
// else if (mark >= 80){
//     console.log("B")
// }
// else if (mark >= 70){
//     console.log("C")
// }
// else{
//     console.log('D')
// }



// let num = 2
// switch(num){
//     case 1:console.log('A');
//     break;
//     case 2: console.log('B');
//     break;
//     case 3: console.log('C');
//     default : console.log("Default is running");
//     break;
// }


// for(let i=1; i<=10; i+=1){
//     console.log(19*i)
// }


// While loop 
// let i = 1;

// while(i<=10){
//     console.log(i*19);
//     i++;
// }

// var i = 1;
// do{
//     console.log(19*i);
//     i++;
// }while(i>10);


// const name = "Satyajit"

// console.log(name)


// OBJECT

// let car = {
//     "brand":"BMW",
//     "model": "X5",
//     "color": "Mat Black",
//     "type": "Sport",

//     status: function(){
//         console.log("Car's is running ..... ")
//     }

// }


const person = {

    firstName : "Satyajit",
    lastName : "Giram",
    id : "55555",

    fullName : function(){
        return this.firstName + " " + this.lastName
    }
}

console.log(person)

person.firstName = "Satyajit Edited"
person.middleName = "My Middle Name"

console.log(person)



// let fullname = person.fullName()

// console.log("This is full name =>",fullname)




// car.status()



// let moNo = 9595959959
// let name = "My name is john"


// console.log('this\\this')

// \b - backspace
// \f - form feed
// \t - tab


// let poem = 'Johny Johny Yes Papa Nursery Rhyme

// Johny Johny yes papa.
// Eating sugar no papa.
// Telling lies no papa.
// Open your mouth.
// Ha!
// Ha!
// Ha!'


// let mobile = "93939393"
// let newMobile = new String("93939393")
// let oldMobile = new String("93939393")
// console.log(typeof newMobile)


// let text = "Hello World!"
// console.log(text.charAt(6))
// console.log(text.length)
// console.log(text.toUpperCase())
// console.log(text.toLowerCase())


// let firstName = "Sumit"
// let lastName = "Rathod"

// let fullName = firstName.concat(" ",lastName)
// console.log(fullName)

// let text1 = "               Hello          "
// let text2 = text1.trim()
// let text3 = text1.trimStart()
// console.log(text1.length)
// console.log(text2.length)




// let text = "How it is going is is all!"
// let text2 = text.replace("all", "class")
// console.log(text2)


// let arr = text.split(" ")
// console.log(arr[0])

// console.log(text.indexOf("is"))



// Numbers 
// let x = 6
// let y = 6.900 
// let z = 123e-5

// console.log(z)


// let x = 90000  // number
// let y = "9000" // String


// let x = '1000'
// let y = 10
// let z = y + x
// console.log(z)




// let x = 10
// let y = 20
// let z = '30a'
// let res = x + y * z
// console.log(res)


// let x = 1234
// let y = x.toString();
// console.log(typeof y)



// toFixed() - 

// let z = 21.9484930328
// console.log(z.toFixed(2))
// console.log(z.toFixed(0))
// console.log(z.toFixed(4))



// let a = 999999999999999;
// let b = 9999999999999999;
// console.log(a);
// console.log(b);


 // Array

// let num1 = 12
// let num2 = 15

// let arr = [ 12, 15, 20]

// let car1 = "BMW"
// let car2 = "Volvo"
// let car3 = "BYD"

const car = [ "BMW", "Volvo","BYD", 12  ]
console.log(Array.isArray(car))
console.log(person instanceof Array)

//Methods 
// toString() 
console.log(car.toString())
console.log(car)

// pop()
console.log(car.pop())

console.log(car)


// 

// shift 

console.log(car.shift())
console.log(car)




console.log(car.push("New Added Value"))


// car[car.length]="new2"




// for (let i=0;i<car.length;i++){
//     console.log("Value =>", car[i])
// }




// console.log("Length =>", car.length)
// console.log(car[car.length -1] )

// console.log(car.sort())



// const cars = new Array("BMW", "Volvo","BYD")
// console.log(cars)


// console.log(typeof car)
// console.log(car[6]['name'])
// car[6] = "Hundai"
// car[7] = "Oddi"
// console.log(car)

// const cars = []
// cars[0] = "MMMM"
// cars[1] = "AAAAAA"
// cars[2] = "BBBBBBB"
// console.log(cars)



// DRY - Do No Repeate yourself 





//