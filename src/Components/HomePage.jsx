import React from 'react'
import Styles from '../Styles/HomePage.module.css'
import { MdLocationOn, MdCall, MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom'


class HomePage extends React.Component {
    render() {
        return (
            <>
                <div style={{ backgroundColor: "#154360", paddingTop: "9px" }}>
                    <div className={`my-3 position-relative ${Styles.profile_container}`}>
                        <img src="resume.jpeg" alt="profile"></img>
                    </div>

                    <div className={Styles.name}>
                        Pooja Yadav
                </div>

                    <div className={Styles.profession}>
                        Full Stack Developer
                </div>
                    <br></br>

                    <div>
                        <Link to={{ pathname: "https://www.linkedin.com/in/pooja-yadav-b939033a/" }} target="_blank">
                            <img src="linkedin.png" className="mx-4" alt="logo" width="40px"></img>
                        </Link>
                        <Link to={{ pathname: "https://twitter.com/pooja_yadav111" }} target="_blank">
                            <img src="twitter.png" className="mx-4" alt="logo" width="40px"></img>
                        </Link>
                        <Link to={{ pathname: "https://github.com/pooja171195" }} target="_blank">
                            <img src="github.svg" className="mx-4" alt="logo" width="40px"></img>
                        </Link>
                    </div>


                    <div className={`row m-4 ${Styles.details}`}>
                        <div className="col-sm-12 col-lg-4">
                            <MdLocationOn size="40px" color="whitsmoke" />
                            <br></br>
                       New Delhi, India
                    </div>

                        <div className="col-sm-12 col-lg-4">
                            <MdCall size="40px" />
                            <br></br>
                      +91 7982817876
                    </div>

                        <div className="col-sm-12 col-lg-4">
                            <MdEmail size="40px" />
                            <br></br>
                       poojayadav190618@gmail.com
                    </div>
                    </div>

                    <div className={`mb-5 px-5 ${Styles.details}`}>
                        Aspiring Full Stack Developer with hands-on training on Data Structure and Algorithms.
                        Proactive and detailed oriented professional, with the ability to work in collaboration
                        with other developers in remote set-up.
                    <br />
                        <br />
                        <button >
                            <i><Link className={Styles.resume} to={{ pathname: "https://drive.google.com/file/d/1J4BUF83zRwOEn4V-uhG6fsqu-uBaZvLp/view?usp=sharing" }} target="_blank">Resume</Link></i>
                        </button>
                    </div>
                    <h1 style={{ textAlign: "center" }}>Tech Stack</h1>
                    <div className={`container ${Styles.skills}`}>
                        <div className="mx-2 mx-lg-5 my-3">
                            <img src="html-5.svg" alt="logo"></img>
                            <p>HTML</p>
                        </div>
                        <div className="mx-2 mx-lg-5 my-3">
                            <img src="css.svg" alt="logo"></img>
                            <p>CSS</p>
                        </div>
                        <div className="mx-2 mx-lg-5 my-3">
                            <img src="js.svg" alt="logo"></img>
                            <p>JavaScript</p>
                        </div>
                        <div className="mx-2 mx-lg-5 my-3">
                            <img src="react.svg" alt="logo"></img>
                            <p>Reactjs</p>
                        </div>
                        <div className="mx-2 mx-lg-5 my-3">
                            <img src="redux.svg" alt="logo"></img>
                            <p>Redux</p>
                        </div>
                        <div className="mx-2 mx-lg-5 my-3">
                            <img src="bootstrap.svg" alt="logo"></img>
                            <p>Bootstrap</p>
                        </div>
                        <div className="mx-2 mx-lg-5 my-3">
                            <img src="express.png" alt="logo"></img>
                            <p>Express</p>
                        </div>
                        <div className="mx-2 mx-lg-5 my-3">
                            <img src="mongo.png" alt="logo"></img>
                            <p>MongoDB</p>
                        </div>
                        <div className="mx-2 mx-lg-5 my-3">
                            <img src="github.svg" alt="logo"></img>
                            <p>GIT</p>
                        </div>
                        <div className="mx-2 mx-lg-5 my-3">
                            <img src="material.png" alt="logo"></img>
                            <p>MaterialUI</p>
                        </div>

                    </div>
                    
                

                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </>
        )
    }
}

export default HomePage