const handleClick3Wsc = () => {
  let about3Wsc = document.getElementsByClassName('about3Wsc');
  for (let i = 0; i < about3Wsc.length; i++){
  if(about3Wsc[i].style.width !== "200px"){
      about3Wsc[i].style.width ="200px";
      about3Wsc[i].style.height ="90px";
      about3Wsc[i].style.position ="absolute";
      about3Wsc[i].innerHTML = "42 school is a hard one that makes you go crazy!";
      break;
    }
    else if (about3Wsc[i].style.width === "200px"){
      about3Wsc[i].style.width ="0px";
      about3Wsc[i].style.height ="0px";
      about3Wsc[i].style.overflow ="hidden";
      about3Wsc[i].style.transition ="all 0.4s ease-in-out";
      about3Wsc[i].style.border ="none";
    }
  }
}

export default handleClick3Wsc;