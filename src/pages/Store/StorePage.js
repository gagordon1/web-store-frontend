import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function StorePage() {

  const [store, setStore] = useState([{"name" : "Elvis"}]);

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    axios.get('/products')
    .then((resp) => {
      setStore(resp.data);
      setLoading(false);
      console.log(resp.data);
    });

  }, [setStore]);
  return (
    <div>

      {store.map(item => <li key={item.id}> {item.name} </li> )}

    </div>

  )

}
