import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = ()=>{
    return(
        <StyledNav>
            <h1><Link id="Logo" to="/">Capture</Link></h1>
                <ul>
                    <li>
                        <Link to="/">1. About Us</Link>
                    </li>
                    <li>
                        <Link to="/work"> 2. Our work</Link>
                    </li>
                    <li>
                        <Link to="/contact">3. Contact Us</Link>
                    </li>
                </ul>
       
        </StyledNav>
    )
}
const StyledNav = styled.nav`
    min-height: 10vh; 
    display:flex;
    margin:auto;
    justify-content:space-between;
    align-items:center;
    padding:1rem 10rem;
    background-color:#282828;
    position: sticky;
    top:0;
    z-index:10;

    a{
        color:white;
        text-decoration:none;
    }
    ul{
        display:flex;
        list-style:none;
    }
    #Logo{
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight:lighter;
    }
    li{
        padding-left:10rem;
        position:relative;

    }
    @media(max-width:1300px){
        #Logo{
            padding:2rem;
        }
       flex-direction:column;
       padding:2rem 0rem;
       ul{
           padding:2rem;
           justify-content:space-around;
           width:100%;
       }
       li{
           padding:0;
       }
    }

`


export default Nav; 