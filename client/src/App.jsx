import './App.scss';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import AccountPage from './pages/AccountPage';
import PlacePage from './pages/PlacePage';
import BookingsPage from './pages/BookingsPage';
import HostProfilePage from './pages/HostProfilePage';
import SearchPage from './pages/SearchPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/search/:q?" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account/:subpage?" element={<AccountPage />} />
        <Route path="/account/:subpage/:action" element={<AccountPage />} />
        <Route path="/place/:id" element={<PlacePage />} />
        <Route path="/account/booking" element={<BookingsPage />} />
        <Route path="/host/:id" element={<HostProfilePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
