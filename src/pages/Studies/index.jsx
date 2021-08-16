import React from 'react';
import './style.css';
import handleClick42 from './clicks/click42';
import handleClick3Wsc from './clicks/click3Wsc';
import handleClickB7web from './clicks/clickB7';
import handleClickCvideo from './clicks/clickCvideo';
import handleClickOpenC from './clicks/clickOpenC';
import handleClickThp from './clicks/clickTHP';
import handleClickTeacher from './clicks/clickTeacher';
import { Link } from 'react-router-dom';
const Studies = () => {

  return (
    <>
      <div className="main-container-studies container">
        <div className="container">
          <div className="row">
            <div className="col-m">
              <div className="box-items-studies container mt-5">
                <div className="boxes-school-infos ">
                  <div className="main-box-ico42 text-center">
                    <div className="d-flex justify-content-center">
                      <div className="img-42 rounded-circle"></div>
                    </div>
                    <button onClick={handleClick42} className="about btn btn-primary mt-2">About</button>
                  </div>
                  <div className="about42 about-text text-center"></div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="box-items-studies container mt-5">
                <div className="boxes-school-infos ">
                  <div className="main-box-ico42 text-center">
                    <div className="d-flex justify-content-center">
                      <div className="img-thp rounded-circle"></div>
                    </div>
                    <button onClick={handleClickThp} className="about btn btn-primary mt-2">About</button>
                  </div>
                  <div className="aboutthp about-text text-center"></div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="box-items-studies container mt-5">
                <div className="boxes-school-infos ">
                  <div className="main-box-ico42 text-center">
                    <div className="sub-main-icob7 d-flex justify-content-center bg-dark">
                      <div className="img-b7-web rounded-circle"></div>
                    </div>
                    <button onClick={handleClickB7web} className="about btn btn-primary mt-2">About</button>
                  </div>
                  <div className="aboutB7web about-text text-center"></div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="box-items-studies container mt-5">
                <div className="boxes-school-infos ">
                  <div className="main-box-ico42 text-center">
                    <div className="d-flex justify-content-center">
                      <div className="img-curso-em-video rounded-circle"></div>
                    </div>
                    <button onClick={handleClickCvideo} className="about btn btn-primary mt-2">About</button>
                  </div>
                  <div className="aboutCvideo about-text text-center"></div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="box-items-studies container mt-5">
                <div className="boxes-school-infos ">
                  <div className="main-box-ico42 text-center">
                    <div className="sub-main-icob7 d-flex justify-content-center bg-dark">
                      <div className="img-3wschool rounded-circle"></div>
                    </div>
                    <button onClick={handleClick3Wsc} className="about btn btn-primary mt-2">About</button>
                  </div>
                  <div className="about3Wsc about-text text-center"></div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="box-items-studies container mt-5">
                <div className="boxes-school-infos ">
                  <div className="main-box-ico42 text-center">
                    <div className="d-flex justify-content-center">
                      <div className="img-openclassroom rounded-circle"></div>
                    </div>
                    <button onClick={handleClickOpenC} className="about btn btn-primary mt-2">About</button>
                  </div>
                  <div className="aboutOpenC about-text text-center"></div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="box-items-studies container mt-5">
                <div className="boxes-school-infos ">
                  <div className="main-box-ico42 text-center">
                    <div className="d-flex justify-content-center">
                      <div className="img-teacher rounded-circle"></div>
                    </div>
                    <button onClick={handleClickTeacher} className="about btn btn-primary mt-2">About</button>
                  </div>
                  <div className="aboutTeacher about-text text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-languages-explanation">
          <div>
            <div className="top-icos-code-languages">
              <ul className=" d-flex">
                <li className="html"></li>
                <li className="css"></li>
                <li className="bootstrap"></li>
                <li className="js"></li>
                <li className="git"></li>
                <li className="reactjs"></li>
              </ul>
            </div>
          </div>
          <div className="container d-flex justify-content-center">
            <div className="col-6 row">
              <div className="col-12 p-3">
                <div className="main-text-about-icos">
                  <div className="p-3">
                    <h2 className="text-primary">HEADING</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae </p>
                  </div>
                  <div className="p-3">
                    <h2 className="text-primary">HEADING</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae </p>
                  </div>
                  <nav aria-label="..." className="d-flex justify-content-center">
                    <ul class="pagination pagination-sm">
                      <li class="page-item active" aria-current="page">
                        <Link class="page-link" to="">1</Link>
                      </li>
                      <li class="page-item"><Link class="page-link" to="" >2</Link></li>
                      <li class="page-item"><Link class="page-link" to="" >3</Link></li>
                    </ul>
                  </nav>
                </div>
                
              </div>
            </div>
            <div className="col-6 row">
              <div className="col-12 p-3">
                <div className="main-box-img-about-icos">
                  <div className="main-img-box-content m-3">
                      <div className="img-box-content"></div>
                      <div className="d-flex justify-content-center mt-5">
                        <nav aria-label="...">
                          <ul class="pagination pagination-sm">
                            <li class="page-item active" aria-current="page">
                              <Link class="page-link" to="">1</Link>
                            </li>
                            <li class="page-item"><Link class="page-link" to="" >2</Link></li>
                            <li class="page-item"><Link class="page-link" to="">3</Link></li>
                            <li class="page-item"><Link class="page-link" to="">4</Link></li>
                            <li class="page-item"><Link class="page-link" to="">5</Link></li>
                            <li class="page-item"><Link class="page-link" to="">6</Link></li>
                          </ul>
                        </nav>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
       
      </div>

    </>
    
  );
}

export default Studies;