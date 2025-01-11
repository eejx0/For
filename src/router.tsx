import { Route, Routes,BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle.style";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router