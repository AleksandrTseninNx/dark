import * as React from 'react';
import { ReactComponent as Logo } from './icons/logo.svg';
import { ReactComponent as Desinged } from './icons/Designed.svg';
import { ReactComponent as Druid } from './icons/druid.svg';
import { ReactComponent as Axes } from './icons/axes.svg';
import { ReactComponent as AxesWhite } from './icons/axesWhite.svg';
import { ReactComponent as Book } from './icons/book.svg'
  ;
import { OrbitProgress } from "react-loading-indicators";
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { beasts, beastsBehavior } from './constants';
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

import AddIcon from '@mui/icons-material/Add';

import './App.css';
import { Input } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const monstersList = (open, setOpen, behavior, setBehavior) => {

  const handleClickOpen = (beastCode) => {
    setBehavior(beastsBehavior.find(({ code }) => code === beastCode));
    setOpen(!open);
  };

  return (
    <Flex flexDirection='column' rowGap={16} className='Monster-list'>
      {beasts.map(beast => multiActionAreaCard(beast.code, beast.name, beast.stats, beast.weapons, handleClickOpen))}

      <BootstrapDialog
        onClose={handleClickOpen}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Поведение
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
        {behavior && <DialogContent dividers>
          {behavior.inBattle && <Typography gutterBottom sx={{ whiteSpace: 'pre-line' }}>
            В бою:
            {behavior.inBattle}
          </Typography>}
          {behavior.outBattle && <Typography gutterBottom sx={{ whiteSpace: 'pre-line' }}>
            Не в бою:
            {behavior.outBattle}
          </Typography>}
          {behavior.defaultBehavior && <Typography gutterBottom sx={{ whiteSpace: 'pre-line' }}>
            {behavior.defaultBehavior}
          </Typography>}
        </DialogContent>}
        <DialogActions>
          <Button autoFocus onClick={handleClickOpen}>
            OK
          </Button>
        </DialogActions>
      </BootstrapDialog>

    </Flex>
  )

}

const multiActionAreaCard = (beastCode, header, body, weapon, handleClickOpen) => {
  return (
    <Card key={beastCode}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {header}
          </Typography>
          <Typography variant="body2" component="div" sx={{ color: 'text.secondary' }}>
            {body}
          </Typography>
          <Typography variant="body2" component="div" sx={{ color: 'text.secondary' }}>
            {weapon}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleClickOpen(beastCode)}>
          Поведение
        </Button>
      </CardActions>
    </Card>
  );
}

const randomizer = () => {
  return (
      <Flex flexDirection='column'>
        <Flex>
          <Typography gutterBottom variant="h5" component="flex">Раунд 1</Typography>
          {/*         <OrbitProgress variant="disc" color="#ffffff" size="medium" speedPlus="-5" text="" textColor="" /> */}
        </Flex>

        <Flex flexDirection='column' rowGap={24}>
          <Typography gutterBottom variant="h5" component="div">Сбор команд</Typography>
          <Flex flexDirection='row' columnGap={16} justifyContent='space-between'>
            <Input placeholder='Чьих будете' />
            <Input placeholder='Сколько вас' />
            <IconButton><AddIcon /></IconButton>
          </Flex>
          <Typography gutterBottom variant="h5" component="div">Сейчас в мешке 0</Typography>

          <Typography gutterBottom variant="h5" component="div">Сейчас во тьму отправляется</Typography>

          <Flex className='Button'><AxesWhite height={140} width={140} /></Flex>

          {/*         <OrbitProgress variant="disc" color="#ffffff" size="medium" speedPlus="-5" text="" textColor="" /> */}
        </Flex>
      </Flex>
  );
}

const getContent = (activeKey, open, setOpen, behavior, setBehavior) => {
  switch (activeKey) {
    case 0:
      return monstersList(open, setOpen, behavior, setBehavior);
    case 1:
      return randomizer();
    default:
      return randomizer(open, setOpen, behavior, setBehavior);
  }
}



function App() {
  const [value, setValue] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [behavior, setBehavior] = React.useState({});

  return (
    <Flex className='Wrapper'>
      <Flex className='BodyWrapper'>
        {getContent(value, open, setOpen, behavior, setBehavior)}
        </Flex> 
      <Flex className='FooterWrapper'>
        <Paper sx={{ position: 'fixed', bottom: 24, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Берестиарий" color='#000000' icon={<Druid />} />
            <BottomNavigationAction label="Во тьму" color='#000000' icon={<Axes />} />
            <BottomNavigationAction label="Библиотека" color='#000000' icon={<Book />} />
          </BottomNavigation>
        </Paper> 
      </Flex>
      <Flex position='fixed' className='WatermarkWrapper'>
        <Desinged width='150px' height='24px' />
      </Flex>
    </Flex>
  );
}

export default App;