import "./App.css";

import Header from "./components/Header";
import StatusCard from "./components/StatusCard";
import ScanButton from "./components/ScanButton";

export default function App() {

    function runScan() {
        alert("Quick Scan Started");
    }

    return (
        <div className="app">

            <Header />

            <div className="grid">

                <StatusCard
                    title="Protection"
                    value="Active"
                />

                <StatusCard
                    title="Threats"
                    value="0"
                />

                <StatusCard
                    title="Last Scan"
                    value="Never"
                />

                <StatusCard
                    title="Version"
                    value="1.0"
                />

            </div>

            <ScanButton
                onClick={runScan}
            />

        </div>
    );

}