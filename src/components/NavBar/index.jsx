import "./NavBar.css";

export default function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">Shopping Basket</div>
        <div className="menu">
          <ul>
            <li>Movies</li>
            <li>Actors</li>
          </ul>
          <button>Login</button>
        </div>
      </nav>
    </header>
  );
}
