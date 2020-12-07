import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import styles from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { PlayCircleFilledWhite } from "@material-ui/icons";
import Episods from "./pages/Episodes/Episods";
import CharFetch from "./pages/Characters/component";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#D7D3EB",
    height: "95vh"
  },
  bar: {
    background: "#A193DA",
    color: "black"
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          TabIndicatorProps={{ style: { backgroundColor: "#694FEC" } }}
          centered
        >
          <Tab label="Caharacter" {...a11yProps(0)} />
          <Tab label="Episodes" {...a11yProps(1)} />
          <Tab label="Locations" {...a11yProps(2)} />
          <Tab label="My watch list" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CharFetch />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Episods />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Locations
      </TabPanel>
      <TabPanel value={value} index={3}>
        My watch list
      </TabPanel>
    </div>
  );
}
