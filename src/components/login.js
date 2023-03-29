import React from "react";
import "../index.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const username = useRef();
  const userpassword = useRef();
  var Role = localStorage.getItem("rol");
  const clicked = async (e) => {
    e.preventDefault();
    if (
      username.current.value === "admin" &&
      userpassword.current.value === "12345"
    ) {
      Role = "admin";
      console.log("success");
    } else {
      Role = "user";
      console.log("user is logging in");
    }
    localStorage.setItem("rol", Role);
    localStorage.setItem("nameofuser", username.current.value);

    username.current.value = "";
    userpassword.current.value = "";
  };

  return (
    <div>
      <div className="container">
        <section>
          <div className="left_div">
            <div className="leftcontainer">
              <div className="form-div">
                <form className="forms" method="#">
                  <h3>SIGN IN</h3>
                  <input
                    ref={username}
                    type="text"
                    required
                    id="userName"
                    placeholder="ENTER USERNAME"
                  />
                  <br />
                  <input
                    type="password"
                    required
                    ref={userpassword}
                    id="userPass"
                    placeholder="ENTER PASSWORD"
                  />
                  <br />
                  <button
                    onClick={clicked}
                    id="lbutton"
                    className="btn btn-success"
                  >
                    <Link
                      style={{ color: "white", textDecoration: "none" }}
                      to="/home"
                    >
                      SUBMIT
                    </Link>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
