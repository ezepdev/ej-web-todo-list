import React, { useState } from 'react';

import Navbar from './Navbar';
import AddTODO from './AddTODO';
import ListTODO from './ListTODO';

const initialNotes = [
  {
    title: 'Note1',
    text: 'Pasando a la década de 1960, el Lorem Ipsum fue popularizado por el fabricante de tipografía Letraset, que lo utilizó en sus campañas publicitarias.Letraset ofrecía páginas de Lorem Ipsum como hojas de transferencia, que fueron ampliamente utilizadas en la era anterior a los ordenadores para los diseños.Estas páginas de transferencia, conocidas como Letraset Body Type, se incluyeron en la publicidad de la compañía y en su popular catálogo.',
  },
  {
    title: 'Note2',
    text: 'Pasando a la década de 1960, el Lorem Ipsum fue popularizado por el fabricante de tipografía Letraset, que lo utilizó en sus campañas publicitarias.Letraset ofrecía páginas de Lorem Ipsum como hojas de transferencia, que fueron ampliamente utilizadas en la era anterior a los ordenadores para los diseños.Estas páginas de transferencia, conocidas como Letraset Body Type, se incluyeron en la publicidad de la compañía y en su popular catálogo.',
  },
  {
    title: 'Note3',
    text: 'Pasando a la década de 1960, el Lorem Ipsum fue popularizado por el fabricante de tipografía Letraset, que lo utilizó en sus campañas publicitarias.Letraset ofrecía páginas de Lorem Ipsum como hojas de transferencia, que fueron ampliamente utilizadas en la era anterior a los ordenadores para los diseños.Estas páginas de transferencia, conocidas como Letraset Body Type, se incluyeron en la publicidad de la compañía y en su popular catálogo.',
  },
];

const App = () => {
  const [list, setList] = useState(initialNotes);

  const editElemList = (index, title, text) => {
    setList((prevState) => prevState.map((note, i) => (i === index ? { title, text } : note)));
  };

  const deleteElemList = (index) => {
    setList((prevState) => prevState.filter((_, i) => i !== index));
  };

  const addElemList = (title, text) => {
    setList((prevState) => [{ title, text }, ...prevState]);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <AddTODO addElemList={addElemList} />
        <ListTODO
          elems={list}
          editElemList={editElemList}
          deleteElemList={deleteElemList}
        />
      </div>
    </div>
  );
};

export default App;
