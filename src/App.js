import * as React from 'react';
import { ReactComponent as Desinged } from './icons/Designed.svg';
import { ReactComponent as Druid } from './icons/druid.svg';
import { ReactComponent as Axes } from './icons/axes.svg';
import { ReactComponent as AxesWhite } from './icons/axesWhite.svg';
import { ReactComponent as Book } from './icons/book.svg';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { armors, artifacts, beasts, beastsBehavior, magic, trauma, weapons } from './constants';
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
import DeleteIcon from '@mui/icons-material/Delete';

import './App.css';
import { Input } from '@mui/material';

import arrayShuffle from 'array-shuffle';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Modal from '@mui/material/Modal';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import Fab from '@mui/material/Fab';
import CasinoIcon from '@mui/icons-material/Casino';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import CancelIcon from '@mui/icons-material/Cancel';


function App() {
  const [value, setValue] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [openClearAllModal, setOpenClearAllModal] = React.useState(false);
  const [behavior, setBehavior] = React.useState({});
  const [bag, setBag] = React.useState([]);

  const [player, setPlayer] = React.useState('');
  const [playerToDark, setPlayerToDark] = React.useState('');
  const [playerCount, setPlayerCount] = React.useState(0);
  const [round, setRound] = React.useState(1);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    pt: 2,
    px: 2,
    pb: 2,
  };

  const handleClickOpen = (beastCode) => {
    setBehavior(beastsBehavior.find(({ code }) => code === beastCode));
    setOpen(!open);
  };
  const handleRoundsUp = () => {
    setRound(round + 1);
    setOpenModal(false);
  };

  const handleClearAll = () => {
    setBag([]);
    setPlayer('');
    setPlayerToDark('');
    setPlayerCount(0);
    setRound(1);
    setOpenClearAllModal(false);
  }

  const setInBag = () => {
    var i = 0;

    for (i = 0; i < playerCount; i++) {
      setBag(prevState => ([...prevState, player]))
    }
  }

  const clearBag = () => {
    setBag([]);
  }

  React.useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
  
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  //#region Renders
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const getChips = (code, name, ruletext) => {
    return (
      <Chip key={code} label={name} onClick={() => alert(ruletext)} />
    )
  }

  const multiActionAreaCard = (beastCode, header, body, weapon, rules, handleClickOpen) => {
    return (
      <Card key={beastCode}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {header}
            </Typography>
            <Typography variant="body2" component="div" sx={{ color: 'text.secondary', whiteSpace: 'pre-line' }}>
              {body}
            </Typography>
            <Typography variant="body2" component="div" sx={{ color: 'text.secondary', whiteSpace: 'pre-line' }}>
              {weapon}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" variant="outlined" color="default" onClick={() => handleClickOpen(beastCode)}>
            Поведение
          </Button>
          <Stack direction="row" spacing={1}>
            {rules.length > 0 && rules.map(rule => getChips(rule.code, rule.name, rule.ruleText))}
          </Stack>
        </CardActions>
      </Card>
    );
  }

  const monstersList = () => {
    return (
      <Flex flexDirection='column' rowGap={16} className='Monster-list'>


        {beasts.map(beast => multiActionAreaCard(beast.code, beast.name, beast.stats, beast.weapons, beast.rules, handleClickOpen))}

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

  const randomizer = () => {
    return (
      <Flex flexDirection='column' style={{ maxWidth: '450px', padding: '24px' }}>

        <Stack direction="column" spacing={1} sx={{ position: 'absolute', bottom: 112, left: 394, }}>
          <Fab aria-label="Add" color="default" onClick={() => {
            var rollDice = Math.floor(Math.random() * 6) + 1;
            alert('Результат броска: ' + rollDice);
          }}>
            <CasinoIcon />
          </Fab>

          <Fab aria-label="Add" color="default" onClick={() => {
            var rollDice1 = Math.floor(Math.random() * 6) + 1;
            var rollDice2 = Math.floor(Math.random() * 6) + 1;
            var nameTrauma = trauma.find(({ id }) => id === rollDice1 + rollDice2).name;

            alert('Вам повезло: ' + nameTrauma);
          }}>
            <BloodtypeIcon />
          </Fab>

          <Fab aria-label="Add" color="default" onClick={() => setOpenClearAllModal(true)}>
            <CancelIcon />
          </Fab>
        </Stack>

        <Modal
          open={openClearAllModal}
          onClose={() => setOpenClearAllModal(false)}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 300 }}>
            <h2 id="parent-modal-title">Сбросить все?</h2>
            <p id="parent-modal-description">
              Вы действительно хотите сбросить все счетчики и начать новую игру?
            </p>
            <Button onClick={handleClearAll}>Да</Button>
            <Button onClick={() => setOpenClearAllModal(false)}>Нет</Button>
          </Box>
        </Modal>

        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 300 }}>
            <h2 id="parent-modal-title">Обновить счетчик раундов?</h2>
            <p id="parent-modal-description">
              Вы действительно хотите поднять счетчик раундов на 1?
            </p>
            <Button onClick={handleRoundsUp}>Да</Button>
            <Button onClick={() => setOpenModal(false)}>Нет</Button>
          </Box>
        </Modal>

        <Flex>
          <Typography gutterBottom variant="h5" component="flex">Раунд {round}</Typography>
        </Flex>

        <Flex flexDirection='column' rowGap={24}>
          <Typography gutterBottom variant="h5" component="div">Сбор команд</Typography>
          <Flex flexDirection='row' columnGap={8} justifyContent='space-between'>
            <Input placeholder='Чьих будете' value={player} onChange={e => setPlayer(e.target.value)} />
            <Input style={{ width: '120px' }} placeholder='Сколько вас' type='number' value={playerCount} onChange={e => setPlayerCount(e.target.value)} />
            <Fab aria-label="Add" color="default" size='small' onClick={setInBag}><AddIcon /></Fab>
          </Flex>
          <Flex flexDirection='row' columnGap={16} justifyContent='space-between'>
            <Typography gutterBottom variant="h5" component="div">Сейчас в мешке {bag.length}</Typography>
            <Fab aria-label="Add" color="default" size='small' onClick={clearBag}><DeleteIcon /></Fab>
          </Flex>

          <Typography gutterBottom variant="h5" component="div">Сейчас во тьму отправляется {playerToDark}</Typography>

          <Flex className='Button' onClick={() => {
            setPlayerToDark('...');
            var array = [...bag]; // make a separate copy of the array

            if (array.length === 0) {
              setOpenModal(true);
              return;
            }

            var index = Math.floor(Math.random() * array.length);
            var currentPlayer = array[index];

            setTimeout(() => {
              setPlayerToDark(currentPlayer);
            }, 2000);

            array.splice(index, 1);
            setBag(arrayShuffle(array));

          }}><AxesWhite height={140} width={140} /></Flex>

        </Flex>
      </Flex>
    );
  }

  const [bioTab, setBioTab] = React.useState('0');

  const handleBioChange = (event, newValue) => {
    setBioTab(newValue);
  };

  const itemsList = (weaponCode, name, description, rules) => {

    return (
      <Card key={weaponCode}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" component="div" sx={{ color: 'text.secondary', whiteSpace: 'pre-line' }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack direction="row" spacing={1}>
            {rules.length > 0 && rules.map(rule => getChips(rule.code, rule.name, rule.ruleText))}
          </Stack>
        </CardActions>
      </Card>
    );
  }

  const getAccordeons = () => {
    return (
      <>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Дистанция 0
          </AccordionSummary>
          <AccordionDetails>
            <Flex flexDirection='column' rowGap={16}>
              {weapons.filter(({ distance }) => distance === 0).map(weapon => itemsList(weapon.code, weapon.name, weapon.description, weapon.rules))}
            </Flex>
          </AccordionDetails>
        </Accordion><Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Дистанция 1
          </AccordionSummary>
          <AccordionDetails>
            <Flex flexDirection='column' rowGap={16}>
              {weapons.filter(({ distance }) => distance === 1).map(weapon => itemsList(weapon.code, weapon.name, weapon.description, weapon.rules))}
            </Flex>
          </AccordionDetails>
        </Accordion><Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Дистанция 2
          </AccordionSummary>
          <AccordionDetails>
            <Flex flexDirection='column' rowGap={16}>
              {weapons.filter(({ distance }) => distance === 2).map(weapon => itemsList(weapon.code, weapon.name, weapon.description, weapon.rules))}
            </Flex>
          </AccordionDetails>
        </Accordion><Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Дистанция 6
          </AccordionSummary>
          <AccordionDetails>
            <Flex flexDirection='column' rowGap={16}>
              {weapons.filter(({ distance }) => distance === 6).map(weapon => itemsList(weapon.code, weapon.name, weapon.description, weapon.rules))}
            </Flex>
          </AccordionDetails>
        </Accordion><Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Дистанция 12
          </AccordionSummary>
          <AccordionDetails>
            <Flex flexDirection='column' rowGap={16}>
              {weapons.filter(({ distance }) => distance === 12).map(weapon => itemsList(weapon.code, weapon.name, weapon.description, weapon.rules))}
            </Flex>
          </AccordionDetails>
        </Accordion><Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Дистанция 36
          </AccordionSummary>
          <AccordionDetails>
            <Flex flexDirection='column' rowGap={16}>
              {weapons.filter(({ distance }) => distance === 36).map(weapon => itemsList(weapon.code, weapon.name, weapon.description, weapon.rules))}
            </Flex>
          </AccordionDetails>
        </Accordion>
      </>
    )
  }

  const bioTabs = () => {
    return (
      <TabContext value={bioTab}>
        <Box sx={{ position: 'fixed', borderBottom: 1, borderColor: 'divider', width: '100%', zIndex: 99, backgroundColor: '#F5F5F5' }}>
          <TabList onChange={handleBioChange}>
            <Tab label="Оружие" value="0" />
            <Tab label="Броня" value="1" />
            <Tab label="Артефакты" value="2" />
            <Tab label="Магия" value="3" />
          </TabList>
        </Box>
        <Box sx={{ overflowY: 'scroll', paddingTop: '48px' }}>
          <TabPanel value="0">
            <Flex flexDirection='column'>
              {getAccordeons()}
            </Flex>
          </TabPanel>
          <TabPanel value="1">
            <Flex flex={1} flexDirection='column' rowGap={16} style={{ overflow: 'hidden' }}>
              {armors.map(armor => itemsList(armor.code, armor.name, armor.description, armor.rules))}
            </Flex>
          </TabPanel>
          <TabPanel value="2">
            <Flex flex={1} flexDirection='column' rowGap={16} style={{ overflow: 'hidden' }}>
              {artifacts.map(artifact => itemsList(artifact.code, artifact.name, artifact.description, artifact.rules))}
            </Flex>
          </TabPanel>
          <TabPanel value="3">
            <Flex flex={1} flexDirection='column' rowGap={16} style={{ overflow: 'hidden' }}>
              {magic.map(spell => itemsList(spell.code, spell.name, spell.description, spell.rules))}
            </Flex>
          </TabPanel>
        </Box>
      </TabContext>
    )
  }

  const getContent = (activeKey) => {
    switch (activeKey) {
      case 0:
        return monstersList();
      case 1:
        return randomizer();
      case 2:
        return bioTabs();
      default:
        return randomizer();
    }
  }

  //#endregion


  return (
    <Flex className='Wrapper'>
      <Flex className='BodyWrapper'>
        {getContent(value)}
      </Flex>
      <Flex className='FooterWrapper'>
        <Paper sx={{ maxWidth: '450px', position: 'fixed', bottom: 24, left: 0, right: 0 }} elevation={3}>
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
      <Flex className='WatermarkWrapper'>
        <Desinged width='150px' height='24px' />
      </Flex>
    </Flex>
  );
}

export default App;