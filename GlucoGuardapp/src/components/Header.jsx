import { useContext } from 'react'
import { FaHome, FaPencilAlt, FaSignInAlt, FaUser, FaCogs, FaUserAltSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Context } from '../context/Context';
import myImage from '../images/2.png'

function Header() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/")
  }
  return (
    <div className="navbar bg-base-600 ">
      <div className="navbar-none">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
            <li><Link className='my-0' to="/"><FaHome className="text-xl" />Home</Link></li>
            <li><Link to="/about"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              About</Link></li>

            {
              user ? (
                <>
                  <li><Link to="/profile"><FaUser className="text-xl" />Profile</Link></li>
                  <li><a href='#' onClick={handleLogout}><FaUserAltSlash className="text-xl" />Logout</a></li>
                </>
              ) : (
                <>
                  <li><Link to="/test"><FaPencilAlt /> Get you Test</Link></li>
                  <li><Link to="/results"><FaUser /> Results </Link></li>
                </>

              )
            }
          </ul>
        </div>
      </div>
      <div className="">
        <Link className=" normal-case text-xl  xs:text-center xs:text-3xl xs:justify-self-center" to="/">
        <img src={myImage} title="logo" alt="Logo" width="100" height="100" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link className='my-0' to="/"><FaHome />Home</Link></li>
          <li><Link to="/about"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            About</Link></li>

          {
            user ? (
              <>
                <li><Link to="/profile" className="justify-between"><FaUser className="rounded-full text-xl" />Profile</Link></li>

                <li><a href='#' onClick={handleLogout}><FaUserAltSlash className="rounded-full text-xl" />Logout</a></li>
              </>
            ) : (
              <>
                <li><Link to="/test"><FaPencilAlt />get your test </Link></li>
                <li><Link to="/results"><FaSignInAlt /> Results </Link></li>
              </>
            )
          }
        </ul>
      </div>
    </div>

  )
}

export default Header
