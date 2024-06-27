// import Navbar from "./pages/Navbar/Navbar";

import Connections from "./pages/MyConnections.tsx/Connections";
import Navbar from "./pages/Navbar/Navbar";
import Posts from "./pages/Posts";

export default function App() {
  return (
    <main className="w-full h-full flex flex-none flex-col relative">
      <Navbar />

      <section className="p-4 flex grow space-x-4 w-full">
        <Connections />
        <Posts />
      </section>
    </main>
  )
} 