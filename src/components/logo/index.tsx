import React from 'react'

import Image from 'next/image'

type LogoProps = {
  width?: number
  height?: number
}

export function Logo({ width, height }: LogoProps) {
  return (
    <Image
      src="/images/main.png"
      alt="nextjs"
      width={width || 96}
      height={height || 58}
    />
  )
}
