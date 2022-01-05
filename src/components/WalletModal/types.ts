import { FC } from 'react'

import { SvgProps } from '../../../public/svg/types'

export enum ConnectorNames {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
}

export type Login = (connectorId: ConnectorNames) => void

export interface Config {
  title: string
  icon: FC<SvgProps>
  connectorId: ConnectorNames
}
