import { Grid } from '@mui/material';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import MiddlePart from '../../components/middlePart/MiddlePart';
import Profile from '../profile/Profile';
import Sidebar from '../../components/sidebar/Sidebar';
import HomeRight from '../../components/homeRight/HomeRight';
import { useSelector } from "react-redux";

const HomePage = () => {
  const { auth } = useSelector(store => store);

  return (
    <div className='px-20'>
      <Grid container spacing={0}>
        <Grid item lg={3} xs={0}>
          <div className='sticky top-0'>
            <Sidebar />
          </div>
        </Grid>
        <Grid item className="px-5 flex justify-center" xs={12} lg={6}>
          <Routes>
            <Route path="/" element={<MiddlePart />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Grid>
        <Grid item lg={3} xs={12} className='relative'>
          {auth && (
            <div className='sticky top-0 w-full'>
              <HomeRight />
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
