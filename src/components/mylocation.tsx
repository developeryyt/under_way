'use client';
import {FaSearchLocation} from "react-icons/fa";
import styles from './mylocation.module.scss';


const Mylocation = () => {



    return (
        <div className='mylocation_wrap'>
            <button
                onClick={() => {}}
                type='button'
                className={`btn ${styles?.['btn_mylocation']}`}
            >
                <span className={styles?.['text']}>내 주변역(Nearby Station)</span>
                <span className={styles?.['icons']}>
                    <FaSearchLocation />
                </span>
            </button>
        </div>
    );
};

export default Mylocation;