import { Outlet } from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";

function RootLayout() {

  return (
    <div className="min-h-screen w-full lg:w-screen overflow-x-hidden">
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout
