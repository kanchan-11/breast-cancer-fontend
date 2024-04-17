import React from 'react'
import {Card,CardHeader,Avatar,IconButton} from '@mui/material';
import {red} from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const PatientCard = ({patient,onClick}) => {
    const handleCardClick = () => {
        onClick(patient);
      };
  return (
    <Card className='' onClick={handleCardClick}>
        <CardHeader
            avatar={
                <Avatar sx={{bgcolor:red[500]}} aria-label="recipe">
                    R
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon/>
                </IconButton>
            }
            title={patient?.firstName+" "+patient?.lastName}
            subheader={patient?.gender}/>
    </Card>
  )
}

export default PatientCard