import React from 'react';

interface ButtonProps {
    variant: 'primary' | 'secondary' | 'tertiary';
    children: React.ReactNode;
    onClick?: () => void;
}

export default function Button({ variant, children, onClick }: ButtonProps) {
    const baseStyle = 'px-4 py-2 font-semibold rounded';
    const styles = {
        primary: `${baseStyle} bg-gray-500 text-white hover:bg-gray-700`,
        secondary: `${baseStyle} bg-green-500 text-white hover:bg-green-700`,
        tertiary: `${baseStyle} bg-red-500 text-white hover:bg-red-700`,
    };

    return (
        <button onClick={onClick} className={styles[variant]}>
            {children}
        </button>
    );
}