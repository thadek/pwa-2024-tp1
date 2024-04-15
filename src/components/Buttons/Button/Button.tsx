import { ReactNode } from "react";
import style from './Button.module.css'


export default function Button({ children, onClick, className }: Readonly<{ children: ReactNode; onClick: () => void; className?: string }>){
    return (
        <button
            className={`${style.button} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}