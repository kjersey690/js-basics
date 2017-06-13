/* Create a `myName` variable and assign it a String value */
var myName="Keith";
/* Create a `person` variable and give it 2 properties,
 * `name`, assign it the same name as before,
 * as well as an `age` (number);
 */
 var person={name:myName,age:23};


/* Create a variable called `canDrive`,
 * if it should be true if your person object is at least 16 years old
 */
 var canDrive;
 if(person.age >16){
    canDrive=true;
  }else{
    canDrive=false;

 }

/* Create a function called `greet`,
 * it should take a 1 parameter, `name`
 * and it should print "Hello, my name is {name}"
 */
  var greet=function(name){
   console.log("Hello, my name is "+ name);
  };

 //Create an array called `dataTypes` with atleast 1 of every data type;
  //(there are 6 different data types);
 var dataTypes=[];
 dataTypes[0]="string";
 dataTypes[1]=12;
 dataTypes[2]=undefined;
 dataTypes[3]=true;
 dataTypes[4]={};

 dataTypes[5]=null;

console.log(dataTypes);/* Create a `dog` object
 * it should have a `bark` function that makes your dog bark!
 * It should also have a name attribute with the value of 'Spot'
 */
 var dog={
  name: "Spot",
  bark: function(){
   console.log("bark");
  }

 };

