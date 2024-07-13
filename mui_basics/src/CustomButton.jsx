import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = () => {
    return (
        <Button variant="contained" color="primary">
            Click Me
        </Button>
    );
}

export default CustomButton;



// import Button from '@mui/material/Button';
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//     btn: {
//         color: 'red',
//         fontSize: 36,
//     },
//     text: {
//         color: 'pink',
//         backgroundColor: 'purple'
//     }
// });

// const CustomButton = () => {
//     const classes = useStyles();

//     return (
//         <>
//             <Button className={classes.btn} variant="contained" color="primary">
//                 Click Me
//             </Button>
//             <Typography className={classes.text}>
//                 Hi Chad
//             </Typography>
//         </>
//     );
// }

// export default CustomButton;
