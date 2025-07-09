/**
 * @return {Function}
 */
var createHelloWorld = ( a = "Hello World" ) => {
    
    return function(...args) {
       return a;
    }
};



// or
var c = a()=>{
  return function(...args){
    return a; 
  }
}
/**



 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
