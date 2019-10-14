import React from 'react';
//import Split from './composition/Split';
import './App.css';
//import Tooltip from './composition/Tooltip';
//import Messages from "./Messages";
//import TheDate from './state/TheDate';
//import Counter from './state/Counter'
//import HelloWorld from './state-drills/HelloWorld'
//import Bomb from './state-drills/Bomb'
//import RouletGun from './state-drills/RouletGun'
//import Tabs from './state/Tabs'
import Accordian from './state-drills/Accordian'
/*const firstTooltip= (
  <Tooltip color = 'hotpink' message='tooltip message'>
    ipsum
  </Tooltip>
)

const secontTooltip= (
  <Tooltip color= '#126BCC' message ='another tooltip message'>
    officiis
  </Tooltip>
)*/
/*const tabsProp =[
  {name: 'First tab',
    content:'Lorem ipsum dor sit met'},
    {name:'Second tab',
    content:'Ipsum Lorem in that'},
    {name:'Third tab',
    content:'Door Loram Iosume'}
]*/
const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]
function App() {
  return (
    
       /*<Split className= 'left' flexBasis={2}>
        This {firstTooltip} is the content for the left 'Split'. Lorem ipsum
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className= 'right'>
        This is the content for {secontTooltip} the right 'Split'.
      </Split>
      <Messages name='Messages' unread ={0} />
      <Messages name ='Notifications' unread={10} /> 
      */
      <main className='App'>
       <Accordian tab={sections} />
    </main>
  );
}

export default App;
