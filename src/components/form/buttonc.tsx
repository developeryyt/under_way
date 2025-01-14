'use client';

interface ButtoncProps {
    text?: string;
    onClick: () => void;
    type: 'button' | 'submit' | 'reset';
    className?: string;
}


const Buttonc = ({ text, onClick, type, className = '' }: ButtoncProps) => {


    return (
        <button
            onClick={onClick}
            type={type}
            className={`btn ${className}`}
        >{text}</button>
    );
};

export default Buttonc;