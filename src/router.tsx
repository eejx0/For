import { Route, Routes,BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle.style";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Detail } from "./pages/Detail";
import { Recipe } from "./pages/Recipe";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/detail/:id" element={<Detail />}/>
          <Route path="/recipe" element={<Recipe />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router