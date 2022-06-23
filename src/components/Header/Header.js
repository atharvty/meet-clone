import { Avatar, Badge, Button, makeStyles, Popover } from '@material-ui/core';
import { Apps, CameraAltOutlined, FeedbackOutlined, HelpOutline, PersonOutlined, Settings } from '@material-ui/icons';
import React, { useState } from "react";
import './style.css';



const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

const Header = () => {

    const [currentUser, setCurrentUser] = useState(null);
    const [appState, setAppState] = useState("empty");
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const classes = useStyles();
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    console.log(anchorEl);
  return (
    <div className='header'>
        <div class="header__logoContainer">
            <img src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png" alt="google"
            className='header__logo'/>

            <p>Meet</p>

        </div>


        <div class="header__icons">
            <h3>15:27 • Thu 23 Jun  </h3>
            <HelpOutline/>
            <FeedbackOutlined/>
            <Settings/>

            <div class="header__iconDivider">
                

            </div>
            <Apps/>
            <Avatar className='header__avatar' onClick={handleClick} />
            <Popover
          open={open}
          id={id}
          onClose={handleClose}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
          }}
        >
          <div className="home__popoverContainer">
            <div className="home__popover__top">
              <Badge
                overlap="circle"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <div className="home__badge">
                    <CameraAltOutlined className="home__camera" />
                  </div>
                }
              >
                <Avatar className={classes.large} />
              </Badge>

              <div className="home__text">
                <div className="home__displayName">
                  Atharv Tyagi
                </div>

                <div className="home__mail">atharvtyagi88@gmail.com</div>
              </div>

              <div className="home__btn">Manage your Google Account</div>
            </div>

            <div className="home__popover__btm">
              <div className="home__addBtn">
                <PersonOutlined className="home__addIcon" />
                <p>Add another account</p>
              </div>

              <Button
                
                variant="outlined"
                className="home__signOut"
              >
                Sign Out
              </Button>

              <div className="home__popover__footer">
                <p>Privacy policy</p>
                <span>•</span>
                <p>Terms of service</p>
              </div>
            </div>
          </div>
        </Popover>
            
           

        </div>
    </div>
  )
}

export default Header