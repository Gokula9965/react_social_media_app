import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import NewPost from "./NewPost";
import Postpage from "./Postpage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import Editpage from "./Editpage";
import { DataProvider } from "./Context/DataContext";
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="posts">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<Postpage />} />
          </Route>
          <Route path="edit/:id" element={<Editpage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
