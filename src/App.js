import './App.css';
import { Nav} from './components/Nav/Nav'
import {Cursor} from './components/Cursor/Cursor.js';
import React, { useEffect } from 'react';
import Container from './components/Container/Container';

const  animation_fadeIn= () => {
  const links = document.querySelectorAll("a ");
  links.forEach((link) => {
    link.addEventListener('mouseover', () => {
      link.classList.add('animate__animated');
      link.classList.add('animate__fadeIn');
          }
        )
    link.addEventListener('mouseout', () => {
      link.classList.remove('animate__animated');
      link.classList.remove('animate__fadeIn');
          }
        )
      }
    )
  }

const cursor_animation_links = () => {
  const links = document.querySelectorAll(" a ");
  links.forEach((link) => {
  link.addEventListener('mouseover', pressed_cursor);
  link.addEventListener('mouseout', released_cursor);
    }
  )
}
const pressed_cursor = () => {
    const cursor = document.querySelector('#cursor');
    const pointer = document.querySelector('#pointer');
    cursor.classList.remove('released_cursor');
    pointer.classList.remove('released_pointer');
    cursor.classList.add('pressed_cursor');
    pointer.classList.add('pressed_pointer');
}

const released_cursor = () => { 
    const cursor = document.querySelector('#cursor');
    const pointer = document.querySelector('#pointer');
    cursor.classList.remove('pressed_cursor');
    pointer.classList.remove('pressed_pointer');
    cursor.classList.add('released_cursor');
    pointer.classList.add('released_pointer');
}
const movecursor = (e) => {
  const container = document.querySelector('#cursor');
  const mouseX = e.pageX ;
  const mouseY = e.pageY ;
  container.style.transform=`translate3d(${mouseX -13}px,${mouseY -13}px,0)`;
}

function App() {

  useEffect(animation_fadeIn);
  useEffect(cursor_animation_links);
  useEffect(() =>{
    document.addEventListener('mousemove',movecursor);
    document.addEventListener('mousedown',(e)=>{pressed_cursor()});
    document.addEventListener('mouseup',released_cursor);
    }
    );
 

  return ( 
    <React.StrictMode>
      <Cursor />
      <Nav />
      <Container />
    </React.StrictMode>
     );
}



export  {App};
