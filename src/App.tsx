import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ScanButton from './components/ScanButton';
import StatusCard from './components/StatusCard';

export default function App() {
    const [status, setStatus] = useState("Protected");
    const [sandboxCode, setSandboxCode] = useState("");

    useEffect(() => {
        // Simulate instant virus detection
        if (sandboxCode.includes("malware")) {
            setStatus("Virus Detected!");
        } else {
            setStatus("No Virus Found.");
        }
    }, [sandboxCode]);

    const handleSandboxChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSandboxCode(e.target.value);
    };

    return (
        <div className="app">
            <Header />
            <main>
                <StatusCard title="Scan Status" value={status} />
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
