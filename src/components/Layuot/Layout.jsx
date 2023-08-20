import { Outlet } from "react-router-dom"
import AppBar from "components/AppBar/AppBar"
import { Suspense } from 'react';

const Layout = () => {
  return (
 <>
    <header className="bg-white">
      <AppBar/>
    </header>

    <main className="max-w-5xl mx-auto my-0">
        <Suspense fallback={<div>loading...</div>}>
          <Outlet/>
        </Suspense>
    </main>
 </>
  )
}

export default Layout