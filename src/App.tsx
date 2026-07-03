import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ScanButton from './components/ScanButton';
import StatusCard from './components/StatusCard';
import Notification from './components/Notification';

export default function App() {
    const [status, setStatus] = useState("Protected");
    const [sandboxCode, setSandboxCode] = useState("");
    const [notification, setNotification] = useState({ message: "", type: "info" });

    useEffect(() => {
        // Simulate instant virus detection
        if (sandboxCode.includes("malware")) {
            setStatus("Virus Detected!");
            setNotification({ message: "Virus detected in sandbox code.", type: "error" });
        } else {
            setStatus("No Virus Found.");
            setNotification({ message: "Scan completed successfully.", type: "success" });
        }
    }, [sandboxCode]);

    const handleSandboxChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSandboxCode(e.target.value);
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
                <ScanButton onClick={() => {}} />
            </main>
        </div>
    );
}
