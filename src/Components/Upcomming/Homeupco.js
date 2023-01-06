import { Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { upcommungMovies } from './Upcamming'
import {Typography} from '@mui/material'
import { CircularProgress } from '@mui/material';
import './Upcomming.css'
import { Container } from '@mui/system';

function Homeupco() {
    const[upcomming,setUpcomming]=useState([])
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        upcommungMovies()
        .then(({data})=>{
            setUpcomming(data)
            setLoading(false)
        })

    },[])
  return (
    <>
        {loading ? <CircularProgress color='secondary' className='load'/> : <Grid container   >
        {upcomming.map((upmovies)=>{
            const{id,title,thumbnail}=upmovies
            return(
                <Grid item  lg={4} sm={6} xs={12} mt={10} key={id} >
                   <Container>
                        <Paper className='papers' elevation={7}>
                            <img src={thumbnail} alt={title} className="image"/>
                            <Typography color='secondary' padding={0.5} >{title}</Typography>
                        </Paper>
                   </Container>
                </Grid>
            )
        })}
    </Grid>}
    </>
  )
}

export default Homeupco