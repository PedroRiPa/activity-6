import './styles/HotelCard.css'
import { useNavigate} from 'react-router-dom'


const HotelCard = ({hotel}) => {
    const navigate = useNavigate()
    
    const navigateHotelId = ()=>{
     navigate(`/hotel/${hotel.id}`)   
     }

  return (
    <article className="card">
      <header className="card__header">
        <img className="card__image" src={hotel?.images[0].url} alt="" />
      </header>
        <section className="card__body">
            <h3 className="card__name">{hotel.name}</h3>
            <div className="card__rating">{hotel.rating}
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star-half'></i>
            <i className='bx bxs-star'></i>
            <span className="card__rating__value">{hotel.rating}</span>
            </div>
            <div className="card__city">{hotel.city.name}, {hotel.city.country}</div>
            <div className="card__price">{hotel.price}</div>
            
        </section>
        <footer className="card__footer">
            <button onClick={navigateHotelId} className="card__btn">see more...</button>
        </footer>
    </article>
  )
}

export default HotelCard
