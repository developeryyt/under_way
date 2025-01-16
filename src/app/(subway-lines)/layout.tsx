import Header from "@/layouts/header/header";
import Container from "@/layouts/container/container";
import {ReactNode} from "react";
import {ThemeProvider} from "@/context/ThemeContext";

const Layout = ({ children }: { children?: ReactNode }) => {

    return (
        <ThemeProvider>
            <div className='layout'>
                <div className='inner'>
                    <Header/>
                    <Container>
                        {children}
                    </Container>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Layout;