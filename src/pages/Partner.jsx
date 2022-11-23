import {
  ContentCenter,
  ContentRight,
  Section,
  SectionTitle,
} from '../components';
import useMediaQuery from '../hooks/useMediaQuery';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '../components/';
import Typography from '@mui/material/Typography';

const Partner = () => {
  const isWidthMax1150 = useMediaQuery('(max-width: 1150px)');
  const isWidthMin800 = useMediaQuery('(min-width: 800px)');

  return (
    <>
        <Section width={isWidthMax1150 ? 's' : ''}>
          <SectionTitle title='Green Products' />
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="classmate"
        height="140"
        image="https://i.imgur.com/tIogDK3.jpg/"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Classmate
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ITC Classmate Register
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy for 10 C14 Tokens</Button>
      </CardActions>
    </Card><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="engage"
        height="140"
        image="https://i.imgur.com/ThqpeeW.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Engage
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Engage perfumes and deodrants
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy for 25 C14 Tokens</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="engage"
        height="140"
        image="
    https://i.imgur.com/mtsIJoG.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Vivel
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Vivel premium soaps
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy for 35 C14 Tokens</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="engage"
        height="140"
        image="https://i.imgur.com/eveCZgk.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fiama Di Wills
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Premium bathcare products
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy for 50 C14 Tokens</Button>
      </CardActions>
    </Card>
        </Section>
    </>
  );
};

export default Partner;
