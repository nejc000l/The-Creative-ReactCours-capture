import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import money from '../img/money.svg';
import home2 from '../img/home2.png';

const ServicesSection =()=>{
    return(
       <div className="services">
           <div className="description">
               <h2>High <span>Quality</span>services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Efficent</h3>
                        </div>
                        <p>Lorem ipsum dolor sit
                         amet consectetur adipisicing elit. 
                         Enim illo autem accusamus obcaecati 
                         pora unde animi tempore labore, 
                         minima eveniet odit, vel ratione repudiandae 
                         culpa! Repellendus odio labore ipsum debitis?</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit
                         amet consectetur adipisicing elit. 
                         Enim illo autem accusamus obcaecati 
                         pora unde animi tempore labore, 
                         minima eveniet odit, vel ratione repudiandae 
                         culpa! Repellendus odio labore ipsum debitis?</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit
                         amet consectetur adipisicing elit. 
                         Enim illo autem accusamus obcaecati 
                         pora unde animi tempore labore, 
                         minima eveniet odit, vel ratione repudiandae 
                         culpa! Repellendus odio labore ipsum debitis?</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit
                         amet consectetur adipisicing elit. 
                         Enim illo autem accusamus obcaecati 
                         pora unde animi tempore labore, 
                         minima eveniet odit, vel ratione repudiandae 
                         culpa! Repellendus odio labore ipsum debitis?</p>
                    </div>
                </div>
           </div>
           <div className="image">
               <img src={home2} alt=""/>
           </div>
       </div> 
    )
}

export default ServicesSection;


