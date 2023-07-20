import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './Error';
import Scene1 from './Scene1';
import Scene2 from './Scene2';
import Scene3 from './Scene3';
import Scene4 from './Scene4';
import Scene5 from './Scene5';
import Scene6 from './Scene6';
import Scene7 from './Scene7';
import TopMenu from './TopMenu';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Routes>
          <Route index element={<TopMenu/>}/>
          <Route path="/scene1" element={<Scene1/>}/>
          <Route path="/scene2" element={<Scene2 />}/>
          <Route path="/scene3" element={<Scene3 />}/>
          <Route path="/scene4" element={<Scene4 />}/>
          <Route path="/scene5" element={<Scene5 />}/>
          <Route path="/scene6" element={<Scene6 />}/>
          <Route path="/scene7" element={<Scene7 />}/>
          <Route path="/error" element={<Error/>} />
          <Route path="/*" element={<Navigate replace to="/error?errorCode=404"/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
