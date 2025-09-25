const course ={
    coursename:"Js Full Course",
    price:"999",
    courseInstructor:"Debananda"
}

//course.courseInstructor

//const{courseInstructor} =course
const{courseInstructor: instructor} =course
console.log(instructor);

//this is json

// {
//    "coursename":"Js Full Course",
//     "price":"999",
//     "courseInstructor":"Debananda" 
// }