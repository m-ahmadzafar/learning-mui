import { Card, CardContent, Typography } from '@mui/material';

function GradientCard() {
  return (
    <Card
      sx={{
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        color: 'white',
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          Gradient Card
        </Typography>
        <Typography variant="body2">
          This card has a gradient background.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default GradientCard;
