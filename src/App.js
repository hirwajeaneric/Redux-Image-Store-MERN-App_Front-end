import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import ListImages from './pages/ListImages';
import ImageDetails from './pages/ImageDetails';
import UpdateImage from './pages/UpdateImage';

import TopBar from './components/sections/TopBar.jsx';
import { useDispatch } from 'react-redux';
import { getImages } from './redux/features/images/imageSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='' element={<ListImages />} />
            <Route path='details/:id' element={<ImageDetails />} />
            <Route path='edit/:id' element={<UpdateImage />} />
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
