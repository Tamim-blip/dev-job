
import { FaRegBookmark } from 'react-icons/fa';
import type { TJob } from '../type';

const NavBar = ({saveJob} : {saveJob : TJob[]}) => {
    return (
<div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
        <a href="#">Browse</a>
     </li>
     <li>
        <a href="#">Companies</a>
     </li>
     <li>
        <a href="#">Salaries</a>
     </li>
     <li>
        <a href="#">Post A Job</a>
     </li>
      </ul>
    </div>
    <a className="text-2xl font-bold">Dev<span className='text-yellow-600'>Jobs</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li>
        <a href="#">Browse</a>
     </li>
     <li>
        <a href="#">Companies</a>
     </li>
     <li>
        <a href="#">Salaries</a>
     </li>
     <li>
        <a href="#">Post A Job</a>
     </li>
    </ul>
     
  </div>
  <div className="navbar-end">
    <button className="btn btn-neutral"><FaRegBookmark /> Saved Jobs. {saveJob.length}</button>
  </div>
</div>
    );
};

export default NavBar;