import React from 'react'
import Styles from '../Styles/Proficiencies.module.css'
import Github from './Github';


class Proficiencies extends React.Component{
    render(){
        return (

            <div className= "my-5 container-fluid">   

                <div className={`mb-5 ${Styles.heading}`} >
                    Proficiencies
                </div>
               
                <div className={`row justify-content-center ${Styles.proficiencies}`}>

                    <div className='col-sm-12 col-md-5 col-lg-2'>
                        <img src="frontend.png" alt="img"></img>
                        <div>Frontend</div>
                    </div>

                    <div className='col-sm-12 col-md-5 col-lg-2'>
                        <img src="backend.jfif" alt="img"></img>
                        <div>Backend</div>
                    </div>

                    <div className='col-sm-12 col-md-5 col-lg-2'>
                        <img src="mongodb.jfif" alt="img"></img>
                        <div>Database</div>
                    </div>

                    <div className='col-sm-12 col-md-5 col-lg-2'>
                        <img src="dsalgo.png" alt="img"></img>
                        <div>Data Structures & Algorithms</div>
                    </div>

                </div>
                <div className="py-5">
                <div className={`mb-2 ${Styles.heading}`} >
                    {/* Github Contribution */}
                </div>
                   
                </div>
                {/* <Github/> */}
            </div>
        )
    }
}

export default Proficiencies