import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './App.css';
import about from './Components/About/about';
import Cpp from './Components/C++/Cpp';
import home from './Components/home/home.js'
import Python from './Components/Python/python';
function App() {
  return (
      <div className='col-3'>
      <ProSidebar>
        <Menu iconShape="circle">
          <MenuItem onClick={() =>home}>Home</MenuItem>
          <MenuItem >Tutorial</MenuItem>
          <SubMenu title="User">
            <MenuItem onClick={() =>about}>about</MenuItem>
            <MenuItem>Project</MenuItem>
            <MenuItem>Acadamic</MenuItem>
            <MenuItem>skill</MenuItem>
            <MenuItem>Experience</MenuItem>
          </SubMenu>
          <MenuItem onClick={() =>Cpp}>C++</MenuItem>
          <MenuItem >Java</MenuItem>
          <MenuItem onClick={() =>Python}>Python</MenuItem>
          <MenuItem >Html</MenuItem>
          <MenuItem >CSS</MenuItem>
          <MenuItem >JavaScript</MenuItem>
          <MenuItem >React js</MenuItem>
          <MenuItem >Node js</MenuItem>
        </Menu>
      </ProSidebar>
      </div>
    
  );
}
export default App;
