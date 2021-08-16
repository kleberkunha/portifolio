import React from 'react';
import {CircleProgress} from 'react-gradient-progress'
import 'react-circular-progressbar/dist/styles.css';
import './CircularProgress.css';
import './style.css';
import './script';
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div className="main-container container">
      <div className=" pt-5">
        <div className=" d-flex justify-content-flex-start">
        </div>
        <div className="container d-flex justify-content-center pb-3">
          <div className="container-img"></div>
        </div>
      </div>
      <div className="title text-center">
        <Typewriter onInit={(typewriter)=> { 
          typewriter
          .typeString("Kleber da Cunha")
          .start();
        }}
        />
      </div>
      <div class="container ">
        <div class="row">
          <div class="item-lenguage col-sm">
            <div className="item-1 text-center pt-5 me-3">
              <p className=" text-center m-0">Portuguese</p>
              <CircleProgress percentage={100} strokeWidth={5} width={100} secondaryColor="" /> 
            </div>
            <div className="item-1 text-center pt-5 me-3">
              <p className=" text-center m-0">English</p>
              <CircleProgress percentage={70} strokeWidth={5} width={100} secondaryColor="" /> 
            </div>
            <div className="item-1 text-center pt-5 me-3">
              <p className=" text-center m-0">French</p>
              <CircleProgress percentage={60} strokeWidth={5} width={100} secondaryColor="" /> 
            </div>
          </div>
          <div class="main-about-me col-sm">
            <div className="col-10 pt-5">
              <h5 className="text-center me-5">About me</h5>
              <div className="">
                <div className=" text-center">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci cum corrupti culpa, odio quas, similique excepturi neque earum pariatur, nihil ullam. Sint blanditiis pariatur quam quisquam quia tempora voluptatibus laborum!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-5">
        <div class="main-hobbie-contact row">
          <div class=" col-sm p-4">
            <div className="text-center">
              <h5 className="text-center">Hobies</h5>
              <ul className="list-hobies d-flex">
                <li>
                  <div className="text-center pt-3">
                    <h6>Code</h6>
                    <img src="https://img.icons8.com/color-glass/48/000000/code.png" width="40px" alt="Code"/>
                  </div>
                </li>
                <li>
                  <div className="text-center pt-3">
                    <h6>Game</h6>
                    <img src="https://img.icons8.com/color/48/000000/keyboard.png" width="40px" alt="Game"/>
                  </div>
                </li>
                <li>
                  <div className="text-center pt-3">
                    <h6>Skateboard</h6>
                    <img src="https://img.icons8.com/emoji/48/000000/skateboard-emoji.png" width="40px" alt="Skateboard"/>
                  </div>
                </li>
                <li>
                  <div className="text-center pt-3">
                    <h6>Music</h6>
                    <img src="https://img.icons8.com/dusk/64/000000/rock-music.png" width="40px" alt="Music"/>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class=" col-sm">
            <h3 className="text-center">Contact</h3>
            <p className="text-center">E-mail : hello.kleberkunha@gmail.com</p>
            <div className="contact-location">
             <img src="https://img.icons8.com/fluency/48/000000/worldwide-location.png" height="50px" alt="earth"/>
              <p className="p-2 pt-4">France/Paris</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;