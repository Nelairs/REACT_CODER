import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const ContactPage = () => {
  return (
    <Box
      className="contact-container"
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="Mail" secondary="saetchenique@gmail.com" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/santiago-etchenique/"
                target="_blank"
              >
                <ListItemText primary="LinkedIn" />
              </a>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <a
                rel="noopener noreferrer"
                href="https://github.com/Nelairs/"
                target="_blank"
              >
                <ListItemText primary="GitHub" />
              </a>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default ContactPage;
