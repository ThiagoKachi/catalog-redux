import { Link } from 'react-router-dom';

import reduxLogo from '../../assets/images/redux-logo.svg';
import { useAppSelector } from '../../store';

export function Header() {
  const { cartProductsListQtd } = useAppSelector((state) => state.cart);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Redux Logo</span>
            <img className="h-8 w-auto" src={reduxLogo} alt="Redux logo" />
          </Link>
        </div>
        <h1 className="hidden sm:flex text-2xl text-zinc-800">Catalog Redux</h1>
        <div className="lg:flex lg:flex-1 lg:justify-end relative">
          <Link
            to="/cart"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-purple-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </Link>
          {cartProductsListQtd > 0 && (
            <span className="absolute bg-purple-500 rounded-full w-4 h-4 left-[99%] top-[-20%] text-center text-[10px] text-white font-medium">
              {cartProductsListQtd}
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}
