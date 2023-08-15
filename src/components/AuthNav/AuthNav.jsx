import { Link } from "react-router-dom"

const AuthNav = () => {
  return (
    <>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <Link to="/login" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
    </div>
    </>
  )
}

export default AuthNav