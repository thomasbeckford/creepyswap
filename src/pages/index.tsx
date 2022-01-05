import { useEffect } from 'react'

import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'

import Card from '../components/Card'
import useEagerConnect from '../hooks/useEagerConnect'
import { Meta } from '../layout/Meta'
import { fetchInSpiritDataAsync } from '../redux/actions'
import { Main } from '../templates/Main'
import { HomeContainer } from './styled'

function Index() {
  const { account } = useWeb3React()
  const dispatch = useDispatch()
  useEagerConnect()

  useEffect(() => {
    if (account) {
      dispatch(fetchInSpiritDataAsync(account))
    }
  }, [account])

  return (
    <Main
      meta={<Meta title="CreepySwap" description="CreepySwap for Fantom" />}
    >
      <h2>Home Page</h2>
      <HomeContainer>
        <Card
          title="Swap"
          description="this card is Swapping is Swapping is Swapping is Swapping "
        />
        <Card title="Liquidity" description="this card is" />
        <Card title="Farm" description="this card is" />
        <Card title="Stake" description="this card is" />
        <Card title="Bridge" description="this card is" />
      </HomeContainer>
    </Main>
  )
}

export default Index
