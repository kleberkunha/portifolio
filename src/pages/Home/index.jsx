import React from 'react';
import './style.css';
import './script';

const Home = () => {
  return (
    <>
      <div className="main-container container border">teste
        <div className="border pt-5">
          <div className="border d-flex justify-content-center">
            <div className="title border text-center">Kleber da Cunha</div>
          </div>
          <div className="container border d-flex justify-content-center pt-3">
            <img src="https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png" width="200px" alt="..." class="rounded-circle"/>
          </div>
          <div className="text-center">
            Junior Developer
          </div>
        </div>
        <div className="mainbox-aboutme border">
          <div className="border text-center">A little about myself</div>
          <div className="box-about-me border">

            <ul className="border">
              <li>
                <div className="border">
                  <div className="title-box text-center mt-4">Languages</div>
                    <div className=" mt-2">
                      <ul className="p-0 text-center">
                        <li>
                          <div className="text-center pt-2">Portuguese</div>
                          <progress max="10" value="0"></progress>
                        </li>
                        <li className="">
                          <div className="text-center pt-2">English</div>
                          <progress max="10" value="0"></progress>
                        </li>
                        <li className="">
                          <div className="text-center pt-2">French</div>
                          <progress max="10" value="0"></progress>
                        </li>
                        <li className="">
                          <div className="text-center pt-2">Spanish</div>
                          <progress max="10" value="0"></progress>
                        </li>
                      </ul>
                    </div>
                </div>
              </li>
              
            </ul>
          
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;