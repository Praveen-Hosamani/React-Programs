import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" style={{marginRight:'50px'}}>Home</Link>
          </li>

          <li>
            <Link to="/blogs" style={{marginRight:'50px'}}>Blogs</Link>
          </li>

          <li>
            <Link to="/contact" style={{marginRight:'50px'}}>Contact</Link>
          </li>

        </ul>
      </nav>
       <Outlet />
    </>
  )
};
 export default Layout; 
