import "./App.css";

export default function App() {
  return (
    <div className="app">
      <h1>🛡️ Porky Antivirus</h1>

      <div className="card">
        <h2>System Status</h2>
        <p>Your device is protected.</p>

        <button>Run Quick Scan</button>
      </div>

      <div className="card">
        <h2>Last Scan</h2>
        <p>Never</p>
      </div>
    </div>
  );
}