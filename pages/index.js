import * as React from 'react';

import { Roboto_Serif } from '@next/font/google';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const robotoSerif = Roboto_Serif({ subsets: ['latin'] });

const cards = [
  {
    index: 1,
    subject_line_1: 'ORGANIZE',
    subject_line_2: 'TOOLKIT',
    description: 'A template for how to organize your work',
    link: 'toolkit',
  },
  {
    index: 2,
    subject_line_1: 'RESOURCES',
    subject_line_2: 'TEMPLATES',
    description: 'A list of helpful resources',
    link: 'toolkit',
  },
  {
    index: 3,
    subject_line_1: 'AWESOME',
    subject_line_2: 'COLLECTION',
    description: 'A collection of great resources',
    link: 'awesome',
  },
];

export default function Index(theme) {
  return (
    <main>
      <Box sx={{ bgcolor: '#f0ebe0', height: '100%', pt: 4 }}>
        <Grid container justifyContent='center'>
          <Grid item xs={7} md={9}>
            <Box
              sx={(theme) => ({
                fontSize: '44pt',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '32pt',
                },
                fontWeight: '700',
                pl: 1,
              })}
              className={robotoSerif.className}
            >
              Resources to help you craft beautiful products.
            </Box>
            <Typography variant='h6' component='h6'>
              <Box sx={{ fontWeight: 'light', m: 1, pl: 1 }}>
                Whether you are a product manager at a start-up or a large
                enterprise, we hope you find what you are looking for here!
              </Box>
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent='center' sx={{ p: 3 }}>
          {cards.map((card) => (
            <Grid
              item
              key={card.index}
              xs={12}
              sm={6}
              md={3}
              sx={{
                mt: 2,
                borderRight: '1px solid #e2e2e2',
                '&:nth-last-child(1)': {
                  borderRight: 'none',
                },
              }}
            >
              <Card
                sx={{
                  minWidth: 275,
                  backgroundColor: '#f0ebe0',
                  borderRadius: 0,
                }}
                elevation={0}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color='text.secondary'
                    gutterBottom
                  >
                    {card.subject_line_1}
                  </Typography>
                  <Typography variant='h5' component='div'>
                    {card.subject_line_2}
                  </Typography>
                  <Typography variant='body2'>{card.description}</Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href={`/${encodeURIComponent(card.link)}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button size='small'>Learn More</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
  );
}
