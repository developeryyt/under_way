import {ReactNode} from "react";
import styles from './container.module.scss';


const Container = ({ children }: {children?: ReactNode}) => {
    return (
        <div className={styles['container']}>
            {children}
        </div>
    );
};

export default Container;