import * as React from 'react';
import { ReactComponent as Logo } from './icons/logo.svg';
import { ReactComponent as Desinged } from './icons/Designed.svg';
import { ReactComponent as Druid } from './icons/druid.svg';
import { ReactComponent as Axes } from './icons/axes.svg';
import { ReactComponent as Book } from './icons/book.svg'
  ;
import { OrbitProgress } from "react-loading-indicators";
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { beasts } from './constants';
import Flex from '@react-css/flex'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

import './App.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const monstersList = (open, setOpen) => {

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <Flex flexDirection='column' rowGap={16} className='Monster-list'>
      {beasts.map(beast => multiActionAreaCard(beast.name, beast.stats, beast.weapons, handleClickOpen))}

      <BootstrapDialog
        onClose={handleClickOpen}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClickOpen}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClickOpen}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
      <Flex className='Watermark'>
        <Desinged width='150px' height='24px' />
      </Flex>

    </Flex>
  )

}

const multiActionAreaCard = (header, body, weapon, handleClickOpen) => {
  return (
    <Card key={header}>
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
        <Button size="small" color="primary" onClick={handleClickOpen}>
          Поведение
        </Button>
      </CardActions>
    </Card>
  );
}

const randomizer = () => {
  return (
    <Flex flexDirection='column' className="App">
      <Flex flexDirection='column' className="App-header">
        <Logo width='50%' height='50%' />
        <p>Тьма надвигается!</p>
        <OrbitProgress variant="disc" color="#ffffff" size="medium" speedPlus="-5" text="" textColor="" />
      </Flex>
      <Flex className='Watermark'>
        <Desinged width='150px' height='24px' />
      </Flex>
    </Flex>
  );
}

const getContent = (activeKey, open, setOpen) => {
  switch (activeKey) {
    case 0:
      return monstersList(open, setOpen);
    case 1:
      return randomizer();
    default:
      return randomizer(open, setOpen);
  }
}



function App() {
  const [value, setValue] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  return (
    <Flex flexDirection='column' className="App">

      <Flex height='calc(100vh-56px)'>
        {getContent(value, open, setOpen)}
      </Flex>
      <Flex className='Footer'>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              console.log("🚀 ~ App ~ newValue:", newValue)
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Берестиарий" color='#000000' icon={<Druid />} />
            <BottomNavigationAction label="Во тьму" color='#000000' icon={<Axes />} />
            <BottomNavigationAction label="Библиотека" color='#000000' icon={<Book />} />
          </BottomNavigation>
        </Paper>
      </Flex>
    </Flex>
  );
}

export default App;