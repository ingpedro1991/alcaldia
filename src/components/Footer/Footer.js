/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#Instagram" className={classes.block}>
              <InstagramIcon>Instagram</InstagramIcon>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#Faceboock" className={classes.block}>
                <FacebookIcon>Faceboock</FacebookIcon>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#Twitter" className={classes.block}>
              <TwitterIcon>Twitter</TwitterIcon>
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="#"
              target="_blank"
              className={classes.a}
            >
              Creative By
            </a>
            , WHITE Had.inc
          </span>
        </p>
      </div>
    </footer>
  );
}
