
const handleClickB7web = () => {
  let aboutB7web = document.getElementsByClassName('aboutB7web');
  for (let i = 0; i < aboutB7web.length; i++){
  if(aboutB7web[i].style.width !== "200px"){
      aboutB7web[i].style.width ="200px";
      aboutB7web[i].style.height ="90px";
      aboutB7web[i].style.position ="absolute";
      aboutB7web[i].innerHTML = "42 school is a hard one that makes you go crazy!";
      break;
    }
    else if (aboutB7web[i].style.width === "200px"){
      aboutB7web[i].style.width ="0px";
      aboutB7web[i].style.height ="0px";
      aboutB7web[i].style.overflow ="hidden";
      aboutB7web[i].style.transition ="all 0.4s ease-in-out";
      aboutB7web[i].style.border ="none";
    }
  }
}
export default handleClickB7web;