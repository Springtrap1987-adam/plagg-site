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
      alert("HATA: Gmail + kullanıcı adı + 8 haneli şifre gerekli!");
    }
  };

  const buyGame = (g) => {
    if (!library.includes(g)) {
      setLibrary([...library, g]);
      setCheese((c) => c + 300);
    }
  };

  if (!user) {
    return (
      <div style={{ background: "#d1ffd1", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ background: "white", padding: 20, borderRadius: 10, width: 300 }}>
          <h1>🕶️ PLAGG LOGIN v2</h1>
          <p style={{ fontSize: 12, color: "red" }}>EĞER BUNU GÖRÜYORSAN DEPLOY ÇALIŞIYOR</p>

          <input placeholder="Gmail" onChange={(e) => setForm({ ...form, gmail: e.target.value })} style={{ width: "100%", marginBottom: 5 }} />
          <input placeholder="Kullanıcı adı" onChange={(e) => setForm({ ...form, username: e.target.value })} style={{ width: "100%", marginBottom: 5 }} />
          <input placeholder="8 haneli şifre" onChange={(e) => setForm({ ...form, password: e.target.value })} style={{ width: "100%", marginBottom: 5 }} />

          <button onClick={login} style={{ width: "100%", background: "green", color: "white" }}>
            Giriş Yap
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: 20, background: "#f0fff0", minHeight: "100vh" }}>

      <div style={{ display: "flex", justifyContent: "space-between", background: "#7CFC90", padding: 10, borderRadius: 10 }}>
        <div>🕶️ PLAGG SYSTEM v2</div>
        <div>🧀 Peynir: {cheese}</div>
      </div>

      <h2>🎮 OYUN MAĞAZASI</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
        {games.map((g) => (
          <div key={g} style={{ background: "white", padding: 10, borderRadius: 10 }}>
            <h4>{g}</h4>
            <p>300 🧀 kazan</p>
            <button onClick={() => buyGame(g)} style={{ background: "black", color: "white", width: "100%" }}>
              SATIN AL
            </button>
          </div>
        ))}
      </div>

      <h2>📚 KÜTÜPHANE</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
        {library.map((g) => (
          <div key={g} style={{ background: "#caffca", padding: 10, borderRadius: 10 }}>
            <h4>{g}</h4>
            <button style={{ width: "100%" }}>▶ OYNA</button>
          </div>
        ))}
      </div>

    </div>
  );
}
