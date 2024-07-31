interface CardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function Card({ title, children, className }: CardProps) {
    return (
        <div className={`bg-gray-800 border rounded-lg shadow-lg p-6 ${className}`}>
            <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
            <div>{children}</div>
        </div>
    );
}