import React from 'react';
import Homepage from './components/home/Homepage';
import Layout from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom';
import BlogsPage from './components/blogs/BlogsPage';
import AuthorsPage from './components/authors/AuthorsPage';
import ScrollToTop from './components/shared/ScrollToTop';

const App = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blogs/:slug' element={<BlogsPage />} />
        <Route path='/authors/:slug' element={<AuthorsPage />} />
      </Routes>
    </Layout>
  );
};

export default App;