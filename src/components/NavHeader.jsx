import {
    SfButton,
    SfIconShoppingCart,
    SfIconFavorite,
    SfIconPerson,
    SfIconMenu,
    SfBadge,
} from '@storefront-ui/react';
import brandLogo from '../img/logo.svg'
import cartIcon from '../img/cart.svg'
import messageIcon from '../img/message-circle.svg'
import banner from '../img/banner.png'
import { useFrappeAuth } from 'frappe-react-sdk';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag01, MessageCircle01  } from '@untitled-ui/icons-react'; 
import hondaLogo from '../img/hondaLogo.png'

const NavHeader = () => {
    const navigate = useNavigate();
    const { cartCount, setIsOpen } = useCart()
    const { currentUser } = useFrappeAuth()

    const actionItems = [
      {
        icon: (<MessageCircle01 />),
        label: '',
        ariaLabel: 'Message',
        role: 'button',
        onClick: () => setIsOpen(true)
      },
      {
        icon: (<ShoppingBag01 viewBox='0 0 24 24' width="22" height="22"/>),
        label: '',
        ariaLabel: 'Cart',
        role: 'button',
        onClick: () => null,
      },
    ];

    const navigation = [
      { name: 'สินค้าใหม', href: '#' },
      { name: 'ช้อป', href: '#' },
      { name: 'ฟีเจอร', href: '#' },
      { name: 'สินค้าลดราคา', href: '#' },
      { name: 'Brands', href: '#' },
    ]

    return (
      <>

      <header className="bg-indigo-600">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
        <header className="flex justify-center w-full z-[999] border-b border-b-[#EBEBEB]">
            <div className="flex flex-wrap lg:flex-nowrap items-center flex-row justify-start h-full max-w-[1536px] w-full m-4 rounded-[9px] justify-center" style={{backdropFilter:"blur(3px)"}}>
                <a
                  href="/"
                  aria-label="SF Homepage"
                  className="flex mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
                >
                  <picture>
                    <source srcSet={hondaLogo} media="(min-width: 768px)" />
                    <img
                      src={hondaLogo}
                      alt="Sf Logo"
                      className="w-[60px]"
                    />
                  </picture>
                </a>
            </div>
        </header>
        </>
    )
}

export default NavHeader
