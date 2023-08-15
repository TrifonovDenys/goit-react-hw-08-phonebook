import AuthNav from "components/AuthNav/AuthNav"
import Navigation from "components/Navigation/Navigation"

const AppBar = () => {
  return (
    <>
      <div className="flex items-center max-w-5xl mx-auto my-0">
        <Navigation/>
        <AuthNav/>
      </div>
    </>
  )
}
export default AppBar