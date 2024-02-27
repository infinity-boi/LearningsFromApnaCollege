let lecture = 10;
// let section = 3;
// let title = 'Javascript';

// const course = {
//     lecture: 10,
//     section: 3,
//     title: 'Javascript',
//     notes: {
//         introduction: "Welcome to JS course"
//     },
//     enroll(){
//         console.log('You are sucessfully enrolled')
//     }
// }



// course.enroll()
// console.log(course)

// course.price = 999  //dynamic


// // Factory function
// function createCourse(title){
//     const course = {
//         lecture: 10,
//         section: 3,
//         title: title,
//         notes: {
//             introduction: "Welcome to JS course"
//         },
//         enroll(){
//             console.log('You are sucessfully enrolled')
//         }
//     }
//     return course;
// }           // kind of constructor


// const course  =createCourse('Javascript');
// course.enroll()
// console.log(course);

// // Constructor Function
// function Course(title){
//     this.title = title,
//     this.enroll = function(){
//         console.log('You have sucressfully enrolled');
//     }
// }
// const newCourse = new Course('Javacript');
// course.enroll();

// // deleteing
// delete course.title;
// // creating function
// course.checkEnrollment = function(){
//     // console.log("#0 studetns are enrolled")
// }

// const course = new Course('Javascript');
// console.log(course.consturctor)
// console.log(newCourse.consturctor)


// function Course(title){
//     this.title = title,
//     this.enroll = function(){
//         console.log('You have sucressfully enrolled');
//     }
// }

// // Constructor Function
// const course_1 = new Function('title', `
// this.title = title,
// this.enroll = function(){
//     console.log('You have sucressfully enrolled');
// }
// `)

// const course_2 = new course_1('Javascript');
// course_2.enroll();

// // similarly 
// let number = 10;    //primitive datatype
// let number_2 = number;  //pass by value
// console.log(number);
// console.log(number_2);
// // reference datatype
// let obj = {number: 10};
// // pass by reference
// let obj2 = obj;
// obj2.number = 15;
// console.log(obj)
// console.log(obj2)

// // spread operator
// const course = {
//     title: 'Javascript',
//     enroll(){
//         console.log('You have sucressfully enrolled');
//     }
// }
// // 1. to copy object using spread operator (...)
// const course_1 = {...course}
// course_1.title = "C++";
// // 2.
// const course_1 = Object.assign({}, course);
// // 3.
// // for(let key in course){
// //     console.log(key, course[key]);
// // }
// const course_1 = {};
// for(let key in Object.keys(course)){
//     course_1[key] = course[key];
// }

// //example 
// const product = {
//     itemname: 'Flower',
//     price: 50,
//     discount: 20,
//     itemCode: 'F40'
// }
// function createproduct(name, price, discount, itemCode){
//     return {
//         itemName: name,
//         price: price,
//         discount: discount,
//         itemCOde: itemCode,
//     }
// }

// const football = createProduct( 'football', 400, 10, 'F30');

// function Product(name, price, discount, itemCode){
//     this.itemName = name;
//     this.price = price;
//     this.discount = discount;
//     this.itemCode = itemCode;
//     this.discountValue = function(){
//         return price* discount/100;
//     }
// }

// const mobile = Product('Oneplus Nord', 30000, 5, 'OP02');