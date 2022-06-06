
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import Button from '../../components/Button';
import SizeAndDetails from './SizeAndDetails';
import ShippingInfo from './ShippingInfo';
import PaymentModule from './PaymentModule';

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


    const [regions, setRegions] = useState({})

    const [page, setPage] = useState("size");

    const [shippingInfo, setShippingInfo] = useState({
      firstName : "",
      lastName : "",
      email : "",
      address : "",
      suite : "",
      city : "",
      country : "",
      state : "",
      zipCode : "",
      newsAndOffers : false
    })

    const [size, setSize] = useState("");

    const [product, setProduct] = useState({});

    const [loading, setLoading] = useState(false);

    function checkShippingInfo(){
      //check required fields
      let keys = Object.keys(shippingInfo);
      for (var i = 0; i < keys.length; i++){
        let key = keys[i];
        if (!(["suite", "state", "newsAndOffers"].indexOf(key) > -1)){
          if(shippingInfo[key]===""){
            return false;
            }
          }
      }
      //if states options check that one is set
      return ((regions[shippingInfo.country]?.states == null)?
        true : (shippingInfo.state !== ""));
    }

    function sizeAndDetailsButtonClicked(){
      if (size === ""){
        alert("No size selected.")
      }
      else{
        setPage("shipping")
      }
    }

    function shippingButtonClicked(){
      if (checkShippingInfo()){
        setPage("payment");
      }
      else{
        alert("Please enter all required fields.")
      }
    }


    useEffect(() => {
      console.log("getting product details")
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
                        regions={regions}
                        setRegions={setRegions}
                        />
          <Button onClick={shippingButtonClicked} text={"Proceed to Payment"}/>
        </div>
      )
    }else{
      return (
        <PaymentModule/>
      );
    }

}
