import { NavLink, Link } from 'react-router-dom';
import { FcContacts } from 'react-icons/fc';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useState } from 'react';

const Navigation = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
    setMobileMenu(false);
  };
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="flex items-center max-w-5xl mx-auto my-0">
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <FcContacts />
          </NavLink>
        </div>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenu(true)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? 'rgb(79, 70, 229)' : 'black',
              })}
              to="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Home
            </NavLink>

            {isLoggedIn && (
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? 'rgb(79, 70, 229)' : 'black',
                })}
                to="/contacts"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Contacts
              </NavLink>
            )}
          </div>
        </nav>
      </div>

      {/* mobile menu */}
      {mobileMenu && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <NavLink
                to="/"
                className="-m-1.5 p-1.5"
                onClick={() => setMobileMenu(false)}
              >
                <FcContacts />
              </NavLink>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenu(false)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? 'rgb(79, 70, 229)' : 'black',
                    })}
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenu(false)}
                  >
                    Home
                  </NavLink>
                  {isLoggedIn && (
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? 'rgb(79, 70, 229)' : 'black',
                      })}
                      to="/contacts"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenu(false)}
                    >
                      Contacts
                    </NavLink>
                  )}
                </div>
                <div className="py-6">
                  {isLoggedIn ? (
                    <div className="lg:flex lg:flex-1 lg:justify-end ">
                      <p className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {user.name}
                      </p>
                      <button
                        type="button"
                        onClick={handleLogOut}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        LogOut <span aria-hidden="true">&rarr;</span>
                      </button>
                    </div>
                  ) : (
                    <Link
                      to="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenu(false)}
                    >
                      Log in <span aria-hidden="true">&larr;</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
