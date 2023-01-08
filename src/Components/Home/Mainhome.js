import { Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { useState,useEffect } from 'react';
import { getdata } from './getdata';
import { CircularProgress } from '@mui/material';
import './Home.css'
import { Container } from '@mui/system';

function Mainhome() {
  const[movie,setMovies]=useState([]);
  const[loading,setLoading]=useState(false)
  
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true)
      getdata()
      .then(({data})=>{
        setMovies(data)
        setLoading(false)
      })
  
    },1000)
    
   
  },[])
  return (
    <>
    {loading ? <CircularProgress color='secondary' className='load'/> : <Grid container rowSpacing={1}>
        {movie.map((moviz)=>{
            const{image,rank,rating,thumbnail,title,year,id}=moviz
            
           
            return(
                <Grid item  lg={4} sm={6} xs={12} mt={10}  key={id} >
                  <Container>
                    <Paper className='paper' elevation={7}>
                      <img src={image} alt={title} className="image"/>
                      <Typography color='secondary' textTransform='capitalize' marginTop={0.5} padding={0.5} fontSize='large'>
                          {title}
                      </Typography>
                      <Typography padding={0.5}>
                        Rank  {rank}
                      </Typography>
                      <Typography padding={0.5}>
                        Rating {rating}
                      </Typography>
                      <div className='thumbnail'>
                        <img src={thumbnail} alt={title} className="secimage"/>
                      </div>
                      <Typography color='secondary'>
                        Year  {year}
                      </Typography>
                    </Paper>
                  </Container>
                </Grid>
            )
        })}
    </Grid>}
    </>
  )
}

export default Mainhome