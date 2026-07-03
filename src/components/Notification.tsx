type Props = {
    message: string;
    type: "info" | "success" | "error";
};

export default function Notification({ message, type }: Props) {
    return (
        <div className={`notification ${type}`}>
            {message}
        </div>
    );
}
