import * as React from 'react';

import { Roboto_Serif } from '@next/font/google';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as Muicon from '@mui/icons-material';



const robotoSerif = Roboto_Serif({ subsets: ['latin'] });

const cards = [
  {
    index: 1,
    icon: 'EmojiObjects',
    subject_line: 'IDEAS',
    description: 'A Place to store all your ideas',
  },
  {
    index: 2,
    icon: 'DomainAdd',
    subject_line: 'DOMAIN KB',
    description: 'Domain knowledge to ramp new folks',
  },
  {
    index: 3,
    icon: 'AppRegistration',
    subject_line: 'STRATEGY',
    description: 'Distilled strategy you want to pursue',
  },
  {
    index: 4,
    icon: 'LocalGroceryStore',
    subject_line: 'MRD',
    description: 'Place to put your market requirements',
  },
  {
    index: 5,
    icon: 'Category',
    subject_line: 'PRD',
    description: 'Place to put your product requirements',
  },
  {
    index: 6,
    icon: 'AddRoad',
    subject_line: 'ROADMAP',
    description: 'How do you communicate the build',
  },
  {
    index: 7,
    icon: 'NewReleases',
    subject_line: 'RELEASES',
    description: 'Your release planning information',
  },
  {
    index: 8,
    icon: 'BlurLinear',
    subject_line: 'WIREFRAMES',
    description: 'A location for your wireframes',
  },
  {
    index: 9,
    icon: 'ListAlt',
    subject_line: 'PROTOTYPE',
    description: 'All your prototypes in one place',
  },
  {
    index: 10,
    icon: 'DesignServices',
    subject_line: 'DESIGN',
    description: 'High fidelity design artifacts',
  },
  {
    index: 11,
    icon: 'CallToAction',
    subject_line: 'UX RESEARCH',
    description: 'User research including UXR',
  },
  {
    index: 12,
    icon: 'Pets',
    subject_line: 'ADOPTION',
    description: 'What is your adoption strategy',
  },
  {
    index: 13,
    icon: 'GroupWork',
    subject_line: 'COLLAB',
    description: 'Way you collaborate across tools',
  },
  {
    index: 14,
    icon: 'CommentBank',
    subject_line: 'COMMS',
    description: 'Way you communicate across channels',
  },
  {
    index: 15,
    icon: 'FormatListNumbered',
    subject_line: 'BACKLOG',
    description: 'Your backlog across your product suite',
  },
  {
    index: 16,
    icon: 'Money',
    subject_line: 'FUNDING',
    description: 'Your funding, burn & general financials',
  },
  {
    index: 17,
    icon: 'Analytics',
    subject_line: 'METRICS',
    description: 'How well is your product doing',
  },
  {
    index: 18,
    icon: 'Science',
    subject_line: 'EXPERIMENTS',
    description: 'All your experiments in one place',
  },
  {
    index: 19,
    icon: 'TrendingUp',
    subject_line: 'GROWTH',
    description: 'Your growth hack strategies',
  },
  {
    index: 20,
    icon: 'PrecisionManufacturing',
    subject_line: 'PRODUCTIVITY',
    description: 'Is your velocity good enough',
  },
  {
    index: 21,
    icon: 'SupportAgent',
    subject_line: 'SUPPORT',
    description: 'Your product support strategy',
  },
];

const GenerateIcon = (variation, props = {}) => {
    let IconName = Muicon[variation];

    if (!IconName) { 
        IconName = Muicon["Star"];
    }
    
    return <IconName {...props} />;
  };


export default function Toolkit(theme) {
  return (
    <main>
      <Box sx={{ bgcolor: '#f0ebe0', height: '100%', pt: 4 }}>
      <Grid item xs={12} sx={{ pl: 6, pr: 6 }}>
      <Typography variant='h6' component='h6'>
              <Box sx={{ fontWeight: 'light' }}>
                Describing what a product manager does is difficult. Here is one view of the things you need to keep track of. Consider the toolkit needed to do your job effectively.
              </Box>
            </Typography>
        <Grid container spacing={4} justifyContent='flex-start'>
          {cards.map((card) => (
            <Grid
              item
              key={card.index}
              xs={12}
              sm={6}
              md={2}
              sx={{
                mt: 2,
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
                        {GenerateIcon(card.icon, {color: "secondary", sx:[{fontSize: 40}]})}
                    </Box>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {card.subject_line}
                  </Typography>
                  <Typography>{card.description}</Typography>
                </CardContent>
                {/*<CardActions>
                  <Button size='small'>View</Button>
            </CardActions>*/}
              </Card>
            </Grid>
          ))}
        </Grid>
        </Grid>
      </Box>
    </main>
  );
}
