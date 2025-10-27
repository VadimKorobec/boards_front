import './global.css'

import { Footer } from "./Pages/Footer/Footer";
import { Header } from "./Pages/Header/Header";
import { Main } from "./Pages/Main/Main";
import { Sidebar } from "./Pages/Sidebar/Sidebar";

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Sidebar />
      <Footer />
    </div>
  );
};
