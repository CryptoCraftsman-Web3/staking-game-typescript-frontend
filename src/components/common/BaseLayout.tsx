import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const BaseLayout: React.FC<{}> = () => {
  const [openSideBar, setOpenSideBar] = useState(false)
  const location = useLocation()
  useEffect(() => {
    setOpenSideBar(false)
  }, [location.pathname])

  return (
    <div className="relative flex flex-col flex-1 bg-[#F6F6FC] min-h-screen max-h-screen overflow-hidden">
      <Navbar openSidebar={() => {
        setOpenSideBar(prev => !prev)
      }} />
      <main
        className="flex flex-1 min-h-screen no-scrollbar overflow-y-auto justify-between">
        <Sidebar openSideBar={openSideBar} onCloseSidebar={() => { setOpenSideBar(false) }} />
        <div className="flex-1 min-h-screen overflow-y-auto  h-full object-left-20 bg-no-repeat w-full lg:w-5/6  bg-cover absolute right-0 top-0 -z-0  bg-[url(assets/images/bg1.png)]">
          {
            openSideBar && (
              <div
                className="fixed w-full h-full inset-0 bg-gray-900 opacity-75 z-20"
                onClick={() => { setOpenSideBar(false) }}
              >
              </div>
            )
          }
          <Outlet />
        </div>
      </main >
    </div >
  );
};

export default BaseLayout;