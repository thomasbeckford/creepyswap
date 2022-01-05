import React, { useState } from 'react'

import Link from 'next/link'
import router from 'next/router'

import navigation from '../../templates/navigation'
// import ConnectButton from '../ConnectWalletButton';
import { Button } from '../Button'
import { Logo } from '../logo'
import { Toggle } from '../Toggle'
import {
  ImageContainer,
  NavContainer,
  NavItem,
  NavList,
  RightContainer,
  Wrapper,
} from './styled'

export default function NavBar() {
  const [selected, setSelected] = useState<string | undefined>(router?.route)

  return (
    <Wrapper>
      <ImageContainer>
        <Logo />
      </ImageContainer>
      <NavContainer>
        <NavList>
          {navigation.map(({ title, index, path }) => (
            <NavItem
              key={index}
              onClick={() => setSelected(path)}
              selected={selected}
              path={path}
            >
              <Link href={path}>{title}</Link>
            </NavItem>
          ))}
        </NavList>
      </NavContainer>
      {/* <ConnectButton /> */}

      <RightContainer>
        <Button scale="md" variant="tertiary">
          Launch App
        </Button>
        <Toggle />
      </RightContainer>
    </Wrapper>
  )
}
