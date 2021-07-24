import React, { useState } from "react";
import {
  Typography,
  Paper,
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import { Phone, Lock } from "@material-ui/icons";
//import firebase from '../firebase'

const styles = (theme) => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${
      theme.spacing.unit * 3
    }px`,
  },
  avatar: {
    margin: theme.spacing.unit,
   // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    borderRadius: "5em",
    background: "#D94939",
    color: "#fff",
	'&:hover': {
		background: "#D94939",
		alpha: 0.1
	 },
  },
  input: {
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& label.Mui-focused": {
      color: "#D94939",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        "border-color": "#D94939",
      },
    }
  },
});

function SignIn(props) {
  const { classes } = props;

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        {/* <Avatar variant="rounded" className={classes.avatar}> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="215"
            height="268.641"
            viewBox="0 0 215 268.641"
          >
            <g
              id="small_logo"
              data-name="small logo"
              transform="translate(-82.544 -118.359)"
            >
              <text
                id="The"
                transform="translate(154.544 311)"
                fill="#4a4a4a"
                font-size="39"
                font-family="BrushScriptMT, Brush Script MT"
              >
                <tspan x="0" y="0">
                  The
                </tspan>
              </text>
              <line
                id="Line_1"
                data-name="Line 1"
                x2="30.74"
                transform="translate(132.256 303.957)"
                fill="none"
                stroke="#4a4a4a"
                stroke-width="2"
              />
              <line
                id="Line_2"
                data-name="Line 2"
                x2="30.74"
                transform="translate(206.107 303.982)"
                fill="none"
                stroke="#4a4a4a"
                stroke-width="2"
              />
              <g id="locationIcon">
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M52.258,0a52.258,52.258,0,0,1,52.258,52.258c0,28.862-52.258,108.311-52.258,108.311S0,81.12,0,52.258A52.258,52.258,0,0,1,52.258,0Z"
                  transform="translate(132.256 118.859)"
                  fill="#dd4b39"
                  stroke="#707070"
                  stroke-width="1"
                />
              </g>
              <text
                id="Locals_"
                data-name="Locals
"
                transform="translate(82.544 364)"
                fill="#4a4a4a"
                font-size="65"
                font-family="Montserrat-Bold, Montserrat"
                font-weight="700"
              >
                <tspan x="0" y="0">
                  Locals
                </tspan>
                <tspan x="0" y="7"></tspan>
              </text>
              <g id="bag" transform="translate(152.535 140.859)">
                <path
                  id="secondary"
                  d="M32.667,37.239a3.524,3.524,0,0,1-3.524-3.524V16.1a7.048,7.048,0,1,0-14.1,0V33.715a3.524,3.524,0,1,1-7.048,0V16.1a14.1,14.1,0,1,1,28.191,0V33.715A3.524,3.524,0,0,1,32.667,37.239Z"
                  transform="translate(9.884 -7)"
                  fill="#fff"
                  stroke="#707070"
                  stroke-width="1"
                />
                <path
                  id="primary"
                  d="M56.893,13.519A7.048,7.048,0,0,0,49.846,7H14.114a7.048,7.048,0,0,0-7.048,6.519L4.106,52.282a7,7,0,0,0,7.013,7.576H52.841a7,7,0,0,0,7.013-7.576Z"
                  transform="translate(0 12.619)"
                  fill="#fff"
                  stroke="#707070"
                  stroke-width="1"
                />
              </g>
            </g>
          </svg>
        {/* </Avatar> */}
        <form
          className={classes.form}
		  autoComplete="off"
          onSubmit={(e) => e.preventDefault() && false}
        >
          <FormControl margin="normal" required fullWidth autoComplete="off">
            <TextField
              className={classes.input}
              id="outlined-number"
              label="Mobile Number"
              type="number"
              variant="outlined"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <TextField
              className={classes.input}
			  id="outlined-password-input"
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={login}
            size="large"
            className={classes.submit}
          >
            Log In
          </Button>
        </form>
      </Paper>
    </main>
  );

  async function login() {
    try {
      //await firebase.login(email, password)
      // props.history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }
}

export default withRouter(withStyles(styles)(SignIn));
