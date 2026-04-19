import { useState } from "react";

const games = [
  "Garten of Banban 1",
  "Garten of Banban 2",
  "Garten of Banban 3",
  "Garten of Banban 4",
  "Garten of Banban 6",
  "Garten of Banban 7",
  "Garten of Banban 8",
  "Cuphead",
  "UNDERTALE",
  "BENDY",
  "DELTARUNE",
  "INDIE CROSS FNF",
  "Poppy Playtime 1",
  "Poppy Playtime 2",
  "Poppy Playtime 3",
  "Poppy Playtime 4",
  "Poppy Playtime 5"
];

export default function App() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ gmail: "", username: "", password: "" });
  const [cheese, setCheese] = useState(0);
  const [library, setLibrary] = useState([]);

  const login = () => {
    if (form.gmail && form.username && form.password.length === 8) {
      setUser(form.username);
    } else {
      alert("Gmail, kullanıcı adı ve 8 haneli şifre gerekli!");
    }
  };

  const buyGame = (g) => {
    if (!library.includes(g)) {
      setLibrary([...library, g]);
      setCheese(cheese + 300);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-green-100">
        <div className="bg-white p-6 rounded-xl w-80">
          <h1 className="text-xl font-bold mb-4">PLAGG Giriş</h1>

          <input
            className="border p-2 w-full mb-2"
            placeholder="Gmail"
            onChange={(e) => setForm({ ...form, gmail: e.target.value })}
          />

          <input
            className="border p-2 w-full mb-2"
            placeholder="Kullanıcı Adı"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />

          <input
            className="border p-2 w-full mb-2"
            placeholder="8 haneli şifre"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button onClick={login} className="bg-green-500 text-white w-full p-2 rounded">
            Giriş Yap
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 p-4">

      {/* TOP BAR */}
      <div className="flex justify-between items-center bg-green-300 p-3 rounded-xl">
        <div className="flex items-center gap-2 font-bold text-green-900">
          🕶️ <img src="plagg.png" className="w-6 h-6" /> PLAGG
        </div>

        <div className="font-bold">
          🧀 Peynir: {cheese}
        </div>
      </div>

      {/* OYUNLAR */}
      <h2 className="text-xl font-bold mt-4 mb-2">Oyunlar</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {games.map((g) => (
          <div key={g} className="bg-white p-3 rounded-xl shadow">
            <p className="font-bold">{g}</p>
            <p className="text-sm">100 TL / 300 🧀 (ücretsiz sistem)</p>

            <button
              className="bg-green-500 text-white w-full mt-2 p-1 rounded"
              onClick={() => buyGame(g)}
            >
              Satın Al
            </button>
          </div>
        ))}
      </div>

      {/* KÜTÜPHANE */}
      <h2 className="text-xl font-bold mt-6 mb-2">Kütüphane</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {library.map((g) => (
          <div key={g} className="bg-green-200 p-3 rounded-xl">
            <p className="font-bold">{g}</p>
            <button className="bg-black text-white w-full mt-2 p-1 rounded">
              Oyna
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
