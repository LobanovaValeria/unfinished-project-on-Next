import { FC } from "react";
import { IHome } from "./home.interface";
import Layout from "@/components/layout/Layout";

const Home:FC<IHome>=()=>{
    return (
        <div>
            <Layout/>
                <h1>Home page</h1>
            
        </div>
    );
}
export default Home;