import Header from "@/layouts/header/header";
import Container from "@/layouts/container/container";
import {ReactNode} from "react";

const Layout = ({ children }: { children?: ReactNode }) => {


    return (
        <div className='layout'>
            <div className='inner'>
                <Header/>
                <Container>
                    {children}
                </Container>
            </div>
        </div>
    )
}

export default Layout;