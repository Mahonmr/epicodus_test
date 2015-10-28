function number_crunch() {
  var printThis = "";
  var ping_pong_array = [];
  var i;
  var counter;
  var number = parseFloat($('#ping_pong_number').val());

  //Build the Array
  //Write number to array unless
  //Divisible by 3 then write "Ping"
  //Divisible by 5 then write "Pong"
  //Divisible by 15 then write "Ping Pong"

  if (valid_input(number)) {
    ping_pong_array = get_values(number);
    //Loop through array and make into list to pretty it
    for (counter=0; counter<ping_pong_array.length; counter++) {
      printThis += '<li>' + ping_pong_array[counter] + '</li>';
    }
    $("#demo").html(printThis);
  }
  else{
    $("#demo").text("Must enter a whole number greater than zero and divisible by 2.");
  }
}

function valid_input(number) {
  return typeof number === "number" && ((number > 0) && (number % 2 === 0));
}

//populate array
function get_values(number) {
  var values = [];
  var i;

  for (i = 1; i <= number; i++) {
    values[i-1] = ping_pong(i);
  }

  return values;
}

function ping_pong(i) {
  var ping = i % 3;
  var pong = i % 5;
  var pingpong = i % 15;
  if (pingpong === 0 ){
    return "ping pong";
  }
  else if (pong === 0){
    return "pong";
  }
  else if
    (ping === 0){
    return "ping";
  }
  else {
    return i;
  }
}
