import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  ShoppingBag,
  Percent,
  Tag,
  ShoppingCart,
  Settings,
} from "react-feather";
import withStyles from "@material-ui/core/styles/withStyles";
import { LocationOn } from "@material-ui/icons";

const styles = (theme) => ({
  header: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    background: "white",
    "& p": {
      borderBottom: "2px solid #aeaeae",
      margin: "5px 0 0 0",
      width: "100%",
    },
  },
  title: {
    display: "flex",
    alignItems: "center",
    color: "#4A4A4A",
    fontSize: "2em",
    fontWeight: "600",
    fontFamily: "sans-serif",
    textTransform: "capitalize",
    marginLeft: "8px",
    justifyContent: "space-between",
  },
  location: {
    display: "flex",
    alignSelf: "flex-end",
    margin: "2px 5px",
  },
  locationText: {
    margin: "2px",
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-end",
    alignItems: "center",
    fontSize: "0.7em",
    "& p": {
      borderBottom: "2px solid #aeaeae",
      margin: "5px 0 0 0",
      width: "100%",
    },
  },
});

function Dashboard(props) {
  const { classes } = props;

  const [windowDimension, setWindowDimension] = useState(null);
  const [active, setActive] = useState("store");
  var color = "#D94939";

  console.log({ active });

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  return (
    <Styles.Wrapper>
      <CSSReset />

      {isMobile ? (
        <>
          <div className={classes.header}>
            <div className={classes.location}>
              <div>
                <LocationOn style={{ color: color, fontSize: "large" }} />
              </div>
              <div className={classes.locationText}>
                Badlapur, 415600
                <p></p>
              </div>
            </div>
            <div>
              <div className={classes.title}>{active}</div>
              <p></p>
            </div>
          </div>

          <MobileNavbar.Wrapper>
            <MobileNavbar.Items>
              <MobileNavbar.Item
                style={{ color: `${active === "store" ? color : "black"}` }}
                onClick={() => setActive("store")}
              >
                <MobileNavbar.Icon>
                  <ShoppingBag size={16} />
                </MobileNavbar.Icon>
                Store
              </MobileNavbar.Item>
              <MobileNavbar.Item
                style={{ color: `${active === "service" ? color : "black"}` }}
                onClick={() => setActive("service")}
              >
                <MobileNavbar.Icon>
                  <Percent size={16} />
                </MobileNavbar.Icon>
                Services
              </MobileNavbar.Item>
              <MobileNavbar.Item
                style={{ color: `${active === "discount" ? color : "black"}` }}
                onClick={() => setActive("discount")}
              >
                <MobileNavbar.Icon>
                  <Tag size={16} />
                </MobileNavbar.Icon>
                Discount
              </MobileNavbar.Item>
              <MobileNavbar.Item
                style={{ color: `${active === "cart" ? color : "black"}` }}
                onClick={() => setActive("cart")}
              >
                <MobileNavbar.Icon>
                  <ShoppingCart size={16} />
                </MobileNavbar.Icon>
                Cart
              </MobileNavbar.Item>
              <MobileNavbar.Item
                style={{ color: `${active === "setting" ? color : "black"}` }}
                onClick={() => setActive("setting")}
              >
                <MobileNavbar.Icon>
                  <Settings size={16} />
                </MobileNavbar.Icon>
                Settings
              </MobileNavbar.Item>
            </MobileNavbar.Items>
          </MobileNavbar.Wrapper>
        </>
      ) : (
        <>
          <Navbar.Wrapper>
            <Navbar.Logo>
              <img
                src="/images/icons/small-logo.png"
                style={{ height: "50px", width: "40px" }}
                alt="Home"
              />
            </Navbar.Logo>
            <Navbar.Items>
              <Navbar.Item
                style={{ color: `${active === "store" ? color : "black"}` }}
                onClick={() => setActive("store")}
              >
                Store
              </Navbar.Item>
              <Navbar.Item
                style={{ color: `${active === "service" ? color : "black"}` }}
                onClick={() => setActive("service")}
              >
                Services
              </Navbar.Item>
              <Navbar.Item
                style={{ color: `${active === "discount" ? color : "black"}` }}
                onClick={() => setActive("discount")}
              >
                Discount
              </Navbar.Item>
              <Navbar.Item
                style={{ color: `${active === "cart" ? color : "black"}` }}
                onClick={() => setActive("cart")}
              >
                Cart
              </Navbar.Item>
              <Navbar.Item
                style={{ color: `${active === "setting" ? color : "black"}` }}
                onClick={() => setActive("setting")}
              >
                Settings
              </Navbar.Item>
            </Navbar.Items>
          </Navbar.Wrapper>
          <div className={classes.header}>
            
            <div>

              <div className={classes.title}>{active}
              
              <div className={classes.location}>
              <div>
                <LocationOn style={{ color: color, fontSize: "large" }} />
              </div>
              <div className={classes.locationText}>
                Badlapur, 415600
                
              </div>
            </div>

              </div>

              <p></p>

            </div>
          </div>
        </>
      )}
    </Styles.Wrapper>
  );
}

export default withStyles(styles)(Dashboard);

const Styles = {
  Wrapper: styled.main`
    //display: flex;
    background-color: #eeeeee;
    height: 100vh;
  `,
};

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;

    align-self: flex-start;

    padding: 1rem;
    //padding: 1rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;
  `,
  Logo: styled.h1`
    border: 1px solid gray;
    padding: 0.5rem 1rem;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
  `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;
    font-family: Aktiv Grotesk, Arial, Helvetica, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    font-size: 2.2rem;
    line-height: 1.714;
  `,
};

const MobileNavbar = {
  Wrapper: styled(Navbar.Wrapper)`
    position: fixed;
    width: 100vw;
    bottom: 0;

    justify-content: center;
  `,
  Items: styled(Navbar.Items)`
    flex: 1;
    //padding: 0 2rem;
    padding: 0;

    justify-content: space-around;
  `,
  Item: styled(Navbar.Item)`
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 1.2rem;
  `,
  Icon: styled.span``,
};

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;      
  }  

  body {
    font-size: 1.4rem;
    font-family: sans-serif;
  }
`;
