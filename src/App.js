import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timer from './Timer';
import Menu from './Menu'
import Blog from './Blog'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Menu />} />
          <Route path="timer" element={<Timer />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}