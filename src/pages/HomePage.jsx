import { useEffect } from "react"
import {useSelector,useDispatch } from "react-redux"
import { getHotelsThunk } from "../store/slices/products.slice"
import HotelCard from "../components/HomePage/HotelCard"

const HomePage = () => {
    const products = useSelector(states => states.products)

    console.log(products)

    const dispatch = useDispatch()
    

    useEffect(()=>{
        const url = 'https://hotels-api.academlo.tech/hotels'
        dispatch(getHotelsThunk(url))
    },[])

  return (
    <div>
    {
        products?.map(hotel => (
            <HotelCard
                key={hotel.id}
                hotel={hotel}
            />
        ))

    }
    </div>
  )
}

export default HomePage
