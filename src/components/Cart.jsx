function Cart({ cart, onClose, onUpdateQuantity }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="cart-overlay">
      <aside className="cart-panel">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button type="button" className="cart-close-button" onClick={onClose}>
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div>🛒</div>
            <p>Your cart is empty.</p>
            <button type="button" onClick={onClose}>Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-image"><img src={item.imageUrl} alt={item.name} /></div>

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>₱{item.price} each</p>

                    <div className="cart-item-controls">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, -1)}
                      >
                        −
                      </button>
                      <strong>{item.quantity}</strong>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <strong className="cart-item-total">
                    ₱{item.price * item.quantity}
                  </strong>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <strong>₱{total}</strong>
              </div>

              <button type="button" className="buy-button">
                BUY
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default Cart
