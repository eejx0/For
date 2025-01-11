import { Route, Routes,BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyle.style";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router