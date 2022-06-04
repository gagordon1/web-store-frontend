
import React, { Component } from "react";
import { useParams } from 'react-router-dom'

export default function SizeAndDetails(){
    const {id} = useParams();
    return (
      <div> {id} </div>
    )
}
