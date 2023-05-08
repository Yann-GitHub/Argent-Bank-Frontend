/**
 * Component for displaying the header with navigation links.
 *
 * @returns {JSX.Element} - React Component - Header.
 */

function HeroBanner() {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  )
}

export default HeroBanner
