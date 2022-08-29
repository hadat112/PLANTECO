import { Routes, Route, Link } from "react-router-dom";
import DefaultLayout from "./layouts";
import Dashboard from "./pages/Dashboeard/Dashboard";

function App() {

  return (
    <div className="App h-full">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="wallets" element={<Dashboard />} />
          <Route path="transactions" element={<Dashboard />} />
          <Route path="buypec" element={<Dashboard />} />
          <Route path="sellpec" element={<Dashboard />} />
          <Route path="eip" element={<Dashboard />} />
          <Route path="verification" element={<Dashboard />} />
          <Route path="training" element={<Dashboard />} />
          <Route path="reporting" element={<Dashboard />} />
          <Route path="settings" element={<Dashboard />} />
          
        </Route>
      </Routes>
    </div>
  )
}

export default App
