import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Blocks } from 'react-loader-spinner';

const Layout = () => {
  return (
    <>
      <header className="bg-white">
        <AppBar />
      </header>

      <main className="max-w-5xl mx-auto my-0">
        <Suspense
          fallback={
            <Blocks
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{ height: '80vh', margin: 'auto'}}
              wrapperClass="blocks-wrapper"
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
