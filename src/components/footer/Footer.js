import React from 'react'
import { Grid} from "@material-ui/core"

import './footer.css'
function Footer() {
    return (
        <footer className='footer'>
            <div className='getInTouch'>
           
                <a href='#'>contact</a>
                <a href='#'>careers</a>
                <a href='#'>unsubscribe</a>

            </div>
            <div className='smart'>
                <a href='#'>About</a>
                <a href='#'>smartreads</a>
                <a href='#'>captivate</a>
                

            </div>
            <div className='social'>
            <a href='#'>facebook</a>
            <a href='#'>twitter</a>
            <a href='#'>google</a>

        </div>
          <div className='legal'>
                <a href='#'>Terms of service</a>
                <a href='#'>privacy policy</a>
                <a href='#'>Adchoices</a>
                


            </div>
        </footer>
    )
}

export default Footer
