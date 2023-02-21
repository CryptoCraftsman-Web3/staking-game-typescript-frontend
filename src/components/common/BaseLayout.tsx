import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { useEffect, useState } from "react";
import NotificationToaster from "./NotificationToaster";


// export const notify = ({ message }: { message: string }) =>
//   toast.custom(
//     (t) => (
//       <div
//         className={clsx([
//           "notificationWrapper",
//           t.visible ? "bottom-0" : "-bottom-96",
//         ])}
//       >
//         <div className="iconWrapper">
//           sf
//         </div>
//         <div className="toaster" >
//           <div className="go2072408551">
//             <div className="go685806154">
//               <div className="go1858758034"></div><div className="go1579819456">
//                 <div className="go2534082608">
//                 </div>
//               </div>
//             </div>
//             <div role="status" aria-live="polite" className="go3958317564">unknown account #0</div>
//           </div>
//           <div className="contentWrapper">
//             <h1>New version available</h1>
//             <p>
//               An improved version of VESSEL is now available, refresh to update.
//             </p>
//           </div>
//           <div className="closeIcon" onClick={() => toast.dismiss(t.id)}>
//           </div>
//         </div>
//       </div>
//     ),
//     { id: "unique-notification", position: "bottom-center" }
//   );

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
        <NotificationToaster />
      </main >
    </div >
  );
};

export default BaseLayout;