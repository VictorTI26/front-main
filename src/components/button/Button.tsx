import { ReactNode } from 'react';

export default function Button({ children, type = "button", className = "", onClick}: { children: ReactNode, type?: "button" | "submit" | "reset" | undefined, className?: string, onClick?: () => void }) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`font-poppins px-4 py-2 w-full bg-white rounded text-preto font-bold border border-azul shadow-md ${className}`}>
            {children}
        </button>
    );
}