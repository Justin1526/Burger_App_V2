import BurgerCard from './BurgerCard'

function BurgerList({ burgers, onBurgerClick }) {
  return (
    <section className="burger-list-section">
      <div className="section-heading">
        <div>
          <span className="section-eyebrow">FRESH FROM OUR KITCHEN</span>
          <h2>Our Burgers</h2>
        </div>
        <span className="shown-count">{burgers.length} shown</span>
      </div>

      <div className="burger-list">
        {burgers.map((burger) => (
          <BurgerCard
            key={burger.id}
            burger={burger}
            onClick={() => onBurgerClick(burger)}
          />
        ))}
      </div>
    </section>
  )
}

export default BurgerList
