
const handleClickTeacher = () => {
  let aboutTeacher = document.getElementsByClassName('aboutTeacher');
  for (let i = 0; i < aboutTeacher.length; i++){
  if(aboutTeacher[i].style.width !== "200px"){
      aboutTeacher[i].style.width ="200px";
      aboutTeacher[i].style.height ="90px";
      aboutTeacher[i].style.position ="absolute";
      aboutTeacher[i].innerHTML = "42 school is a hard one that makes you go crazy!";
      break;
    }
    else if (aboutTeacher[i].style.width === "200px"){
      aboutTeacher[i].style.width ="0px";
      aboutTeacher[i].style.height ="0px";
      aboutTeacher[i].style.overflow ="hidden";
      aboutTeacher[i].style.transition ="all 0.4s ease-in-out";
      aboutTeacher[i].style.border ="none";
    }
  }
}

export default handleClickTeacher;