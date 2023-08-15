import {Outlet } from "react-router-dom"
import AppBar from "components/AppBar/AppBar"

const Layout = () => {
  return (
 <>
    <header class="bg-white">
      <AppBar/>
    </header>

    <main >
        {/* <Suspense fallback={<div>loading...</div>}> */}
          <Outlet/>
        {/* </Suspense> */}
    </main>
 </>
  )
}

export default Layout