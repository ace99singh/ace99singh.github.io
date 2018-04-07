/*using this until cause i don't know server side lang*/
var maxVal = {
  ot: 3
};
var max;
var folder = null;
var counter = 0;
var image;
function getSubject(){
  image = document.getElementById('notes');
  var urlStr = window.location.href;
  var url =  new URL(urlStr);
  var header = url.searchParams.get("sub");
  var code = url.searchParams.get("code");
  code  = ""+code;
  var text = document.getElementById('heading');
  text.innerHTML = ""+header;
  folder = "" + code;
  image.src = ""+folder+"/"+counter+".png";
  max = maxVal[code];
}

function next(){
  counter++;
  if(counter > max)
    counter = 0;
  image.src = ""+folder+"/"+counter+".png";
}
function resetCount(){
  counter = 0;
  image.src = ""+folder+"/"+counter+".png";
}
function prev(){
  if(counter == 0)
    counter = max-1;
  else
    counter -= 1;
  image.src = ""+folder+"/"+counter+".png";
}
