import Typography from '@mui/material/Typography';
import HeroBlock from './HeroBlock';
import {Link} from 'react-router-dom';


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

<Typography variant="h5"
sx={{
  bgcolor: 'pink',
  textAlign: 'center',
  width: 150
}}>
  <p>Page Links</p>
  <Link to="/button">button </Link> <br />
  <Link to="/custom">custom </Link> <br />
  <Link to="/card">card </Link> <br />
  <Link to="/create">create </Link> <br />
  <Link to="/form">form</Link> <br />
</Typography>
 
    </div>  );
}
 
export default Notes;