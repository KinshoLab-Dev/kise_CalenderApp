import React from "react";
import { IconButton, Toolbar, Typography, withStyles } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { typeParameter } from "@babel/types";

const StyledToolbar = withStyles({
  root: { padding: "0" }
})(Toolbar)

const StyledTypography = withStyles({
  root: { margin: "0 30px 0 10px" }
})(Typography)

const Navigation = ({ setPreviousMonth, setNextMonth }) => {
  return (
    <StyledToolbar>
      <IconButton>
        <DehazeIcon />
      </IconButton>
      <img src="/images/calendar_icon.png" width="40" height="40" />
      <StyledTypography color="textSecondary" variant="h5" component="h1">
        カレンダー
      </StyledTypography>
      <IconButton size="small" onClick={setPreviousMonth}>
        <ArrowBackIos />
      </IconButton>
      <IconButton size="small" onClick={setNextMonth}>
        <ArrowForwardIos />
      </IconButton>
    </StyledToolbar>
  );
};

export default Navigation;
