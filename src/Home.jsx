import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import AddTODO from "./AddTODO";
import ListTODO from "./ListTODO";

const initialNotes = [
  {
    title: "Note1",
    text:
      "Pasando a la década de 1960, el Lorem Ipsum fue popularizado por el fabricante de tipografía Letraset, que lo utilizó en sus campañas publicitarias.Letraset ofrecía páginas de Lorem Ipsum como hojas de transferencia, que fueron ampliamente utilizadas en la era anterior a los ordenadores para los diseños.Estas páginas de transferencia, conocidas como Letraset Body Type, se incluyeron en la publicidad de la compañía y en su popular catálogo.",
  },
  {
    title: "Note2",
    text:
      "Pasando a la década de 1960, el Lorem Ipsum fue popularizado por el fabricante de tipografía Letraset, que lo utilizó en sus campañas publicitarias.Letraset ofrecía páginas de Lorem Ipsum como hojas de transferencia, que fueron ampliamente utilizadas en la era anterior a los ordenadores para los diseños.Estas páginas de transferencia, conocidas como Letraset Body Type, se incluyeron en la publicidad de la compañía y en su popular catálogo.",
  },
  {
    title: "Note3",
    text:
      "Pasando a la década de 1960, el Lorem Ipsum fue popularizado por el fabricante de tipografía Letraset, que lo utilizó en sus campañas publicitarias.Letraset ofrecía páginas de Lorem Ipsum como hojas de transferencia, que fueron ampliamente utilizadas en la era anterior a los ordenadores para los diseños.Estas páginas de transferencia, conocidas como Letraset Body Type, se incluyeron en la publicidad de la compañía y en su popular catálogo.",
  },
];

const Home = () => {
  const [email, setEmail] = useState([]);
  const [list, setList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setEmail(userData.email);
    setList(userData.notes);
  }, []);

  const editElemList = (index, title, text) => {
    setList((prevState) =>
      prevState.map((note, i) => (i === index ? { title, text } : note))
    );
  };

  const deleteElemList = (index) => {
    setList((prevState) => prevState.filter((_, i) => i !== index));
  };

  const addElemList = (title, text) => {
    const token = localStorage.getItem("token");
    const data = {
      title: title,
      description: text,
    };
    const headers = {
      authorization: token,
    };
    axios
      .post("http://localhost:7000/notes", data, { headers: headers })
      .then((response) =>
        setList((prevState) => [{ title, text }, ...prevState])
      )
      .catch((err) => console.log("Error:", err));
  };

  return (
    <>
      <AddTODO addElemList={addElemList} />
      <ListTODO
        elems={list}
        editElemList={editElemList}
        deleteElemList={deleteElemList}
      />
    </>
  );
};

export default Home;
