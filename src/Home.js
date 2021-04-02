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
            <a href="https://google.com/doodles">
              <button className="btn-default">I'm Feeling Lucky</button>
            </a>
            <a className="NKcBbd" href="https://www.google.com/url?q=https://india.googleblog.com/2021/03/spot-misinformation-online-with-these.html%3Futm_source%3Dgoogle%26utm_medium%3DHPP%26utm_term%3D%26utm_content%3D%26utm_campaign%3Dfactcheck&amp;source=hpp&amp;id=19023671&amp;ct=3&amp;usg=AFQjCNHzzWtqt8SBm1xa7mXJmrUXwXixCw&amp;sa=X&amp;ved=0ahUKEwiDhtHkxd_vAhVWyzgGHdGXAm0Q8IcBCA4" rel="nofollow">Helpful tips to fact check information online</a>
          </center>
        </form>
      </main>
      <footer>
      <h3 class="footer-content">This is not real Google. It is a Clone built by me...</h3>
      <hr/>
      <h4 class="footer-content">For Code : <a href="https://github.com/KiddoKodes/google-clone" target="__blank" rel="noreferrer">Click Here</a></h4>
      <h5 class="footer-content">Thank You For Visiting!!!</h5>
     </footer>
    </div>
  );
}
export default Home;
