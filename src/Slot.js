import React from 'react';
import './maching.css';
import SlotM from './SlotM';
import NotMatching from './NotMatching';
function Slot (){
    return(
        <>
        <div className='box'>
        <p className='gameMach'> 🎰 WELCOME TO <b>SLOT MACHING GAME</b> 🎰.</p>
        <div className='matchBox'>
        
        <SlotM  x = '😅'  y='🥰' z='🎅' />
        <SlotM  x = '🍎'  y='🍌' z='🍏' />
        <SlotM  x = '🌹'  y='🏵️' z='🥀' />
        <SlotM  x = '👨‍❤️‍👨'  y='👨‍❤️‍👨' z='👨‍❤️‍👨' />
        <SlotM  x = '🌴'  y='🍊' z='🎋' />
       
       
        </div>
        </div>
    </>  
    );
}
export default Slot