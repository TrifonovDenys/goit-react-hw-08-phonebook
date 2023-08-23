import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
      <p className="text-sm font-semibold text-gray-900 mx-1">{user.name}</p>
      <button
        type="button"
        onClick={handleLogOut}
        className="text-sm font-semibold text-gray-900 ml-0.5 hover:text-indigo-600"
      >
        LogOut <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  );
};

export default UserMenu;
