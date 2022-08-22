var get_output
var out_put_len
var first_input_box
var second_input_box
var plus_btn 
var min_btn
var multi_btn
var divide_btn
var equals_btn
var calc_box
var small_equls_btn
var raw_out_put_address
var active_input = 0
var test

get_output = document.getElementById("out-put").textContent
out_put_len = get_output.length
raw_out_put_address = document.getElementById("out-put")
first_input_box = document.getElementById("first-number")
second_input_box = document.getElementById("second-number")
plus_btn = document.getElementById("op-1")
min_btn = document.getElementById("op-2")
multi_btn = document.getElementById("op-3")
divide_btn = document.getElementById("op-4")
equals_btn = document.getElementById("equals")
calc_box = document.getElementById("calc-5")
small_equls_btn = document.getElementById("small_calc_eq")


if (out_put_len  > 8) {
  document.getElementById("out-put").style.fontSize = "15px";
} else {
  document.getElementById("out-put").style.fontSize = "16px";
}


first_input_box.addEventListener('focus', (event) => {
  first_input_box.style.animation = ""
  active_input = 0
});

second_input_box.addEventListener('focus', (event) => {
  first_input_box.style.animation = ""
  active_input = 1
});

plus_btn.onclick = function(){
  active_input = 1
  calc_box.value = "+"
  calc_box.style.animation="";
}
min_btn.onclick = function(){
  active_input = 1
  calc_box.value = "-"
  calc_box.style.animation="";
}
divide_btn.onclick = function(){
  active_input = 1
  calc_box.value = "÷"
  calc_box.style.animation="";
}
multi_btn.onclick = function(){
  active_input = 1
  calc_box.value = "X"
  calc_box.style.animation="";
}


document.getElementById("num-1").onclick = function(){
  first_input_box.style.animation = ""
  print_number('1');
};
document.getElementById("num-2").onclick = function(){
  first_input_box.style.animation = ""
  print_number('2');
};
document.getElementById("num-3").onclick = function(){
  first_input_box.style.animation = ""
  print_number('3');
};
document.getElementById("num-4").onclick = function(){
  first_input_box.style.animation = ""
  print_number('4');
};
document.getElementById("num-5").onclick = function(){
  first_input_box.style.animation = ""
  print_number('5');
};
document.getElementById("num-6").onclick = function(){
  first_input_box.style.animation = ""
  print_number('6');
};
document.getElementById("num-7").onclick = function(){
  first_input_box.style.animation = ""
  print_number('7');
};
document.getElementById("num-8").onclick = function(){
  first_input_box.style.animation = ""
  print_number('8');
};
document.getElementById("num-9").onclick = function(){
  first_input_box.style.animation = ""
  print_number('9');
};
document.getElementById("num-0").onclick = function(){
  first_input_box.style.animation = ""
  print_number('0');
};



function print_number(number){
  if (active_input === 0){
      if ((first_input_box.value).length > 3){
          active_input = 1
      } 
      else{
        first_input_box.value += number
      }
  }

  if (active_input === 1){
    if (first_input_box.value == "" && calc_box.value == "") {
      first_input_box.style.animation = "blink 1s infinite"
      calc_box.style.animation = "blink 1s infinite"
      active_input = 0
    }
    else{
      if (calc_box.value === ""){
        calc_box.style.animation="blink 1s infinite";
      }
      else {
        calc_box.style.animation= "";
        if ((second_input_box.value).length > 3){
          active_input = 1
      }
      else{
        second_input_box.value += number
      }
      }
    }
  }
}


var p = get_output.split("=")
if (p.length == 1){
  console.log("nothing")
}
else{
  console.log(p)
}
