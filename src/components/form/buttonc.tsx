'use client';
import styles from './buttonc.module.scss';

interface ButtoncProps {
    text?: string;
    onClick: () => void;
    type: 'button' | 'submit' | 'reset';
}


const Buttonc = ({ text, onClick, type }: ButtoncProps) => {


    return (
        <button
            onClick={onClick}
            type={type}
            className={styles?.['btn']}
        >{text}</button>
    );
};

export default Buttonc;