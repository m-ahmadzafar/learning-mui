import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MyForm = () => {
    return (<>

    <Typography
    variant='h2'
    >
        MUI FORM
    </Typography>
    <form>
    <TextField
    label="Name" 
    variant='outlined'
    required
    sx={{
        marginRight: 5 
    }}/>

    <TextField
    label="Fathers Name"
    variant='filled'
    sx={{
        marginRight: 5 
    }}/>

    <TextField
    label="Mother's Name"
    variant='standard'
    sx={{
        marginRight: 5 
    }}/>
    <TextField
    label="Age"
    type='number'
    variant='standard'
    sx={{
        marginRight: 5 
    }}/>

    <br />
    <Button
    type='submit'
    variant='contained'
    sx={{
        marginTop: 5
    }}>
    Submit
    </Button>
    
    </form>   
    </>  );
}
 
export default MyForm;