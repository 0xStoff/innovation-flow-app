import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import brueggliLogo from "../../img/logo_brueggli.svg";
import InfoIcon from "@mui/icons-material/Info";
import useMediaQuery from "@mui/material/useMediaQuery";

export function Header() {
  const matches = useMediaQuery("(min-width:900px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "90%",
        }}
      >
        <Typography variant="h2" textAlign="center">
          Innovation Flow
        </Typography>
        <Tooltip
          enterTouchDelay={0}
          leaveTouchDelay={10000}
          title="Innovation Flow ist eine Feedback-Pinnwand für die Mitarbeiter von Brüggli Medien. 
Hast du Anregungen zu internen Prozessen? Hast du ein Feedback zur Firma?
Oder schweben dir Strategien vor, um unsere Effizienz zu steigern?
Dann melde dich an und gebe jetzt dein Feedback ab!"
          arrow
          placement={matches ? "right" : "left"}
        >
          <InfoIcon />
        </Tooltip>
      </Box>
      <Box sx={{ width: 200, marginY: 3 }}>
        <img src={brueggliLogo} alt="Brüggli Medien Logo" />
      </Box>
    </Box>
  );
}
