import Head from "next/head";
import Login from "../components/Login";
import Header from "../components/Header";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scrool bg-gradient-to-b from -black to -to fuchsia-900 overflow-hidden">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
      </div>
      <button
        className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
