import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import QRCode from 'qrcode.react';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


const mainFeaturedPost = {
  title: 'Name of the selected tourist area',
  description:
    "short review .",
  image: 'https://source.unsplash.com/random',
};

const sidebar = {
  title: 'Tourist Area',
  description:[
    <div>
      <QRCode
        value={"https://new-chaskitrail.s3-us-west-1.amazonaws.com/videos/BONDADES+DE+SANTA+ROSA.mp4"}
        size={180}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={true}
        renderAs={"svg"}
        />
    </div>
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} className={classes.mainGrid}>
        <Main/>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
            />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
