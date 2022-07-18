function scuberGreetingForFeet(height){
  // Write your code here!
  if (height <= 400) {
    return "This one is on me!"
  } else if (height > 400 && height < 2000) {
    return "That will be twenty bucks."
  } else if (height < 2500 && height > 2000) {
    return "I will gladly take your thirty bucks."
  }
  else if (height > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const isNYC =(city === "NYC") ? "Ok, sounds good." : "No go."
  return isNYC;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  // let tip = 'generous'
  // let response;
  switch(tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}