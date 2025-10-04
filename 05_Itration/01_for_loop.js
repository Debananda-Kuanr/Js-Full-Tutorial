//for loop

for (let i = 0; i < 10; i++) {
  const element = i;
  //console.log(element+1);
}

for (let i = 0; i <= 10; i++) {
  //console.log(`Outer Loop value:${i}`);

  for (let j = 0; j <= 10; j++) {
    //console.log(`Inner Loop value:${j} and Inner Loop value:${i}`);
  }
}

let myArray = ["Apple", "Ball", "Banana"];
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
}

// Break and Continue
for (let k =1; k <=20;k++) {
  if(k==5){
    //console.log(`Detected ${k}`);
    break;
  }
  //console.log(`The Value of k is ${k}`);
}


for (let k =1; k <=20;k++) {
  if(k==5){
    //console.log(`Detected ${k}`);
    continue;
  }
  //console.log(`The Value of k is ${k}`);
}