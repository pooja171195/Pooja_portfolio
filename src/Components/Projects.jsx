import React from 'react'
import Styles from '../Styles/Projects.module.css'

class Projects extends React.Component{
    render() {
        return (
            <div className={Styles.main_container}>
                <h1 className ={Styles.heading}>Projects at Glance</h1>
                <br></br>
                <div className="container-fluid">
                <div className="row justify-content-center">

                <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3"style = {{backgroundColor : "#D6DBDF", color: "black"}} >
                        <img src="meesho.png" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Meesho Clone</h5>
                            <p className="card-text">Our project is regarding cloning meesho website, an online shopping store to buy various products.  User can login/logout, User authentication Product details & Purchase page</p>
                            <div className="mt-auto">
                            <a href="https://app.netlify.com/sites/tender-hoover-a53af4" target="_blank" className="btn btn-success btn-block ">Demo Link</a>
                            <a href="https://github.com/pooja171195/meeshoClone" target="_blank" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                    </div>

                <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3" style = {{backgroundColor : "#D6DBDF", color: "black"}} >
                        <img src="specs.png" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Specsmaker Clone</h5>
                            <p className="card-text">A web application to sell all types of spectacles and eye related accessories. Features: Sign-in/Sign-up Specs product detail page, purchase page & cart page User authentication and payment page</p>
                            <div className="mt-auto">
                            <a href="https://tender-hoover-a53af4.netlify.app/" target="_blank" className="btn btn-success btn-block ">Demo Link</a>
                            <a href="https://github.com/pooja171195/Specs-Makers-clone" target="_blank" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                </div>


                       

                </div>

                </div>  
            </div>
        )
    }
}
export default Projects