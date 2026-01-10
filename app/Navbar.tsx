'use client';
import Link from 'next/link'
import { HiMiniBugAnt } from "react-icons/hi2";
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const Navbar = () => {
  const pathname = usePathname();
    const links = [
        {label:'Dashboard', href:'/'},
        {label:'Issues', href:'/issues'}
    ];
  return (
    <nav className='flex space-x-6 mb-5 px-5 border-b h-14 items-center'>
         <Link href='/'><HiMiniBugAnt /></Link>
         <ul className='flex space-x-6'>
            {
                links.map(link => <Link href={link.href} key={link.href} className={classNames({
                  'text-zinc-950': link.href === pathname,
                  'text-zinc-500': link.href !== pathname,
                  'hover:text-zinc-800 transition-colors' : true

                })}>{link.label}</Link>)
            }
         </ul>
    </nav>
  )
}

export default Navbar