import { Button, Divider, InputAdornment, TextField } from '@material-ui/core';
import { Keyboard, VideoCallOutlined } from '@material-ui/icons';
import React from 'react'
import "./styles.css"; 


const Hero= () => {
  return (
    <div className='hero'>
        <div className="hero__left">

        

          <div className="hero__featureText">
              <h1 className='hero__title'>
                Premium video meetings
              </h1>
              <h1 className='heroo__title'>Now free for everyone</h1>
              <p className='hero__subtitle'>
                We re-engineered the service we built for secure buisness meetings,
                Google Meet, to make sure it free and available for all

              </p>

              <div className='hero__buttons'>
                <Button color = "primary"  variant="contained" className='hero__createBTN'>
                  <VideoCallOutlined/>
                  <p>New Meeting</p>

                </Button>

                <TextField className='hero__input' variant='outlined' placeholder='Enter a code or a link'
                InputProps={{
                  startAdornment:(
                    <InputAdornment position= "start">
                      <Keyboard classname = "icon" />
                    </InputAdornment>


                  ),

                }}/>
              <Button className='hero__joinBTN'>Join</Button>
            </div>
          <Divider/>
          <p className='hero__learnMore'> <span className='hero__lm'>Learn more</span> about Google Meet</p>
          
          
           
        </div>
      </div>

      <div class="hero__right">
      <img src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg" alt=""/>
        
          

      </div>
        

       
        

    </div>
  )
}

export default Hero;