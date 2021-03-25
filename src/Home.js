import React, { useState } from "react";
import { AppsRounded } from "@material-ui/icons/";
import { Button } from "@material-ui/core/";
import {useStateValue} from './StateProvider';
import { useHistory } from "react-router-dom";
import {actionTypes} from './reducer';
import { makeStyles } from "@material-ui/core/styles";
import Logo from './Logo';
import SearchBar from './SearchBar';
import './Style.css'
function Home() {
  const useStyles = makeStyles({
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "10px",
    },
    btn: {
      fontFamily: "Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif",
      padding: "9px 23px",
      fontWeight: "500",
      minWidth: "96px",
      textTransform: "none",
      letterSpacing: ".25px",
    },
  });
  const classes = useStyles();
  const [search, setSearch] = useState(null);
  const [{},disp]=useStateValue()
  const history = useHistory();
  const googleit=(e)=>{
    e.preventDefault()
    console.log("you hit the bulls eye");
    history.push('/search')
    disp({
        type:actionTypes.SET_SEARCH_TERM,
        term:search
    })
}
  return (
    <div>
      <header className={classes.header + " header"}>
        <a href="https://mail.google.com">
          <span className="links">Gmail</span>
        </a>
        <a href="https://www.google.co.in/imghp?hl=en&ogbl">
          <span className="links">Images</span>
        </a>
        <AppsRounded />
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          style={{
            background: "#2b7de9",
            "&:hover": {
              background: "#2b7de9",
              boxShadow:
                "0 1px 2px 0 rgb(66 133 244 / 30%), 0 1px 3px 1px rgb(66 133 244 / 15%)",
            },
          }}
        >
          Sign In
        </Button>
      </header>
      <main>
        <Logo/>
        <form className="searchBox">
          <SearchBar search={search} setsearch={setSearch}/>
          <center>
            <button
              className="btn-default"
              onClick={googleit}
              type="submit"
              disabled={!search}
            >
              Google Search
            </button>
            <a href="#">
              <button className="btn-default">I'm Feeling Lucky</button>
            </a>
          </center>
        </form>
      </main>
    </div>
  );
}
export default Home;
