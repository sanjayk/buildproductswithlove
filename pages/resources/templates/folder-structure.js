import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//useSWR allows the use of SWR inside function components
import useSWR from 'swr';
import { useRouter } from 'next/router';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function RichObjectTreeView() {
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
  console.log(dataJSON);

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <main>
      <Box sx={{ bgcolor: '#f0ebe0', height: '100%', pt: 4 }}>
        <Grid item xs={12} sx={{ pl: 6, pr: 6 }}>
          <Grid container spacing={4} justifyContent='center'>
            <Grid
              item
              key={1}
              xs={12}
              sm={6}
              md={5}
              sx={{
                mt: 4,
                borderRight: '1px solid #e2e2e2',
              }}
            >
              <Card
                sx={{ backgroundColor: '#f0ebe0' }}
                elevation={0}
              >
                <CardContent>
                  <TreeView
                    aria-label='rich object'
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpanded={['root', '3', '8']}
                    defaultExpandIcon={<ChevronRightIcon />}
                    sx={{
                      flexGrow: 1,
                      maxWidth: 400,
                      overflowY: 'auto',
                    }}
                  >
                    {renderTree(dataJSON)}
                  </TreeView>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              key={2}
              xs={12}
              sm={6}
              md={5}
              sx={{
                mt: 4,
              }}
            >
              <Card
                sx={{ backgroundColor: '#f0ebe0' }}
                elevation={0}
              >
                <CardContent>
                  <Typography variant='h5' component='div' sx={{ mt: 2 }}>
                    "HELLO WORLD"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
