window.onload = function() {

  var buttonG = document.getElementById("G");
  var buttonGr = document.getElementById("Gr");
  var buttonC = document.getElementById("C");
  var buttonCI = document.getElementById("CI");
  var buttonSH = document.getElementById("SH");


  buttonG.addEventListener("click", function() {
    var x = 1.00123;
  var y = Math.round(x);
alert("Результат округлення числа 1,00123 у більшу сторону: y = " + y);
  });

  buttonGr.addEventListener("click", function() {
   var x = -3.1234;
var y = Math.round(x);

alert("Результат округлення числа -3.1234 у більшу сторону: y = " + y);
 });

  buttonC.addEventListener("click", function() {
   var x = 1.00123; 
  var y = Math.floor(x);

alert("Результат округлення числа 1,00123 у меншу сторону: y = " + y);

  });

  buttonCI.addEventListener("click", function() {
   var x = -3.1234;
var y = Math.floor(x);

alert("Результат округлення числа -3.1234 у меншу сторону: y = " + y);
 });

  buttonSH.addEventListener("click", function() {

var x = 1.44;
var y = Math.floor(x);

alert("Результат округлення числа 1,44 за правилами арифметики: y = " + y);

  });
};
