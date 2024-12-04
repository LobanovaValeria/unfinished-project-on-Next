import { FC } from "react";
import { IMenu } from "./menu.interface";
import MenuItem from "./MenuItem";
import styles from './Menu.module.scss';
import AuthItems from "./auth/AuthItems";

const Menu: FC<{menu: IMenu}>=({menu: {items, title}})=>{
    return (
        <div className={styles.menu}>
            <div className={styles.content}>{title}</div>
            <ul className={styles.ul}>
                {
                    items.map(item => (
                        <MenuItem item={item} key={item.link}/>
                    ))
                }
                {
                    title==='General'? <AuthItems/>:null
                }
            </ul>
            Menu
        </div>
    );
}
export default Menu;