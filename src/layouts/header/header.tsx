import Mylocation from "@/components/mylocation";
import styles from './header.module.scss'
import Link from "next/link";

const Header = () => {

    return (
        <header className={styles['header']}>
            <div className={styles['top']}>
                <h1>
                    <Link href='/'>LOGO</Link>
                </h1>
                <Mylocation/>
            </div>
        </header>
    );
};

export default Header;