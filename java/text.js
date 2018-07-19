// var name="Elena";
// var age= 16;
var string = "some string";
var number = 10;

var bool_true = true;
var bool_false= false;
varboolean = 1 == 2;
// var message="Hi, my name is " + name + " and I am " + age + " years old.";
// alert(message);
// console.log(message);

if (bool_true){
  console.log("The conditional statement executed.")
}
bool_true= false;

if (bool_true){
  console.log("The conditional statement executed.")
}

var array = ["array_item1", "2", "3"];

// console.log(typeof bool_true);
// console.log(typeof bool string);
// console.log(typeof bool number);
// console.log(typeof bool array);

var Pi= 3.14;
var constant = 100;
var math_constant2 = 1.25;
function add(value1, value2){
  return value1 + value2;
}

function divide(value1, value2){
  return value1 / value2;
}

function explain(){
  return "math is amazing";
}

var car_name = "Nissan Altima";
var car_year_made = 2015;
function explain_car(){
  return "This car is a " + car_name + " made in " + car_year_made;
}
explain();

var math = {
  pi:3.14,
  other_constant: 100,
  add: function(v1, v2){
    return v1 + v2;
  },
  explain: function() {
    return " this is amazing";
  }
}

var car = {
  name: "Nissan Altima",
  year:2015,
  explain: function() {
    return "This car is a " + this.name + " made in " + this.year;
  }
}
console.log(math.explain());
console.log(car.explain());

var array = [1,2,3,4,5];

for(var i=0; i<array.length; i++) {
  console.log(array[i]);
}
var string = " Some random string to show how string function";
var length = string.length;
console.log("the length of the string is " + length);

/*indexOf*/
var pos_random = string.indexOf("random");
console.log("position of random is " + pos_random);

var sliced_string =  string.slice(12, 17)
console.log(sliced_string);

function setTime() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  document.getElementById("date").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(setTime, 1000);
};
