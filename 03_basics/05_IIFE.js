//Immediately Invoked Function Expression (IIFE)

(function work(){
    console.log(`DB Connected`);
})();

//to terminate this type of special case we should write ; at the last

//(yahan pe hum function ke defination likenge )(Execution Call)

//why we use IIFE ??

// We use IIFE (Immediately Invoked Function Expression) to create a private scope.
// This helps avoid polluting the global namespace and prevents variable/function name conflicts.
// It runs immediately after it’s defined, which is useful for initialization code
// or when we only need the logic to execute once.

//IIFE using arrow Function
( () => {
    console.log(`DB connected Two`);
})();

( (name) => {
    console.log(`DB connected Two ${name}`);
})('Debananda');
