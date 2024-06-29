import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connections from "./pages/MyConnections.tsx/Connections";
import Navbar from "./pages/Navbar/Navbar";
import Posts from "./pages/Posts";
import Chat from "./pages/Chat/Chat";
import Notifications from "./pages/Notifications/Notifications";
import { useState } from "react";

export default function App() {
  const [notifications, setDisplayNotifications] = useState<boolean>(false);

  let displayNotifications = false;

  return (
    <main className="w-full h-full flex flex-none flex-col relative">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar displayNotifications={displayNotifications} setDisplayNotifications={setDisplayNotifications} notifications={notifications} />
                <section className="p-4 flex grow space-x-4 w-full mt-[200px]">
                  <Connections />
                  <Posts notificationsOpened={notifications} />
                  <Notifications displayNotifications={notifications} />
                </section>
              </>
            }
          />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
