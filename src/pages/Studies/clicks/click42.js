
const handleClick42 = () => {
  let about42 = document.getElementsByClassName('about42');
  for (let i = 0; i < about42.length; i++){
  if(about42[i].style.width !== "200px"){
      about42[i].style.width ="200px";
      about42[i].style.height ="90px";
      about42[i].style.position ="absolute";
      about42[i].innerHTML = "42 school is a hard one that makes you go crazy!";
      break;
    }
    else if (about42[i].style.width === "200px"){
      about42[i].style.width ="0px";
      about42[i].style.height ="0px";
      about42[i].style.overflow ="hidden";
      about42[i].style.transition ="all 0.4s ease-in-out";
      about42[i].style.border ="none";
    }
  }
}

export default handleClick42;
