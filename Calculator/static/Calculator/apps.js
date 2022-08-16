
var get_output
var out_put_len

get_output = document.getElementById("out-put").textContent
out_put_len = get_output.length

if (out_put_len  > 25) {
    document.getElementById("out-put").style.fontSize = "15px";
}

else {
    document.getElementById("out-put").style.fontSize = "16px";
  }


//   <div class="bar bar-1" onclick="document.getElementById('calc-5').value = '+'"></div>






