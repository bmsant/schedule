interface ButtonProps {
    variant: 'primary' | 'secondary' | 'tertiary';
    children: React.ReactNode;
}

export default function Button({ variant, children }: ButtonProps) {
    const baseStyle = 'px-4 py-2 font-semibold rounded';
    const styles = {
        primary: `${baseStyle} bg-blue-500 text-white hover:bg-blue-700`,
        secondary: `${baseStyle} bg-gray-500 text-white hover:bg-gray-700`,
        tertiary: `${baseStyle} bg-green-500 text-white hover:bg-green-700`,
    };

    return (
        <button className={styles[variant]}>
            {children}
        </button>
    );
}