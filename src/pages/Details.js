import React from 'react'
import { useParams } from 'react-router-dom'
import DetailsContainer from '../components/details/DetailsContainer'

const Details = () => {
    const { productId } = useParams();
  return (
    <div><DetailsContainer productId={productId}/></div>
  )
}

export default Details