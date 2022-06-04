
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import Button from '../../components/Button';
import SizeAndDetails from './SizeAndDetails';

import axios from 'axios';


//product object
// {
  // thumbnail : String
  // name : String
  // availableSizes : [String]
  // description : String
  // garmentDetails : String
// }
//
//


export default function Checkout(){
    const {id} = useParams();


    const [product, setProduct] = useState({});

    const [loading, setLoading] = useState(false)

    useEffect(() => {

      setLoading(true);
      axios.get('/product-details/' + id)
      .then((resp) => {
        setProduct(resp.data);
        setLoading(false);

      }).catch(error => {
        setLoading(false);
      });


    }, [setProduct, id, setLoading]);

    if (loading){
      return <Loader/>
    }
    return (
      <div>
        <SizeAndDetails product={product}/>
        <Button/>
      </div>
    )

}
