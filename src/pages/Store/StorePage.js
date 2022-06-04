import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from '../../components/ItemCard'
import Loader from '../../components/Loader'
import { ItemCardsContainer } from './StorePageStyled'

export default function StorePage() {

  const [store, setStore] = useState([]);

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    axios.get('/products')
    .then((resp) => {
      setStore(resp.data);
      setLoading(false);

    });


  }, [setStore]);


  if (loading){
    return (<Loader/>)
  }
  return (<ItemCardsContainer >

            {store.map(item => <ItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  thumbnail={item.thumbnail}
                  retailPrice={item.retailPrice}
                /> )}

          </ItemCardsContainer >
        )

}
