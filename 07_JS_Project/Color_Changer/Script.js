const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id ==='grey'){
            body.style.backgroundColor = 'gray'
            //body.style.backgroundColor = e.target.id
        }
        if(e.target.id ==='white'){
            body.style.backgroundColor = 'white'
        }
        if(e.target.id ==='blue'){
            body.style.backgroundColor = 'Blue'
        }
         if(e.target.id ==='yellow'){
            body.style.backgroundColor = 'Yellow'
        }
        if(e.target.id ==='golden'){
            body.style.backgroundColor = 'gold'
        }
        if(e.target.id ==='red'){
            body.style.backgroundColor = 'red'
        }
        if(e.target.id ==='pink'){
            body.style.backgroundColor = 'pink'
        }
        if(e.target.id ==='green'){
            body.style.backgroundColor = 'greenyellow'
        }
        
    })
});