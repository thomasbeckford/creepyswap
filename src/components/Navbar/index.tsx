import React, { useState } from 'react'

import Link from 'next/link'
import router from 'next/router'

import navigation from '../../templates/navigation'
// import { Button } from '../Button'
// import { Logo } from '../Logo'
// import { Toggle } from '../Toggle'
import {
  ImageContainer,
  NavContainer,
  NavItem,
  NavList,
  RightContainer,
  Title,
  Wrapper,
} from './styled'
import ConnectButton from '../ConnectWalletButton'
// import { Button } from '../Button'
// import { useSettingsModal } from '../SettingsModal'

export default function Navbar() {
  const [selected, setSelected] = useState<string | undefined>(router?.route)
  // const { onPresentSettingsModal } = useSettingsModal()

  return (
    <Wrapper>
      <ImageContainer>
        {/* <Logo width={50} height={50} /> */}
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
        <ConnectButton />
      </RightContainer>
    </Wrapper>
  )
}
