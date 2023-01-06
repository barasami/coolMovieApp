import { Grid,Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getmovieNews } from './News'
import { CircularProgress } from '@mui/material';
import './Movienews.css'
import { Container } from '@mui/system';


function Homenews() {
    const[news,setNews]=useState([])
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        getmovieNews()
        .then(({data})=>{
            setNews(data)
            setLoading(false)
        })
    },[])
  return (
    <>
      {loading ?<CircularProgress color='secondary' className='load'/> : <Grid container  >
      {news.map((coolnews)=>{
        const{image,date,title,description,link,id}=coolnews

        return(
          <Grid item  lg={4} sm={6} xs={12} mt={10} key={date}>
            <Container>
              <Paper elevation={7} className='mypaper' key={id}>
                <img src={image} alt={title} className='image'/>
                <Typography color='secondary' textTransform='capitalize' marginTop={.5} padding={1} >
                  {title}
                </Typography>
                <Typography fontSize='medium' marginLeft={1.5} padding={1.5}>
                  {description}
                </Typography>
                <Typography color='#33eb91' fontStyle='italic' fontSize="small" padding={.5}  marginLeft={1.5}>
                  <a href={link} target="_blank" rel="noreferrer">Read More</a>
                </Typography>
                <Typography color='secondary' fontStyle='italic' padding={.5} marginLeft={1.5}>
                  {date}
                </Typography>
              </Paper>
            </Container>
            
          </Grid>
        )

      })}
    </Grid> }
    </>
  )
}

export default Homenews