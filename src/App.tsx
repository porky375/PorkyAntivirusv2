import "./App.css";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import StatusCard from "./components/StatusCard";
import ScanButton from "./components/ScanButton";

export default function App() {

    const [progress, setProgress] = useState(0);
    const [scanning, setScanning] = useState(false);
    const [status, setStatus] = useState("Protected");

    useEffect(() => {

        if (!scanning) return;

        if (progress >= 100) {
            setScanning(false);
            setStatus("No Threats Found");
            return;
        }

        const timer = setTimeout(() => {
            setProgress(progress + 1);
        }, 40);

        return () => clearTimeout(timer);

    }, [progress, scanning]);

    function runScan() {

        if (scanning) return;

        setProgress(0);
        setStatus("Scanning...");
        setScanning(true);

    }

    return (

        <div className="app">

            <Header />

            <div className="grid">

                <StatusCard
                    title="Protection"
                    value={status}
                />

                <StatusCard
                    title="Threats"
                    value="0"
                />

                <StatusCard
                    title="Progress"
                    value={`${progress}%`}
                />

                <StatusCard
                    title="Version"
                    value="1.0"
                />

            </div>

            <div className="progress-container">

                <div
                    className="progress-bar"
                    style={{
                        width: `${progress}%`
                    }}
                />

            </div>

            <ScanButton
                onClick={runScan}
            />

        </div>

    );

}