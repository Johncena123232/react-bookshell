import React, { useEffect } from "react";
import Booksadd from "./booksadd";
import { Ntg } from "./ntg";
import { List } from "./list";
import { Alert } from "./alert";

export default function Home() {
  var list = JSON.parse(localStorage.getItem("lists"));
  var role = localStorage.getItem("rol");
  console.log(role);

  return (
    <div>
      <div>
        <div id="MainContainer">
          <div className="container">
            {role === "admin" ? <Booksadd /> : <Ntg />}
            <div className="row">{list != null && <List items={list} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
