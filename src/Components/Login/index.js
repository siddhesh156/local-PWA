import React, { useState } from "react";
import {
  Paper,
  Button,
  FormControl,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { Phone, Lock } from "@material-ui/icons";

const styles = (theme) => ({
  container: {
    backgroundImage: `url("/images/icons/login-bg-1.jpg")`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    paddingTop: "40px",
    "@media (max-width: 640px)": {
      backgroundImage: "none",
      paddingTop: "0px",
    },
  },
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3*2))]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${
      theme.spacing(3)
    }px`,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3),
    borderRadius: "5em",
    background: "#D94939",
    color: "#fff",
    "&:hover": {
      background: "#D94939",
      alpha: 0.1,
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
    },
  },
  forgotTxt:{
	  color: '#245163',
	  marginTop: '25px',
	  cursor: "pointer"
  },
  bottomTxt:{
	marginTop: '60px',
	"& span":{
		color: '#D94939',
		textDecoration: "underline",
		cursor: "pointer"
	}
},
});

function SignIn(props) {
  const { classes } = props;

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isValidMobile, setIsValidMobile] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <Paper className={classes.paper}>
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
                fontSize="39"
                fontFamily="BrushScriptMT, Brush Script MT"
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
                strokeWidth="2"
              />
              <line
                id="Line_2"
                data-name="Line 2"
                x2="30.74"
                transform="translate(206.107 303.982)"
                fill="none"
                stroke="#4a4a4a"
                strokeWidth="2"
              />
              <g id="locationIcon">
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M52.258,0a52.258,52.258,0,0,1,52.258,52.258c0,28.862-52.258,108.311-52.258,108.311S0,81.12,0,52.258A52.258,52.258,0,0,1,52.258,0Z"
                  transform="translate(132.256 118.859)"
                  fill="#dd4b39"
                  stroke="#707070"
                  strokeWidth="1"
                />
              </g>
              <text
                id="Locals_"
                data-name="Locals"
                transform="translate(82.544 364)"
                fill="#4a4a4a"
                fontSize="65"
                fontFamily="Montserrat-Bold, Montserrat"
                fontWeight="700"
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
                  strokeWidth="1"
                />
                <path
                  id="primary"
                  d="M56.893,13.519A7.048,7.048,0,0,0,49.846,7H14.114a7.048,7.048,0,0,0-7.048,6.519L4.106,52.282a7,7,0,0,0,7.013,7.576H52.841a7,7,0,0,0,7.013-7.576Z"
                  transform="translate(0 12.619)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="1"
                />
              </g>
            </g>
          </svg>
          <form
            className={classes.form}
            onSubmit={(e) => e.preventDefault() && false}
          >
            <FormControl margin="normal" required fullWidth>
              <TextField
                className={classes.input}
                id="outlined-number"
                label="Mobile Number"
                type="number"
                variant="outlined"
                value={phoneNumber}
                onChange={(e) =>
                  e.target.value.length <= 10
                    ? setPhoneNumber(e.target.value)
                    : null
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
                error={isValidMobile ? true : false}
                helperText={
                  isValidMobile ? "Please enter only 10 digits number" : null
                }
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
                inputProps={{
                  maxLength: 12,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
                error={isValidPassword ? true : false}
                helperText={
                  isValidPassword
                    ? "Please enter only 5-12 digits password"
                    : null
                }
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
		  <div className={classes.forgotTxt} onClick={()=>props.history.push('/forgetPassword')}>Forgotten password ?</div>
		  <div className={classes.bottomTxt}>Don't have an account? <span onClick={()=>props.history.push('/signUp')}>Register now</span> </div>
        </Paper>
      </main>
    </div>
  );

  async function login() {
    try {
      if (phoneNumber.length !== 10) {
        setIsValidMobile(true);
      } else if (password.length < 5) {
        setIsValidPassword(true);
      } else {
        setIsValidMobile(false);
        setIsValidPassword(false);
      }
      // props.history.replace("/dashboard");
    } catch (error) {
      //alert(error.message);
    }
  }
}

export default withStyles(styles)(SignIn);
