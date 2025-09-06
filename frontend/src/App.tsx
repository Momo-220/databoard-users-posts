import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { UsersPage } from './pages/UsersPage';
import { PostsPage } from './pages/PostsPage';
import { UserDetail } from './pages/UserDetail';
import { Layout } from './components/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
