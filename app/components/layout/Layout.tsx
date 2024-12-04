import { FC } from "react";
import styles from './Layout.module.scss';
import Navigation from "./Navigation/Navigation";
import SideBar from "./SideBar/SideBar";

const Layout:FC=({})=>{
    return (
        <div className={styles.layout}>
            <Navigation/>
            <div className={styles.content}>{}</div>
            <SideBar/>
        </div>
    );
}
export default Layout;