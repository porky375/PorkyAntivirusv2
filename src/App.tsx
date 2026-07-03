import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ScanButton from './components/ScanButton';
import StatusCard from './components/StatusCard';

export default function App() {
    const [progress, setProgress] = useState(0);
    const [scanning, setScanning] = useState(false);
    const [status, setStatus] = useState("Protected");
    const [sandboxCode, setSandboxCode] = useState("");

    useEffect(() => {
        if (!scanning) return;

        // Simulate a faster scan
        let interval = setInterval(() => {
            setProgress(prevProgress => prevProgress + 1);
            if (progress >= 100) {
                clearInterval(interval);
                setStatus("Scan Complete");
                setScanning(false);
            }
        }, 20); // Reduced interval for faster scanning

        return () => clearInterval(interval);
    }, [scanning, progress]);

    function runScan() {
        if (scanning) return;

        setProgress(0);
        setStatus("Scanning...");
        setScanning(true);
    }

    const handleSandboxChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSandboxCode(e.target.value);
    };

    return (
        <div className="app">
            <Header />
            <main>
                <StatusCard title="Scan Status" value={status} />
                <StatusCard title="Progress" value={`${progress}%`} />
                <ScanButton onClick={runScan} />
                <textarea
                    className="sandbox"
                    placeholder="Enter code to test in sandbox"
                    value={sandboxCode}
                    onChange={handleSandboxChange}
                ></textarea>
            </main>
        </div>
    );
}
