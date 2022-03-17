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
                        <img src="thehindu.png" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">The Hindu Clone</h5>
                            <p className="card-text">A news reading website by various categories.  User can login/logout, search various news, bookmark favorite news articles</p>
                            <div className="mt-auto">
                            <a href="https://the-hindu-1w79mgmmr-ashishbhagat123.vercel.app/" target="_blank" className="btn btn-success btn-block ">Demo Link</a>
                            <a href="https://github.com/Jammy12345/Team-Butane-THE-HINDU" target="_blank" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                    </div>

                <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3" style = {{backgroundColor : "#D6DBDF", color: "black"}} >
                        <img src="kickstarter.png" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Kickstarter Clone</h5>
                            <p className="card-text">A global crowdfunding platform focused on creativity. User can authenticate, browse various articles and back their ideas for funding</p>
                            <div className="mt-auto">
                            <a href="https://kickstarter-clone.netlify.app/" target="_blank" className="btn btn-success btn-block ">Demo Link</a>
                            <a href="https://github.com/pranaykumar999/Kickstarter-Clone" target="_blank" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                </div>


                <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3" style = {{backgroundColor : "#D6DBDF", color: "black"}}>
                        <img src="nykaa.png" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Nykaa Clone</h5>
                            <p className="card-text">A  online shopping beauty store to buy various products. User can authenticate, search various beauty product by category, add product to their
bag
</p>
                            <div className="mt-auto">
                            {/* <a href="https://github.com/divy25/lithiumProject" target="_blank" className="btn btn-success btn-block ">Demo Link</a> */}
                            <a href="https://github.com/divy25/lithiumProject" target="_blank" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                </div>        
                </div>

                <div className="row justify-content-center"> 

                <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3"style = {{backgroundColor : "#D6DBDF", color: "black"}} >
                        <img src="todo.png" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Todiost Clone</h5>
                            <p className="card-text">Todoist an app that helps millions of people organize work and life now has grown from a personal side project to a market-leading Swiss Army Knife of life organization. </p>
                            <div className="mt-auto">
                            {/* <a href="https://github.com/mishravibhav/Team-Quadilateral" target="_blank" className="btn btn-success btn-block ">Demo Link</a> */}
                            <a href="https://github.com/mishravibhav/Team-Quadilateral" target="_blank" className="btn btn-outline-dark btn-block ">Github Link</a>
                            </div>
                        </div>
                    </div> 

                <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3" style = {{backgroundColor : "#D6DBDF", color: "black"}}>
                        <img src="currency.png" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Currency Converter</h5>
                            <p className="card-text">In this we can enter amount which we want to convert, by selecting the currency from which to be coverted to the desired currency.</p>
                            <div className="mt-auto">
                            <a href="https://jammy12345.github.io/CURRENCY-CONVERTER/" target="_blank" className="btn btn-success btn-block ">Demo Link</a>
                            <a href="https://github.com/Jammy12345/Masai-Sprint-3" target="_blank" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                    </div> 

                    <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3"style = {{backgroundColor : "#D6DBDF", color: "black"}} >
                        <img src="mpl.png" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">MPL LIVE</h5>
                            <p className="card-text">This is static MPL Live website. Develop using HTML and CSS only. It has various dynamic and responsive pages of that website.</p>
                            <div className="mt-auto">
                            <a href="https://jammy12345.github.io/MPL-LIVE-CLONE/" target="_blank" className="btn btn-success btn-block ">Demo Link</a>
                            <a href="https://github.com/Jammy12345/module_2_project" target="_blank" className="btn btn-outline-dark btn-block ">Github link</a>
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