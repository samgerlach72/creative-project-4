import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light">
    <h1 class='title' >Sammy G.</h1>
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/home">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/portfolio">Portfolio</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/reviews">Reviews</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/book">Products</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </nav>

    <Outlet />
    
    <div class = 'bottom'>
      <h1 class = 'bottom-title'>Sammy G. Photography</h1>
      <div class = 'bottom-menu'>
        <Link to="/home" class = 'bottom-menu-item'>Home</Link>
        <Link to="/portfolio" class = 'bottom-menu-item'>Portfolio</Link>
        <Link to="/reviews" class = 'bottom-menu-item'>Reviews</Link>
        <Link to="/about" class = 'bottom-menu-item'>About</Link>
        <Link to="/book" class = 'bottom-menu-item'>Products</Link>
        <Link to="/cart" class = 'bottom-menu-item'>Cart</Link>
        <a href='https://github.com/samgerlach72/githubtest' class='bottom-menu-item'>Link to GitHub</a>
        <a href='#top' class = 'bottom-menu-item'>Top of Page</a>
      </div>
    </div>
    <div class = 'line'></div>
    <p class = 'disclosure'>I do not claim these photo's as my material. This website was created for my web design class. All Photos are under creative commons license.</p>
    </>
  )
};

export default Layout;