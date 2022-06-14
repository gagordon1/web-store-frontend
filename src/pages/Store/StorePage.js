import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from '../../components/ItemCard';
import Loader from '../../components/Loader';
import { ItemCardsContainer } from './StorePageStyled';
import { BACKEND_API_URL, PRODUCTS_ENDPOINT} from '../../config/endpoints';

export default function StorePage() {

  const [store, setStore] = useState([]);

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    axios.get(BACKEND_API_URL + PRODUCTS_ENDPOINT)
    .then((resp) => {
      setStore(resp.data);
      setLoading(false);
    }).catch(error => {
      console.log(error);
      setLoading(false);
    });



  }, [setStore, setLoading]);


  if (loading){
    return (<Loader/>)
  }
  return (<ItemCardsContainer >

            {store?.map(item => <ItemCard
                  key={item.id + " " + item.name}
                  id={item.id}
                  name={item.name}
                  thumbnail={item.thumbnail}
                  retailPrice={item.retailPrice}
                /> )}

          </ItemCardsContainer >
        )

}
