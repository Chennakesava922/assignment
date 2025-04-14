import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Day1Assignments from './Components/Day1/Day1Assignments';
import Day2Assignments from './Components/Day2/Day2Assignments';
import Day3Assignments from './Components/Day3/Day3Assignments';
import Day4Assignments from './Components/Day4/Day4Assignments';
import FDCalculator from './Components/Day3/FDCalculator';
import RDSummary from './Components/Day3/RDSummary';
import InvestmentHistory from './Components/Day3/InvestmentHistory';
import InvestmentDetail from './Components/Day3/InvestmentDetail';
import Dashboard from './Components/Day3/Dashboard';
import CreateFD from './Components/Day3/CreateFD';
import CreateRD from './Components/Day3/CreateRD';
import Support from './Components/Day3/Support';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day1" element={<Day1Assignments />} />
        <Route path="/day2" element={<Day2Assignments />} />
        <Route path="/day3/*" element={<Day3Assignments />}>
          <Route path="fixed-deposit" element={<FDCalculator />} />
          <Route path="recurring-deposit" element={<RDSummary />} />
          <Route path="investment-history" element={<InvestmentHistory />} />
          <Route path="investment/:id" element={<InvestmentDetail />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create-fd" element={<CreateFD />} />
          <Route path="create-rd" element={<CreateRD />} />
          <Route path="support" element={<Support />} />
        </Route>
        <Route path="/day4" element={<Day4Assignments />} />
      </Routes>
    </Router>
  );
}

export default App;
