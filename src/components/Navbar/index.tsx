import React, { Fragment, useState } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { ethers } from 'ethers';
import Link from 'next/link';
import { useRouter } from 'next/router';

import navigation from '../../templates/navigation';
import {
  ImageContainer,
  NavContainer,
  NavItem,
  NavList,
  RightContainer,
  Title,
  Wrapper,
} from './styled';

declare global {
  interface Window {
    ethereum: any;
  }
}

export default function Navbar() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | undefined>(router.route);
  const [isOpen, setIsOpen] = useState(false);

  const connectMetamaskWithEthers = async () => {
    setIsOpen(true);
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.getSigner();
    }
  };

  return (
    <Wrapper>
      <ImageContainer style={{ cursor: 'pointer' }}>
        <div
          style={{
            width: 35,
            height: 35,
            background: '#bbb',
            borderRadius: 20,
            marginRight: 10,
          }}
        />
        <Title>CreepySwap</Title>
      </ImageContainer>

      <NavContainer>
        <NavList>
          {navigation.map(({ title, index, path, color }) => (
            <NavItem
              key={index}
              onClick={() => setSelected(path)}
              selected={selected}
              color={color}
              path={path}
            >
              <Link href={path}>{title}</Link>
            </NavItem>
          ))}
        </NavList>
      </NavContainer>

      <RightContainer>
        <div
          style={{
            width: 35,
            height: 35,
            background: '#bbb',
            borderRadius: 20,
            marginRight: 10,
          }}
        />
        <p className="p-0 mr-5 m-0">$0.505</p>
        <button
          className="bg-slate-800 border-slate-900 border rounded p-1.5 hover:bg-slate-800 hover:border-slate-700"
          onClick={connectMetamaskWithEthers}
        >
          Connect Wallet
        </button>
      </RightContainer>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 text-center pb-5"
                >
                  Connect your Wallet
                </Dialog.Title>
                <div className="max-w-md p-6 text-center text-sm text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200">
                  Metamask
                </div>
                <div className="mt-2">
                  <div className="max-w-md p-6 text-center text-sm text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 ">
                    Trust
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </Wrapper>
  );
}
