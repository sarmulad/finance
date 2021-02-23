import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetail from '@material-ui/core/AccordionDetails'
import { Typography } from '@material-ui/core'

function Accordions() {
    return (
        
            <Accordion  style={{marginTop:'10px', boxShadow:'none',backgroundColor:'#dee1e9',}}>
                <AccordionSummary style={{width:'100% '}}>
                   <Typography variant='subtitle1'>Why do we need details?</Typography> 
                </AccordionSummary>
                <AccordionDetail>
                    <Typography variant='body1'> Advisors will use this information to help evaluate your current financial plan or,
                    if you don't have one, help you create one
                    </Typography> 
                </AccordionDetail>
            </Accordion>
       
    )
}

export default Accordions
