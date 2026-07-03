type Props = {
    onClick: () => void;
};

export default function ScanButton({ onClick }: Props) {
    return (
        <button
            className="scan-button"
            onClick={onClick}
        >
            🔍 Run Quick Scan
        </button>
    );
}