import React, { useState, useEffect } from "react";
import { Alert } from "./alert";

const getfromlocal = () => {
  let items = localStorage.getItem("lists");
  console.log(items);
  if (items) {
    return JSON.parse(localStorage.getItem("lists"));
  } else return [];
};

const Booksadd = () => {
  const [title, setTitle] = useState("");
  const [list, setList] = useState(getfromlocal);
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const deletebook = (id) => {
    console.log(id);
    const update = list.filter((eleme, ids) => {
      return id != ids;
    });
    setList(update);
  };

  const addedbook = (e) => {
    console.log("Book added");
    e.preventDefault();
    if (title == "" || price == "") {
      alert("Enter Details to add");
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        bookname: title,
        bookprice: price,
        bookimg: "./assets/tg.jpg",
      };
      setList([...list, newItem]);
      setTitle("");
      setPrice("");
      setImg("");
    }
  };

  // const showAlert = (show = false, type = "", msg = "") => {
  //   setAlert({ show, type, msg });
  // };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(list));
  }, [list]);

  return (
    <div>
      <div className="addNew" id="addNew1">
        <label>Add Book Name: </label>
        <input
          style={{ textAlign: "center" }}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          className="mb-4"
          id="bookName"
        />
        <label>Price: </label>
        <input
          style={{ textAlign: "center" }}
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          type="text"
          id="bookPrice"
        />
        <input
          type="file"
          onChange={(e) => {
            setImg(e.target.value);
          }}
          value={img}
          id="imgSelect"
        />
        <input
          value="ADD BOOK"
          type="submit"
          className="btn btn-success mt-3"
          id="AddButton"
          onClick={addedbook}
        />
      </div>
    </div>
  );
};
export default Booksadd;
