import React, { useState } from "react";
import {
  Paper,
  FormControl,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { Phone, ArrowBack, Person, Mail, LocationOn } from "@material-ui/icons";
import { validateEmail } from "../../helper";

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
        background: "rgba(217,73,57,0.95)"
        
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
      marginTop: '80px',
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
    title: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#4A4A4A",
      fontSize: "2em",
      fontWeight: "540",
      fontFamily: "sans-serif",
      marginBottom: "20px",
      width: "fit-content",
      "& p": {
        borderBottom: "2.5px solid #D94939",
        width: "80%",
        margin: "5px 0 0 0",
      },
    },
    submit: {
      display: "flex",
      justifyContent: "center",
      width: '-webkit-fill-available',
      marginTop: '12px'
    },
    backBtn: {
      top: '20px',
      left: '15px',
      position: "absolute",
      color: "#4A4A4A",
      "@media (min-width: 640px)": {
        display: "none"
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
  });
  

function Signup(props) {
  const { classes } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidMobile, setIsValidMobile] = useState(false);
  const [isValidCity, setIsValidCity] = useState(false);

  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <form
            className={classes.form}
            onSubmit={(e) => e.preventDefault() && false}
          >
            <ArrowBack
              className={classes.backBtn}
              onClick={() => props.history.goBack()}
            />
            <div className={classes.title}>
              Sign Up
              <p></p>
            </div>
            <FormControl margin="normal" required fullWidth>
              <TextField
                className={classes.input}
                id="outlined-name"
                label="Your Name"
                type="text"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
                error={isValidName ? true : false}
                helperText={isValidName ? "Please enter valid name" : null}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <TextField
                className={classes.input}
                id="outlined-email"
                label="Email Address"
                type="text"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Mail />
                    </InputAdornment>
                  ),
                }}
                error={isValidEmail ? true : false}
                helperText={
                  isValidEmail ? "Please enter valid email address" : null
                }
              />
            </FormControl>

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
              <FormControl margin="normal" required fullWidth>
                <TextField
                  className={classes.input}
                  id="outlined-city"
                  label="City"
                  type="text"
                  variant="outlined"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOn />
                      </InputAdornment>
                    ),
                  }}
                  error={isValidCity ? true : false}
                  helperText={isValidCity ? "Please enter valid city" : null}
                />
              </FormControl>
            </FormControl>
            <div className={classes.submit}>
              <div onClick={() => submit()}>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="40px"
                  height="40px"
                  viewBox="0 0 122.88 122.88"
                  enableBackground="new 0 0 122.88 122.88"
                  space="preserve"
                  fill="#D94939"
                >
                  <g>
                    <path d="M61.439,0L61.439,0v0.016c-16.976,0-32.335,6.874-43.443,17.981S0.016,44.464,0.016,61.438H0v0.002l0,0h0.016 c0,16.978,6.874,32.336,17.981,43.444c11.107,11.106,26.467,17.98,43.441,17.98v0.016h0.002l0,0v-0.016 c16.977,0,32.336-6.874,43.443-17.98c11.107-11.108,17.981-26.467,17.981-43.441h0.016v-0.003l0,0h-0.016 c0-16.976-6.874-32.335-17.981-43.442S78.416,0.016,61.442,0.016V0H61.439L61.439,0z M51.181,42.479 c-1.909-1.964-1.864-5.1,0.098-7.01c1.961-1.909,5.1-1.866,7.009,0.098l21.838,22.519l-3.554,3.456l3.569-3.458 c1.91,1.971,1.862,5.116-0.108,7.027c-0.057,0.057-0.115,0.109-0.175,0.161L58.288,87.329c-1.909,1.963-5.048,2.007-7.009,0.097 c-1.962-1.907-2.007-5.045-0.098-7.009l18.473-18.889L51.181,42.479L51.181,42.479z" />
                  </g>
                </svg>
              </div>
            </div>
          </form>
        </Paper>
      </main>
    </div>
  );

  async function submit() {
    try {
      if (name.length === 0) {
        setIsValidName(true);
      } else if (email.length === 0) {
        setIsValidEmail(true);
        setIsValidName(false);
      } 
      else if(!validateEmail(email)){
        setIsValidEmail(true);
        setIsValidName(false);
      }else if (phoneNumber.length !== 10) {
        setIsValidMobile(true);
        setIsValidEmail(false);
      } else if (city.length === 0) {
        setIsValidCity(true);
        setIsValidMobile(false);
      } else {
        setIsValidName(false);
        setIsValidEmail(false);
        setIsValidMobile(false);
        setIsValidCity(false);
        props.history.replace("/verification");
      }
    } catch (error) {
      //alert(error.message);
    }
  }
}

export default withStyles(styles)(Signup);
