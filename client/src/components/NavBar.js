import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function NavBar() {
  const linkStyle = { textDecoration: "none" };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#334756" }}>
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#f0a500",
                fontWeight: 900,
              }}
            >
              Logo
            </Link>
          </Typography>
          <div className="btn-box">
            <Link to="/contacts" style={linkStyle}>
              <Button>Contact List</Button>
            </Link>
            <Link to="/addcontact" style={linkStyle}>
              <Button>Add Contact</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
