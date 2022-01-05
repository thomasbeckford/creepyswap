import React from 'react'

import Image from 'next/image'

type LogoProps = {
  width?: number
  height?: number
}

export function Logo({ width, height }: LogoProps) {
  return (
    <Image
      src="/images/owl.png"
      alt="nextjs"
      width={width || '100%'}
      height={height || '100%'}
    />
  )
}
