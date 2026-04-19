import { useState } from "react";

const games = [
  "Garten of Banban 1",
  "Garten of Banban 2",
  "Garten of Banban 3",
  "Cuphead",
  "UNDERTALE",
  "BENDY",
  "DELTARUNE",
  "INDIE CROSS FNF",
  "Poppy Playtime 1-5"
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
      alert("Bilgileri doğru gir!");
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
      <div className="center">
        <div className="card">
          <h2>Plagg Giriş</h2>
          <input placeholder="Gmail" onChange={(e)=>setForm({...form,gmail:e.target.value})}/>
          <input placeholder="Kullanıcı Adı" onChange={(e)=>setForm({...form,username:e.target.value})}/>
          <input placeholder="8 haneli şifre" onChange={(e)=>setForm({...form,password:e.target.value})}/>
          <button onClick={login}>Giriş</button>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="topbar">
        🕶️ PLAGG
        <span>🧀 {cheese}</span>
      </div>

      <h2>Oyunlar</h2>
      <div className="grid">
        {games.map(g=>(
          <div className="card" key={g}>
            <p>{g}</p>
            <button onClick={()=>buyGame(g)}>Satın Al</button>
          </div>
        ))}
      </div>

      <h2>Kütüphane</h2>
      <div className="grid">
        {library.map(g=>(
          <div className="card" key={g}>
            <p>{g}</p>
            <button>Oyna</button>
          </div>
        ))}
      </div>
    </div>
  )
}
