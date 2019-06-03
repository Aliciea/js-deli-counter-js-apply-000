function takeANumber (current, name){
  var katzDeliLine = current.length+1
  current.push(name)
return "Welcome, " + name +". You are number "+ katzDeliLine +" in line."
}

function nowServing (katzDeliLine){
let name = 0;

if(katzDeliLine.length === 0){
  return "There is nobody waiting to be served!"
}
name = katzDeliLine.shift()
return "Currently serving "+ name + "."
}

function currentLine(katzDeliLine) {
  let str = '';
  
  for(let i = 0; i < katzDeliLine.length; i++){
    str.push(katzDeliLine[i]);
    
    if(katzDeliLine.length === 0){
      return "The line is currently empty."
   
    } else if(katzDeliLine[i]+1){
      return "The line is currently: ${katzDeliLine[i}";
    }
  }
}

