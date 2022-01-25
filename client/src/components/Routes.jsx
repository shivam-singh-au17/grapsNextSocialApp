import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import "./style.css";
import { ThemeContexts1 } from "./Contexts/ThemeContexts1";
import Home from "./home/Home";

const Routes = () => {
  const { theme1 } = useContext(ThemeContexts1);
  return (
    <>
      {theme1 ? (
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route>
            <div className="showError">
              <div className="errorSection">
                <div className="leftErrorImg">
                  <img
                    src="https://github.com/shivam-singh-au17/resumeBuilder/blob/master/src/components/img/error.png?raw=true"
                    alt=""
                  />
                </div>
                <div className="rightRror">
                  <button className="btn btn-secondary fs-5 mb-3" type="button">
                    <Link className="nav-link text-light" to="/">
                      Back to home
                    </Link>
                  </button>
                  <p className="pageNotFound">PAGE NOT FOUND</p>
                  <p className="notFound">404</p>
                  <p className="notFoundTxt">Out of nothing, something.</p>
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/signup">
            <Registration />
          </Route>
          <Route>
            <div className="showError">
              <div className="errorSection">
                <div className="leftErrorImg">
                  <img
                    src="https://github.com/shivam-singh-au17/resumeBuilder/blob/master/src/components/img/error.png?raw=true"
                    alt=""
                  />
                </div>
                <div className="rightRror">
                  <button className="btn btn-secondary fs-5 mb-3" type="button">
                    <Link className="nav-link text-light" to="/">
                      Back to home
                    </Link>
                  </button>
                  <p className="pageNotFound">PAGE NOT FOUND</p>
                  <p className="notFound">404</p>
                  <p className="notFoundTxt">Out of nothing, something.</p>
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      )}
    </>
  );
};

export default Routes;
