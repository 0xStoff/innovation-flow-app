import React, { useState } from "react";
import { Global } from "@emotion/react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
// import Comments from "../Comments";
import { Typography } from "@mui/material";

const drawerBleeding = 50;

function SwipeableEdgeDrawer({ swipeableState, data }) {
  const { openSwipeable, setOpenSwipeable } = swipeableState;

  return (
    <React.Fragment>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(66% - ${drawerBleeding}px)`,
            // height: "65%",
            overflow: "auto",
            borderRadius: "10px 10px 0 0 ",
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0))",
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={openSwipeable}
        onClose={() => setOpenSwipeable(false)}
        onOpen={() => setOpenSwipeable(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={true}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Typography
          margin={data.title ? "50px auto" : "10px"}
          textAlign="center"
          maxWidth="80%"
          variant="h6"
        >
          {data.title}
        </Typography>

        {data.component}
      </SwipeableDrawer>
    </React.Fragment>
  );
}

export default SwipeableEdgeDrawer;
