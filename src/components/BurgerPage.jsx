import { useEffect, useState } from 'react'
import BurgerList from './BurgerList'
import BurgerDetails from './BurgerDetails'
import Cart from './Cart'
import burgers from './burgerData'

function BurgerPage() {
  const [selectedBurger, setSelectedBurger] = useState(null)
  const [cart, setCart] = useState([])
  const [showAll, setShowAll] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [featuredIndex, setFeaturedIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((current) => (current + 1) % burgers.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const featuredBurger = burgers[featuredIndex]
  const visibleBurgers = showAll ? burgers : burgers.slice(0, 8)

  const addToCart = (burger, quantity) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === burger.id)

      if (existing) {
        return currentCart.map((item) =>
          item.id === burger.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [...currentCart, { ...burger, quantity }]
    })
    setSelectedBurger(null)
  }

  const updateCartQuantity = (id, change) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <main className="burger-page">
      <header className="burger-header">
        <div className="brand-block">
          <div className="brand-icon">🍔</div>
          <div>
            <h1>Burger House</h1>
            <p>Good burgers, made fresh.</p>
          </div>
        </div>

        <button
          type="button"
          className="cart-top-button"
          onClick={() => setShowCart(true)}
        >
          🛒 Cart
          <span className="cart-count">{cartCount}</span>
        </button>
      </header>

      <section className="featured-burger">
        <div className="featured-image">
          <img
            key={featuredBurger.id}
            src={featuredBurger.imageUrl}
            alt={featuredBurger.name}
          />
        </div>

        <div className="featured-content">
          <span className="featured-label">TODAY'S PICK</span>
          <h2>{featuredBurger.name}</h2>
          <p>{featuredBurger.description}</p>
          <div className="featured-bottom">
            <strong>₱{featuredBurger.price}</strong>
            <button type="button" onClick={() => setSelectedBurger(featuredBurger)}>
              View burger
            </button>
          </div>
          <div className="slider-dots" aria-label={`Featured burger ${featuredIndex + 1} of ${burgers.length}`}>
            {burgers.slice(0, 5).map((burger, index) => (
              <span key={burger.id} className={index === featuredIndex % 5 ? 'active' : ''} />
            ))}
          </div>
        </div>
      </section>

      <BurgerList
        burgers={visibleBurgers}
        onBurgerClick={setSelectedBurger}
      />

      {burgers.length > 8 && (
        <button
          type="button"
          className="see-more-button"
          onClick={() => setShowAll(true)}
          disabled={showAll}
        >
          SEE MORE
        </button>
      )}

      {selectedBurger && (
        <BurgerDetails
          burger={selectedBurger}
          onClose={() => setSelectedBurger(null)}
          onAddToCart={addToCart}
        />
      )}

      {showCart && (
        <Cart
          cart={cart}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={updateCartQuantity}
        />
      )}
    </main>
  )
}

export default BurgerPage
