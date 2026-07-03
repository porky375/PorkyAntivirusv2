import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ScanButton from './components/ScanButton';
import StatusCard from './components/StatusCard';
import Notification from './components/Notification';

export default function App() {
    const [status, setStatus] = useState("Protected");
    const [sandboxCode, setSandboxCode] = useState("");
    const [notification, setNotification] = useState({ message: "", type: "info" });
    const [scanType, setScanType] = useState<"quick" | "full" | "custom">("quick");
    const [scanHistory, setScanHistory] = useState<{ timestamp: string, status: string }[]>([]);
    const [exclusions, setExclusions] = useState<string[]>([]);

    useEffect(() => {
        // Simulate instant virus detection
        if (sandboxCode.includes("malware")) {
            setStatus("Virus Detected!");
            setNotification({ message: "Virus detected in sandbox code.", type: "error" });
            logScanResult("Virus Detected!", sandboxCode);
        } else {
            setStatus("No Virus Found.");
            setNotification({ message: "Scan completed successfully.", type: "success" });
            logScanResult("No Virus Found.", sandboxCode);
        }
    }, [sandboxCode]);

    const handleSandboxChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSandboxCode(e.target.value);
    };

    const handleScanTypeChange = (type: "quick" | "full" | "custom") => {
        setScanType(type);
    };

    const logScanResult = (status: string, code: string) => {
        console.log(`Scan Result - Status: ${status}, Code: ${code}`);
        setScanHistory(prevHistory => [...prevHistory, { timestamp: new Date().toISOString(), status }]);
    };

    return (
        <div className="app">
            <Header />
            <main>
                {notification.message && <Notification message={notification.message} type={notification.type} />}
                <StatusCard title="Scan Status" value={status} />
                <textarea
                    className="sandbox"
                    placeholder="Enter code to test in sandbox"
                    value={sandboxCode}
                    onChange={handleSandboxChange}
                ></textarea>
                <ScanButton onClick={() => {}} scanType={scanType} onScanTypeChange={handleScanTypeChange} />
            </main>
        </div>
    );
}
