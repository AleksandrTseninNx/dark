import * as React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Desinged } from './Designed.svg';
import { ReactComponent as Druid } from './druid.svg';
import { OrbitProgress } from "react-loading-indicators";
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Flex from '@react-css/flex'
import './App.css';

const monstersList = () => {
  return (
    <Flex flexDirection='column'>
      <Flex rowGap={16} className="Monster-list" flexDirection='column'>

        <Flex flex={1} flexDirection='column' className="Monster-list-item">
          <Flex className='Monster-list-header'>Гигантская крыса.</Flex>
          <Flex className='Monster-list-content'>Дв 6" A:1 ББ:2 Сл:2 Ст:1 Лв:4 Ум:0 Хр:1</Flex>
          <Flex className='Monster-list-footer'>Оружие: зубы и когти. Урон 1. Защита от магии: нет.</Flex>
        </Flex>

        <Flex flex={1} flexDirection='column' className="Monster-list-item">
          <Flex className='Monster-list-header'>Волк.</Flex>
          <Flex className='Monster-list-content'>Дв 6" A:1 ББ:2 Сл:4 Ст:2 Лв:3 Ум:0 Хр:2</Flex>
          <Flex className='Monster-list-footer'>Оружие: зубы и когти. Урон 1. Защита от магии: нет.</Flex>
        </Flex>

        <Flex flex={1} flexDirection='column' className="Monster-list-item">
          <Flex className='Monster-list-header'>Медведь.</Flex>
          <Flex className='Monster-list-content'>Дв 5" A:1 ББ:2 Сл:5 Ст:4 Лв:1 Ум:0 Хр:3</Flex>
          <Flex className='Monster-list-footer'>Оружие: зубы и когти. Урон 2. Защита от магии: нет.</Flex>
        </Flex>

        <Flex flex={1} flexDirection='column' className="Monster-list-item">
          <Flex className='Monster-list-header'>Нежить. Ходячий труп.</Flex>
          <Flex className='Monster-list-content'>Дв 3" A:1 ББ:2 Сл:2 Ст:3 Лв:0 Ум:0 Хр:-</Flex>
          <Flex className='Monster-list-footer'>Оружие: зубы и когти. Урон 2. Защита от магии: 2.</Flex>
        </Flex>

        <Flex flex={1} flexDirection='column' className="Monster-list-item">
          <Flex className='Monster-list-header'>Нежить. Вурдалак.</Flex>
          <Flex className='Monster-list-content'>Дв 4" A:1 ББ:3 Сл:6 Ст:4 Лв:3 Ум:1 Хр:-</Flex>
          <Flex className='Monster-list-footer'>Оружие: зубы и когти. Урон 2. Защита от магии: 1.</Flex>
        </Flex>

        <Flex flex={1} flexDirection='column' className="Monster-list-item">
          <Flex className='Monster-list-header'>Нежить. Упырь.</Flex>
          <Flex className='Monster-list-content'>Дв 4" A:1 ББ:3 Сл:8 Ст:3 Лв:4 Ум:1 Хр:-</Flex>
          <Flex className='Monster-list-footer'>Оружие: зубы и когти. Урон 2. Защита от магии: 1.</Flex>
        </Flex>
        

        <Flex flex={1} flexDirection='column' className="Monster-list-item">
          <Flex className='Monster-list-header'>Оборотень.</Flex>
          <Flex className='Monster-list-content'>Дв 5" A:2 ББ:3 Сл:5 Ст:4 Лв:3 Ум:3 Хр:5</Flex>
          <Flex className='Monster-list-footer'>Оружие: клыки и когти. ПБ - 3. Урон 2. Защита от магии: 3.</Flex>
        </Flex>

        <Flex flex={1} flexDirection='column' className="Monster-list-item">
          <Flex className='Monster-list-header'>Матёрый оборотень.</Flex>
          <Flex className='Monster-list-content'>Дв 5" A:2 ББ:4 Сл:10 Ст:8 Лв:3 Ум:3 Хр:5</Flex>
          <Flex className='Monster-list-footer'>Оружие: клыки и когти. ПБ - 4. Урон 2. Защита от магии: 3.</Flex>
        </Flex>

        <Flex flex={1} flexDirection='column' className="Monster-list-item">
          <Flex className='Monster-list-header'>Тролль.</Flex>
          <Flex className='Monster-list-content'>Дв 4" A:2 ББ:4 Сл:8 Ст:8 Лв:2 Ум:4 Хр:5</Flex>
          <Flex className='Monster-list-footer'>Оружие: дубина. Сила +1, ИБ, урон 2. Защита от магии: 4.</Flex>
        </Flex>

        <Flex flex={1} flexDirection='column' className="Monster-list-item">
          <Flex className='Monster-list-header'>Мертвая жена.</Flex>
          <Flex className='Monster-list-content'>Это призрак женщины, которая ходит по местности и ищет себе мужа (ну или гарем мужей). Она не наносит урона, и ее нельзя убить.</Flex>
          <Flex className='Monster-list-footer'>В некоторых сценариях от мертвой жены можно избавиться.</Flex>
        </Flex>

        <Flex flex={1} flexDirection='column' className="Monster-list-item">
          <Flex className='Monster-list-header'>Разбойник.</Flex>
          <Flex className='Monster-list-content'>Дв 4" ББ:2 Сл:3 Ст:2 Лв:2 Ум:2 Хр:2</Flex>
          <Flex className='Monster-list-footer'>Оружие: по усмотрению игроков. Защита от магии: 1.</Flex>
        </Flex>

        <Flex flex={1} flexDirection='column' className="Monster-list-item">
          <Flex className='Monster-list-header'>Ледяной великан.</Flex>
          <Flex className='Monster-list-content'>Дв 5" A:2 ББ:3 Сл:3 Ст:5 Лв:1 Ум:3 Хр:4</Flex>
          <Flex className='Monster-list-footer'>Оружие: дубина, двуручный молот или копье. Защита от магии: 3.</Flex>
        </Flex>

        <Flex flex={1} flexDirection='column' className="Monster-list-item">
          <Flex className='Monster-list-header'>Леший</Flex>
          <Flex className='Monster-list-content'>Леший - это хозяин леса. Ему нельзя нанести вред.</Flex>
          <Flex className='Monster-list-footer'>Лешему не нужна линия видимости, он и так знает, кто где находится в его лесу. И он крайне недоволен вторжением на свою территорию.</Flex>
        </Flex>

      </Flex>

      <Flex className='Watermark'>
        <Desinged width='150px' height='24px' />
      </Flex>

    </Flex>
  )

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

const getContent = (activeKey) => {
  switch (activeKey) {
    case 0:
      return monstersList();
    case 1:
      return randomizer();
    default:
      return monstersList();
  }
}

function App() {
  const [value, setValue] = React.useState(0);

  return (
    <Flex flexDirection='column' className="App">
       
    <Flex height='calc(100vh-56px)'>
      {getContent(value)}
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
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
          </BottomNavigation>
        </Paper>
    </Flex>
{/* 
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              console.log("🚀 ~ App ~ newValue:", newValue)
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
          </BottomNavigation>
        </Paper> */}


    </Flex>
  );
}

export default App;