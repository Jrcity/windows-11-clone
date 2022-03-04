import React from "react";
import styled from "@emotion/styled";
import { Container, Divider, Popover } from "@mui/material";

// import images
import wallpaper from "../../../public/images/win11-bg-dark.jpg";
import DesktopDialog, { DestopDialogItem } from "./DesktopDialog";
import { desktop_dialog_list } from "../../utils/desktop_dialog_list";

const DesktopContainer = styled(Container)((props) => ({
  // some styles
  height: "100vh",
  overflow: "hidden",
  background: `url(${props.wallpaper}) no-repeat`,
  backgroundPosition: "100% 100%",
  backgroundSize: "cover",
}));

export default function Desktop(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [coordinates, setCoordinates] = React.useState(null);
  function handleOpenContext(ev) {
    setAnchorEl(ev.currentTarget);
    ev.preventDefault();
    ev.stopPropagation();
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getCoordinates = React.useCallback((ev) => {
    setCoordinates([ev.clientX, ev.clientY]);
    ev.stopPropagation();
    ev.preventDefault();
  }, []);
  React.useEffect(() => {
    document
      .getElementById("desktop__menu")
      .addEventListener("mousemove", getCoordinates, false);
  }, [getCoordinates]);

  const open = Boolean(anchorEl);
  const id = open ? "simple-Popover" : undefined;

  const X_COORD = coordinates?.[0];
  const Y_COORD = coordinates?.[1];
  return (
    <DesktopContainer
      id='desktop__menu'
      // onMouseMove={getCoordinates}
      onClick={handleClose}
      aria-describedby={id}
      onContextMenu={handleOpenContext}
      maxWidth='xl'
      wallpaper={wallpaper}
    >
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: Y_COORD,
          horizontal: X_COORD,
        }}
      >
        <DesktopDialog>
          {desktop_dialog_list.map((item, idx) => {
            switch (idx) {
              case 0:
                return (
                  <>
                    <DestopDialogItem
                      key={idx}
                      ListText={item.name}
                      PrefixIcon={item.prefixIcon}
                      SuffixIcon={item.suffixIcon}
                    />
                  </>
                );
              case 1:
                return (
                  <>
                    <DestopDialogItem
                      key={idx}
                      ListText={item.name}
                      PrefixIcon={item.prefixIcon}
                      SuffixIcon={item.suffixIcon}
                    />
                    <Divider />
                  </>
                );
              case 2:
                return (
                  <>
                    <DestopDialogItem
                      disabled
                      key={idx}
                      ListText={item.name}
                      PrefixIcon={item.prefixIcon}
                      SuffixIcon={item.suffixIcon}
                    />
                  </>
                );
              case 3:
                return (
                  <>
                    <DestopDialogItem
                      key={idx}
                      ListText={item.name}
                      PrefixIcon={item.prefixIcon}
                      SuffixIcon={item.suffixIcon}
                    />
                    <Divider />
                  </>
                );
              case 4:
                return (
                  <>
                    <DestopDialogItem
                      key={idx}
                      ListText={item.name}
                      PrefixIcon={item.prefixIcon}
                      SuffixIcon={item.suffixIcon}
                    />
                  </>
                );
              case 5:
                return (
                  <>
                    <DestopDialogItem
                      key={idx}
                      ListText={item.name}
                      PrefixIcon={item.prefixIcon}
                      SuffixIcon={item.suffixIcon}
                    />
                    <Divider />
                  </>
                );
              case 6:
                return (
                  <>
                    <DestopDialogItem
                      key={idx}
                      ListText={item.name}
                      PrefixIcon={item.prefixIcon}
                      SuffixIcon={item.suffixIcon}
                    />
                  </>
                );
            }
          })}

        </DesktopDialog>
      </Popover>
      {props.children}
    </DesktopContainer>
  );
}
