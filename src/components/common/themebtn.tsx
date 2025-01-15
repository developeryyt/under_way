'use client';
import { VscColorMode } from "react-icons/vsc";
import styles from './themebtn.module.scss';

const Themebtn = () => {



    return (
        <div className={styles['btn_wrap']}>
            <button
                className={`btn ${styles['btn_theme']}`}
                onClick={() => {}}
                type='button'
            >
                <span>
                    <VscColorMode />
                </span>
            </button>
        </div>
    );
};

export default Themebtn;