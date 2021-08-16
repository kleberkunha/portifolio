
const handleClickThp = () => {
  let aboutthp = document.getElementsByClassName('aboutthp');
  for (let i = 0; i < aboutthp.length; i++){
  if(aboutthp[i].style.width !== "200px"){
      aboutthp[i].style.width ="200px";
      aboutthp[i].style.height ="90px";
      aboutthp[i].style.position ="absolute";
      aboutthp[i].innerHTML = "42 school is a hard one that makes you go crazy!";
      break;
    }
    else if (aboutthp[i].style.width === "200px"){
      aboutthp[i].style.width ="0px";
      aboutthp[i].style.height ="0px";
      aboutthp[i].style.overflow ="hidden";
      aboutthp[i].style.transition ="all 0.4s ease-in-out";
      aboutthp[i].style.border ="none";
    }
  }
}

export default handleClickThp;