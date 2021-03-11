import React from 'react'
import { Grid} from "@material-ui/core"

import './footer.css'
function Footer() {
    return (
        <footer className='footer'>
            <div className='getInTouch'>
           
                <a href='#'>Contact us</a>

            </div>
            <div className='smart'>
                <a href='#'>About us</a>
            </div>
            <div className='privacy'>
            <a href='#'>Privacy policy</a>

           </div>
          <div className='legal'>
                <a href='#'>Terms and Conditions</a>
                
                


            </div>
        </footer>
    )
}

export default Footer
