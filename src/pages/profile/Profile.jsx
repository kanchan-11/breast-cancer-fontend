import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Avatar, Card } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PatientCard from '../../components/patient/PatientCard';
import { useSelector } from "react-redux";
import ProfileModel from './ProfileModel';

const tabs = [
  { value: "patients", name: "patients" },
  { value: "positives", name: "positives" },
  { value: "negatives", name: "negatives" }

]
const patients = [1, 1, 1, 1, 1]
const positives = [1, 1, 1, 1]
const negatives = [1, 1, 1]
const Profile = () => {
  
  const { id } = useParams()

  const [open, setOpen] = React.useState(false);
  const handleOpenProfileModel = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [value, setValue] = React.useState('patients');
  const { auth } = useSelector(store => store)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card className='my-10 w-[70%]'>
      <div className='rounded-md'>
        <div className='h-[15rem]'>
          <div className='h-[15rem]'>
            <img src="https://cdn.pixabay.com/photo/2014/01/13/20/01/pebbles-243910_640.jpg"
              alt=""
              className='w-full h-full rounded-t-md' />
          </div>
          <div className='px-5 flex justify-between items-start mt-5 h-[5rem]'>
            <Avatar className="transform -translate-y-24" sx={{ width: "10rem", height: "10rem" }} 
            src="https://cdn.pixabay.com/photo/2014/01/13/20/01/pebbles-243910_640.jpg" />
            {true ? <Button sx={{ borderRadius: "20px" }} onClick={handleOpenProfileModel} variant="outlined">Edit Profile</Button> :
              <Button sx={{ borderRadius: "20px" }} variant="outlined">Follow</Button>}
          </div>
          <div className='p-5'>
            <div>
              <h1 className='py-1 font-bold text-xl'>{auth.user?.firstName + " " + auth.user?.lastName}</h1>
              <p>@{auth.user?.firstName + auth.user?.lastName}</p>
            </div>
            <div className='flex gap-5 items-center py-3'>
              <span>41 patients</span>
              <span>35 positive</span>
              <span>6 negative</span>
            </div>
            <div>
              <p>This is sample text for bio of the user</p>
            </div>
          </div>
          <section>
            <Box sx={{ width: '100%', borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
              >


                {tabs.map((item) => <Tab value={item.value} label={item.name} wrapped />)}
              </Tabs>
            </Box>
            <div className='flex jusitfy-center'>
              {value === "patients" ? (<div className='space-y-5 w-[70%] my-10'>
                {patients.map((item) => <div className='border rounded-md border-slate-100'><PatientCard /></div>)}
              </div>) : value === "positives" ? <div className='space-y-5 w-[70%] my-10'>
                {positives.map((item) => <div className='border rounded-md border-slate-100'><PatientCard /></div>)}
              </div> : value === "negatives" ? <div className='space-y-5 w-[70%] my-10'>
                {negatives.map((item) => <div className='border rounded-md border-slate-100'><PatientCard /></div>)}
              </div> : ("")}
            </div>
          </section>
        </div>
      </div>
      <section>
        <ProfileModel open={open} handleClose={handleClose}/>
      </section>
    </Card>
  )
}

export default Profile