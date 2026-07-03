type Props = {
    onClick: () => void;
    scanType: "quick" | "full" | "custom";
    onScanTypeChange: (type: "quick" | "full" | "custom") => void;
};

export default function ScanButton({ onClick, scanType, onScanTypeChange }: Props) {
    return (
        <div className="scan-buttons">
            <button
                className={`scan-button ${scanType === "quick" ? "active" : ""}`}
                onClick={() => { onScanTypeChange("quick"); }}
            >
                🔍 Quick Scan
            </button>
            <button
                className={`scan-button ${scanType === "full" ? "active" : ""}`}
                onClick={() => { onScanTypeChange("full"); }}
            >
                🚀 Full Scan
            </button>
            <button
                className={`scan-button ${scanType === "custom" ? "active" : ""}`}
                onClick={() => { onScanTypeChange("custom"); }}
            >
                ⚙️ Custom Scan
            </button>
        </div>
    );
}
