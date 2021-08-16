
const handleClickCvideo = () => {
  let aboutCvideo = document.getElementsByClassName('aboutCvideo');
  for (let i = 0; i < aboutCvideo.length; i++){
  if(aboutCvideo[i].style.width !== "200px"){
      aboutCvideo[i].style.width ="200px";
      aboutCvideo[i].style.height ="90px";
      aboutCvideo[i].style.position ="absolute";
      aboutCvideo[i].innerHTML = "42 school is a hard one that makes you go crazy!";
      break;
    }
    else if (aboutCvideo[i].style.width === "200px"){
      aboutCvideo[i].style.width ="0px";
      aboutCvideo[i].style.height ="0px";
      aboutCvideo[i].style.overflow ="hidden";
      aboutCvideo[i].style.transition ="all 0.4s ease-in-out";
      aboutCvideo[i].style.border ="none";
    }
  }
}

export default handleClickCvideo;