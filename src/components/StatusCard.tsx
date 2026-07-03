type Props = {
    title: string;
    value: string;
};

export default function StatusCard({ title, value }: Props) {
    return (
        <div className="status-card">
            <h3>{title}</h3>
            <h2>{value}</h2>
        </div>
    );
}