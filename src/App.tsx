import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BaseLayout } from './components/common';
import { DashboardPage, NotFoundPage, AccountPage, BlackMarketPage, StashHousePage } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Navigate to="/dashboard" replace={true} />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="swap" element={<BlackMarketPage />} />
          <Route path="stashhouse" element={<StashHousePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
