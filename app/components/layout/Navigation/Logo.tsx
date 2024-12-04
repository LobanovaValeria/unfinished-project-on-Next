import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import logoImage from '@/assets/images/logo.svg';

const Logo:FC=()=>{
    return (
        <Link href='/'>
            <a className='px-layout mb-10 block'>
                <Image 
                src={logoImage} 
                alt="logo"
                width={247}
                height={34}
                
                />
                
            </a>
        </Link>
    );
}
export default Logo;