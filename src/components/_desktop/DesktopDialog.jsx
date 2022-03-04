import React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

import styled from "@emotion/styled";
import { colors } from "../../utils/theme";

const DialogContainer = styled(List)(() => ({
  background: colors.dark.concat("a9"),
  backdropFilter: "blur(2px)",
  width: 260,
  height: "fit-content",
  fontSize: "1rem",
  "&  .list-text": {
    fontSize: "0.8rem",
  }


}))

const DesktopDialog = ({ children }) => {
  return <DialogContainer as={Paper}>{children}</DialogContainer>;
};

export const DestopDialogItem = ({
  disabled,
  ListText,
  PrefixIcon,
  SuffixIcon,
}) => {
  return (
    <ListItemButton disabled={disabled}>
      <ListItemIcon>{PrefixIcon && PrefixIcon}</ListItemIcon>
      <ListItemText>
        <Typography className='list-text'>{ListText}</Typography>
      </ListItemText>
      <ListItemIcon>{SuffixIcon && SuffixIcon}</ListItemIcon>
    </ListItemButton>
  );
};

export default DesktopDialog;
