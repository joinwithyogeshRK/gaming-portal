import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import GameDetailsPage from "./pages/GameDetailsPage";
import TournamentsPage from "./pages/TournamentsPage";
import TournamentDetailsPage from "./pages/TournamentDetailsPage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import AuthLayout from "./components/AuthLayout";
import { AuthProvider } from "./contexts/AuthContext";
import LiveStreamsPage from "./pages/LiveStreamsPage";
import StreamDetailsPage from "./pages/StreamDetailsPage";
import NewsPage from "./pages/NewsPage";
import NewsDetailsPage from "./pages/NewsDetailsPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="games" element={<GamesPage />} />
          <Route path="games/:id" element={<GameDetailsPage />} />
          <Route path="tournaments" element={<TournamentsPage />} />
          <Route path="tournaments/:id" element={<TournamentDetailsPage />} />
          <Route path="streams" element={<LiveStreamsPage />} />
          <Route path="streams/:id" element={<StreamDetailsPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:id" element={<NewsDetailsPage />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          {/* @ts-ignore */}
          <Route path="login" element={<div>Login Page</div>} />
          {/* @ts-ignore */}
          <Route path="register" element={<div>Register Page</div>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;