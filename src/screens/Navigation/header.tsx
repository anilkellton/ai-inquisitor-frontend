import { Link,useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react'
const Header = ()=>{
  const location = useLocation();
  let path = location.pathname;
  // useEffect(() => {
  //   let location = useLocation();
  //   path = location.pathname
  // }, []);
    return (<>
    <header id="header" className="header d-flex align-items-center fixed-top">
  <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

    <a href="index.html" className="logo d-flex align-items-center">
    <Link to="/"> <h1 className="d-flex align-items-center">AI - Inquisitor</h1></Link>
    </a>

    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    <nav id="navbar" className="navbar">
      <ul>
        <li className=''><Link to="/"><a>Home</a></Link></li>
        <li><Link to="/create-blog"><a>Create Blog</a></Link></li>
      </ul>
    </nav>
  </div>
</header>
    </>)

}
export default Header;