'use client';
import { VscColorMode } from "react-icons/vsc";
import styles from './themebtn.module.scss';
import {useThemeContext} from "@/context/ThemeContext";

const Themebtn = () => {

    const { toggleTheme  } = useThemeContext()

    return (
        <div className={styles['btn_wrap']}>
            <button
                className={`btn ${styles['btn_theme']}`}
                onClick={toggleTheme}
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