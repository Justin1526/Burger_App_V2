import { useState } from 'react'

function BurgerDetails({ burger, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1))
  }

  const increaseQuantity = () => {
    setQuantity((current) => Math.min(burger.stocks, current + 1))
  }

  return (
    <div className="modal-overlay">
      <section className="burger-details-modal">
        <button type="button" className="close-button" onClick={onClose}>
          ×
        </button>

        <div className="details-image"><img src={burger.imageUrl} alt={burger.name} /></div>

        <div className="details-content">
          <span className="details-label">BURGER DETAILS</span>
          <h1>{burger.name}</h1>

          <p className="details-description">{burger.description}</p>

          <div className="details-info">
            <p><strong>Rating:</strong> {burger.rating} / 5</p>
            <p><strong>Stocks:</strong> {burger.stocks}</p>
            <p><strong>Price:</strong> ₱{burger.price}</p>
          </div>

          <div className="quantity-section">
            <span>Quantity</span>
            <div className="quantity-control">
              <button type="button" onClick={decreaseQuantity}>−</button>
              <strong>{quantity}</strong>
              <button type="button" onClick={increaseQuantity}>+</button>
            </div>
          </div>

          <button
            type="button"
            className="cart-button"
            onClick={() => onAddToCart(burger, quantity)}
          >
            ADD TO CART 
          </button>
        </div>
      </section>
    </div>
  )
}

export default BurgerDetails
