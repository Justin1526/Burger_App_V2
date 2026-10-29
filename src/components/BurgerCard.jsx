function BurgerCard({ burger, onClick }) {
  return (
    <button type="button" className="burger-card" onClick={onClick}>
      <div className="burger-card-image">
        <img src={burger.imageUrl} alt={burger.name} loading="lazy" />
      </div>
      <div className="burger-card-content">
        <h3>{burger.name}</h3>
        <p className="burger-description">{burger.description}</p>
        <div className="burger-card-bottom">
          <span className="burger-rating">★ {burger.rating}</span>
          <strong className="burger-price">₱{burger.price}</strong>
        </div>
      </div>
    </button>
  )
}

export default BurgerCard
