
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import Button from '../../components/Button';
import SizeAndDetails from './SizeAndDetails';
import ShippingInfo from './ShippingInfo';
import PaymentModule from './PaymentModule';
import { ProductImageAndTitle } from './ProductImageAndTitle';
import { CheckoutContainer } from './CheckoutStyled'
import { calculateShippingPrice } from './PricingCalculations';

import axios from 'axios';


//product object
// {
  // thumbnail : String
  // name : String
  // description : String
  // garmentDetails : String
  // variants : [
  //    id : Number
  //    size : String
  //    name : String
  // ]
  //
// }
//
//
//
export default function Checkout(){
    const {id} = useParams();


    const [regions, setRegions] = useState({})

    const [page, setPage] = useState("size");

    const [shippingPrice, setShippingPrice] = useState(0.0);

    const [taxRates, setTaxRates] = useState(
      {
        tax : 0.0,
        shippingTax : 0.0
      }
    );

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
    const [variant, setVariant] = useState({
      id: -1,
      size: "",
      name: "",
      catalogVariantId: -1
    });

    const [product, setProduct] = useState({
      thumbnail : "",
      id : -1,
      name : "",
      retailPrice : 0,
      variants : []
    });

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
      if (variant.id === -1 ){
        alert("No size selected.")
      }
      else{
        console.log(variant);
        setPage("shipping")
      }
    }

    function shippingButtonClicked(){
      if (checkShippingInfo()){
        setShippingPrice(calculateShippingPrice(variant, shippingInfo, regions));
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
          <SizeAndDetails product={product} setVariant={setVariant} variant={variant}/>
          <Button onClick={sizeAndDetailsButtonClicked} text={"Proceed to Shipping"}/>
        </div>
      )
    }
    else if(page === "shipping"){
      return (
        <div>
          {variant.id + " " + variant.catalogVariantId}
          <ShippingInfo product={product}
                        shippingInfo={shippingInfo}
                        setShippingInfo={setShippingInfo}
                        regions={regions}
                        setRegions={setRegions}
                        shippingButtonClicked={shippingButtonClicked}
                        setPage={setPage}
                        />
        </div>
      )
    }else{
      return (
        <CheckoutContainer>

          <ProductImageAndTitle product={product} variant={variant}/>
          <PaymentModule
            shippingInfo={shippingInfo}
            setPage={setPage}
            regions={regions}
            variant={variant}
            product={product}
            shippingPrice={shippingPrice}
            />
        </CheckoutContainer>
      );
    }

}
