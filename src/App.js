import React, { useState, useEffect } from 'react';

import Card from './components/Card';

import { GlobalStyles } from './GlobalStyles';

import { getHomeList } from './services/services';

function App() {

  const [list, setList] = useState([]);

  useEffect(() => {

    const loadAll = async () => {
      
      const listAux = await getHomeList();

      console.log(listAux);

      setList(listAux[0].items.results);

    };

    loadAll();

  }, []);


  return (
    <>
      <div className="content" style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
        {
          list.filter((item, index) => index <= 5).map((item, index) => (
            <Card item={item} key={index}/>
          ))
        }
      </div>
      <GlobalStyles/>
    </>
  );
}

export default App;
