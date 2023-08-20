import { useAuth } from "hooks"
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations"

const UserMenu = () => {
  const { user } = useAuth()
  const dispatch = useDispatch()

  const handleLogOut = () => dispatch(logOut())
  
  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <p>Welcom {user.name}</p>
      <button type="button" onClick={handleLogOut}>LogOut</button>
    </div>
  )
}

export default UserMenu 