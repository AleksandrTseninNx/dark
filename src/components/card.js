import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export const multiActionAreaCard = (header, body, weapon) => {
    return (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {header}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {body}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {weapon}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Поведение
          </Button>
        </CardActions>
      </Card>
    );
  }