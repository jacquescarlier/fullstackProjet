import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home"
import Single from"../../pages/Single"
import Page404 from "../../pages/Page404"
const Routing = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single" element={ <Single />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    )
  }
  
  export default Routing;