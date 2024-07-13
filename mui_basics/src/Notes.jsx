import Typography from '@mui/material/Typography';
import HeroBlock from './HeroBlock';


const Notes = () => {
    return (<div>
        {/* <HeroBlock/> */}
       <p>notes page</p>
       <Typography
        variant="h1"
        component="h2"
        color="primary" >
  h1. Heading
</Typography>
<Typography
        variant="h1"
        component="p"
        color="secondary" >
  h2 Heading 
</Typography>
 
    </div>  );
}
 
export default Notes;