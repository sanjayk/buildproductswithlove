import * as React from 'react';

import { Roboto_Serif } from '@next/font/google';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as Muicon from '@mui/icons-material';
import Link from 'next/link';

const cards = [
  {
    index: 1,
    icon: 'AutoStories',
    subject_line: 'BOOKS',
    description: 'Crowd sourced awesome books',
    number: '10',
    link: 'awesome/books',
  },
  {
    index: 2,
    icon: 'Article',
    subject_line: 'ARTICLES',
    description: 'Awesome articles written on the web',
    number: '10',
    link: 'awesome/books',
  },
];

const GenerateIcon = (variation, props = {}) => {
  let IconName = Muicon[variation];

  if (!IconName) {
    IconName = Muicon['Star'];
  }

  return <IconName {...props} />;
};

export default function Awesome(theme) {
  return (
    <main>
      <Box sx={{ bgcolor: '#f0ebe0', height: '100%', pt: 4 }}>
        <Grid item xs={12} sx={{ pl: 6, pr: 6 }}>
          <Typography variant='h6' component='h6'>
            <Box sx={{ fontWeight: 'light' }}>
              Awesome Resources collected in one place.
            </Box>
          </Typography>
          <Grid container spacing={4} justifyContent='center'>
            {cards.map((card) => (
              <Grid
                item
                key={card.index}
                xs={12}
                sm={6}
                md={5}
                sx={{
                  mt: 4,
                  borderRight: '1px solid #e2e2e2',
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#f0ebe0',
                    borderRadius: 0,
                  }}
                  elevation={0}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box>
                      <Avatar
                        sx={{ bgcolor: '#FFFFFF', width: 56, height: 56 }}
                      >
                        {GenerateIcon(card.icon, {
                          color: 'secondary',
                          sx: [{ fontSize: 30 }],
                        })}
                      </Avatar>
                    </Box>
                    <Typography
                      gutterBottom
                      variant='h3'
                      component='h2'
                      sx={{ mt: 4 }}
                    >
                      {card.subject_line}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Link
                      href={`/${(card.link)}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Button size='small'>View</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
