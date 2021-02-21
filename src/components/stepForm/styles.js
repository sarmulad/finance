import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(()=>({
    form: {
       marginTop:'100px',
       maxWidth:'100vw',
       overflowX:'hidden',
       
    
    },
    title:{
        padding:'10px 0px',
        textAlign:'center',
        backgroundColor:'#00a86b',
        color:'white'
    },
    btn:{
        backgroundColor:'#00a86b',
        color:'white'
    },
    formControl:{
        border:'1px solid #dee1e9',
         marginTop:'5px',
          borderRadius:'10px'
    }
}))