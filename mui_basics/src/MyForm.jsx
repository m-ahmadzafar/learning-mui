import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

const MyForm = () => {
  return (
    <>
      <Typography variant='h2'>
        MUI FORM
      </Typography>
      <form>
        <TextField
          label="Name" 
          variant='outlined'
          required
          sx={{ marginRight: 5 }}
        />

        <TextField
          label="Fathers Name"
          variant='filled'
          sx={{ marginRight: 5 }}
        />

        <TextField
          label="Mother's Name"
          variant='standard'
          sx={{ marginRight: 5 }}
        />
        
        <TextField
          label="Age"
          type='number'
          variant='standard'
          sx={{ marginRight: 5 }}
        />

        <br />

        <FormControl>
          <RadioGroup>
            <FormControlLabel control={<Radio />} label="work" value="work" />
            <FormControlLabel control={<Radio />} label="todos" value="todos" />
            <FormControlLabel control={<Radio />} label="money" value="money" />
            <FormControlLabel control={<Radio />} label="reminders" value="reminders" />
          </RadioGroup>
        </FormControl>
        
        <Button
          type='submit'
          variant='contained'
          sx={{ marginTop: 5 }}
        >
          Submit
        </Button>
      </form>   
    </>
  );
}

export default MyForm;
