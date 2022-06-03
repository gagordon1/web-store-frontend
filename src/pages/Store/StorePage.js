import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from '../../components/ItemCard'

export default function StorePage() {

  const [store, setStore] = useState([]);

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

      {store.map(item => <ItemCard
            key={item.id}
            name={item.name}
            thumbnail={item.thumbnail}
            retailPrice={item.retailPrice}
          /> )}

    </div>

  )

}
