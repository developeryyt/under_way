import Mylocation from "@/components/mylocation";
import styles from './header.module.scss'
import Link from "next/link";
import Themebtn from "@/components/common/themebtn";

const Header = () => {

    return (
        <header className={styles['header']}>
            <div className={styles['top']}>
                <h1>
                    <Link href='/'>LOGO</Link>
                </h1>
                <div className={styles['util_box']}>
                    <Themebtn />
                    <Mylocation/>
                </div>
            </div>
        </header>
    );
};

export default Header;