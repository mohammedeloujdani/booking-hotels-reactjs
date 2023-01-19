import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navContainer">
            <span className="logo"><a href="http://localhost:3000/">ResOnline</a></span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
