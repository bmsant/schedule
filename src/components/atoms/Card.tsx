interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className }: CardProps) {
    return (
        <div className={`rounded-lg shadow-lg p-6 ${className}`}>
            <div>{children}</div>
        </div>
    );
}