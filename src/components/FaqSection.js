import React from 'react';
import styled from 'styled-components';

import {About} from '../styled'

const FaqSection =()=>{
    return (
        <Faq>
            <h2>Any questions<span>FAQ</span></h2>
            <div className="question">
                <h4>How do I start</h4>
                <div className="answer">
                    <p>
                        Lorem 
                        ipsum dolor 
                        sit 
                        amet.
                    </p>
                    <p>
                        Lorem ipsum dolor sit
                        amet consectetur 
                        adipisicing elit.
                        Blanditiis
                    </p>
                </div>
                <div className="faq-line"></div>  
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit
                        amet consectetur 
                        adipisicing elit.
                        Blanditiis, at? 
                
                    </p>
                </div>
                <div className="faq-line"></div>

            </div>
            <div className="question">
                <h4>Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit
                        amet consectetur 
                        adipisicing elit.
                        Blanditiis, at? 
                     
                    </p>
                </div>
                <div className="faq-line"></div>

            </div>
            <div className="question">
                <h4>What products do you offer</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit
                        amet consectetur 
                        Blanditiis, at? 
                    </p>
                </div>
            </div>
        </Faq>
    )
}
const Faq = styled(About)`
  display: block;
  
  span
  {
    display: block;
    color: #23d997;
  }

  h2
  {
    font-weight: lighter;
    padding-bottom: 4rem;
  }

  h4
  {
      font-weight: bold;
      font-size: 2rem;
  }

  .faq-line 
  {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .answer 
  {
    padding: 2rem 0rem;
        p 
        {
        padding: 1rem 0rem;
        }
  }
`;

export default FaqSection;