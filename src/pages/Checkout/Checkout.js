
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import Button from '../../components/Button';
import SizeAndDetails from './SizeAndDetails';
import ShippingInfo from './ShippingInfo';

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
//



export default function Checkout(){
    const {id} = useParams();

    const pages = ["size", "shipping", "payment"];

    const [page, setPage] = useState("size");

    const [shippingInfo, setShippingInfo] = useState({
      firstName : "none",
      lastName : "none",
      email : "none",
      address : "none",
      suite : "none",
      city : "none",
      country : "none",
      state : "none",
      zipCode : "none",
      newsAndOffers : false
    })

    const [size, setSize] = useState("none");

    const [product, setProduct] = useState({});

    const [loading, setLoading] = useState(false);

    function sizeAndDetailsButtonClicked(){
      if (size === "none"){
        alert("No size selected!")
      }
      else{
        setPage("shipping")
      }
    }

    function shippingButtonClicked(){
      setPage("payment")
    }



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
    else if (page === "size"){
      return (
        //Size and Details
        <div>
          <SizeAndDetails product={product} setSize={setSize}/>
          <Button onClick={sizeAndDetailsButtonClicked} text={"Proceed to Shipping"}/>
        </div>
      )
    }
    else if(page === "shipping"){
      return (
        <div>
          <ShippingInfo product={product}
                        shippingInfo={shippingInfo}
                        setShippingInfo={setShippingInfo}
                        size={size}
                        />
          <Button onClick={shippingButtonClicked} text={"Proceed to Payment"}/>
        </div>
      )
    }else{
      return (page);
    }

}
