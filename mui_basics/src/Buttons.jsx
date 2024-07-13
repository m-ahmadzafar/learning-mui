import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';

const Buttons = () => {

    const sec = "secondary";
    
    
    return ( <>
    
    <Button type="submit">
        Submit
    </Button>

    <Button
    variant='contained'
    color='error'
    disableElevation
    onClick={()=>{
        console.log("sui");
    }}
    >
        Contained
    </Button>
    <Button
    color="secondary"
    size="small"
    >
        Womp Womp
    </Button>
    <Button
    color="primary"
    size="small"
    variant='outlined'
    >
        Womp 2
    </Button>

    <br />
    <p>Buttons with icon</p>
    <Button>
        <DeleteIcon/>
    </Button>
    <Button
    color='primary'
    variant='contained'
    endIcon={<DeleteIcon/>}> 
        Delete
    </Button>

    

    </> );
}
 



export default Buttons;