import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Opportunity from "./pages/opportunity";
import OpportunityDetail from "./pages/opportunityDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/opp/:id" Component={Opportunity} />
        <Route path="/opp-detail/:id" Component={OpportunityDetail} />
      </Routes>
    </Router>
  );
}

export default App;
