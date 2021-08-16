
const handleClickOpenC = () => {
  let aboutOpenC = document.getElementsByClassName('aboutOpenC');
  for (let i = 0; i < aboutOpenC.length; i++){
  if(aboutOpenC[i].style.width !== "200px"){
      aboutOpenC[i].style.width ="200px";
      aboutOpenC[i].style.height ="90px";
      aboutOpenC[i].style.position ="absolute";
      aboutOpenC[i].innerHTML = "42 school is a hard one that makes you go crazy!";
      break;
    }
    else if (aboutOpenC[i].style.width === "200px"){
      aboutOpenC[i].style.width ="0px";
      aboutOpenC[i].style.height ="0px";
      aboutOpenC[i].style.overflow ="hidden";
      aboutOpenC[i].style.transition ="all 0.4s ease-in-out";
      aboutOpenC[i].style.border ="none";
    }
  }
}

export default handleClickOpenC;