import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

//useSWR allows the use of SWR inside function components
import useSWR from 'swr';
import { useRouter } from 'next/router';

const Markdoc = require('@markdoc/markdoc');
import { SideNav, TableOfContents, TopNav, Callout } from '../../components';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

const shapeStyles = { border: '1px solid #000000', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };

const circle = (value) => {
  return (
    <Box
      sx={{
        ...shapeStyles,
        ...shapeCircleStyles,
        color: '#000000',
        fontSize: '24pt',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      {value}
    </Box>
  );
};

export default function Books() {
  //Set up SWR to run the fetcher function when calling "/api/staticdata"
  //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const router = useRouter();
  const [path, setPath] = useState(null);
  const { data, error } = useSWR(path ? `/api${path}` : null, fetcher);

  useEffect(() => {
    if (router.isReady) {
      setPath(router.pathname);
    }
  }, [router.isReady]);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data)
    return (
      <main>
        <Box sx={{ bgcolor: '#f0ebe0', height: '100%', pt: 4 }}>
          <Grid item xs={12} sx={{ pl: 6, pr: 6 }}>
            <CircularProgress color='secondary' />
          </Grid>
        </Box>
      </main>
    );
  /*const components = {
    Callout,
  };*/
  const dataJSON = JSON.parse(data);

  //return Markdoc.renderers.react(JSON.parse(data), React, { components });

  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  return (
    <main>
      <Box sx={{ bgcolor: '#f0ebe0', height: '100%', pt: 4 }}>
        <Grid item xs={12} sx={{ pl: 6, pr: 6 }}>
          <Typography variant='h6' component='h6'>
            <Box sx={{ fontWeight: 'light' }}>
              Awesome Product Management Books
            </Box>
          </Typography>
          <Grid container spacing={4} justifyContent='center'>
            {dataJSON.map((card) => (
              <Grid
                item
                key={card.id}
                xs={12}
                sm={6}
                md={5}
                sx={{
                  mt: 4,
                  borderRight: '1px solid #e2e2e2',
                }}
              >
                <Card sx={{ minWidth: 275, backgroundColor: '#f0ebe0', }} elevation={0}>
                  <CardContent>
                    {circle(card.id)}
                    <Typography variant='h5' component='div' sx={{ mt: 2 }}>
                      {card.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                      {card.author}
                    </Typography>
                    <Typography variant='body2'>
                      {card.kindle_highlight}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
