import React from 'react'
import styled from 'styled-components'
import logo from '../../images/logo.svg'
import home_icon from "../../images/home-icon-cropped.svg"
import search_icon from "../../images/search-icon.svg"
import watchlist_icon from "../../images/watchlist-icon.svg"
import original_icon from "../../images/original-icon.svg"
import movie_icon from "../../images/movie-icon.svg"
import series_icon from "../../images/series-icon.svg"
import "./navbar.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import LoginContext from '../../context/login/LoginContext'
import { auth, provider } from '../../firebse'


const imgstyle = {
    height: "14px",
    width: "24px",
    marginRight: "1px"

}



function Navbar() {


    const loggedIn = useContext(LoginContext);

    const signIn=()=>{
        auth.signInWithPopup(provider).then((result)=>{
            

            const userDetails=result.additionalUserInfo.profile;
            loggedIn.setLoginState(userDetails.name, userDetails.email, userDetails.picture );
        });
    }

    const signOut=()=>{
        auth.signOut(provider).then(()=>{
            loggedIn.setLogoutState();
        })
    }

    


    return (

        <Container>

            <div>
                <Link to="/membership">
                    <Logo src={logo} />
                </Link>
                
            </div>

            {
                !loggedIn.userState.email && (

                    <LoginButton onClick={signIn}>SIGN IN</LoginButton>
                )
            }


            {loggedIn.userState.email && (
                <>
                    {console.log(loggedIn.userState)}
                    <div style={{ flex: "max-content", padding: '0 36px', display: "flex", alignContent: "center", justifyContent: "center", fontSize: "14px" }}>
                        <Icon>

                            <img src={home_icon} alt="" style={imgstyle} />
                            <Link to="/" className='navLinkStyle'>HOME</Link>


                        </Icon>

                        <Icon>
                            <img src={search_icon} alt="" style={imgstyle} />
                            <Link to="/search" className='navLinkStyle'>SEARCH</Link>
                        </Icon>

                        <Icon>
                            <img src={watchlist_icon} alt="" style={imgstyle} />
                            <Link to="/watchlist" className='navLinkStyle'>WATCHLIST</Link>
                        </Icon>

                        <Icon>
                            <img src={original_icon} alt="" style={imgstyle} />
                            <Link to="/original" className='navLinkStyle'>ORIGINAL</Link>
                        </Icon>

                        <Icon>
                            <img src={movie_icon} alt="" style={imgstyle} />
                            <Link to="/movie" className='navLinkStyle'>MOVIE</Link>
                        </Icon>

                        <Icon>
                            <img src={series_icon} alt="" style={imgstyle} />
                            <Link to="/series" className='navLinkStyle'>SERIES</Link>
                        </Icon>


                    </div>


                    <Profile onClick={signOut} src={loggedIn.userState.photo} referrerpolicy="no-referrer" />
                    
                </>
            )}


        </Container>
    )
}

const Logo = styled.img`
padding-left: 20px;
width: 100px;
`;


const LoginButton = styled.button`
    background: transparent;
    color: white;
    border: solid #f9f9f9 1px;
    border-radius: 4px ;
    letter-spacing: 1.5px;
    margin-right: 20px;
    padding: 8px 16px;
    font-size: medium;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: black;
    };
`

const Profile = styled.img`
    padding: 0 20px;
    border-radius: 50%;
    height: 41px;
    cursor: pointer;
`;

const Icon = styled.li`

    list-style:none;
    padding: 0 15px;
    
`;

const Container = styled.div`
height: 70px;
min-width: 100%;
color: white;
background-color: #090b13;
display: flex;
flex-shrink: 0;
align-items:center;
justify-content: space-between;
overflow-x: hidden;
`;

export default Navbar