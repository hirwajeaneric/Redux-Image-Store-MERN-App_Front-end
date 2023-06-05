import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
// import { Counter } from './features/counter/Counter';
import ListImages from './pages/ListImages';
import ImageDetails from './pages/ImageDetails';
import UpdateImage from './pages/UpdateImage';

import TopBar from './components/sections/TopBar.jsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='' element={<ListImages />} />
            <Route path='details/:id' element={<ImageDetails />} />
            <Route path='update/:id' element={<UpdateImage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export function Main() {
  return (
    <div style={{ width: '100%', display:'flex',flexDirection:'column', alignItems: 'center',justifyContent: 'center' }}>
      <TopBar />
      <Outlet />
    </div>
  )
}

export default App;
