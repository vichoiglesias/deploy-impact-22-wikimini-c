import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/main-layout';
import HomePage from '../pages/home-page';
import LoginPage from '../pages/login-page';
import ClassesPage from '../pages/classes-page';
import DashboardPage from '../pages/dashboard-page';
import RegisterPage from '../pages/register-page';
import AddClassPage from '../pages/add-class-page';

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/classes" element={<ClassesPage />} />
      <Route path="/add-class" element={<AddClassPage />} />
    </Route>
  </Routes>
);

export default PageRoutes;
