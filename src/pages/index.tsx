import { useEffect } from 'react'

import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'

import Card from '../components/Card'
import useEagerConnect from '../hooks/useEagerConnect'
import { Meta } from '../layout/Meta'
import { fetchInSpiritDataAsync } from '../redux/actions'
import { Main } from '../templates/Main'
import {
  CardContainer,
  HomeContainer,
  Subtitle,
  Title,
  TitleContainer,
} from '../styles/styled'

function Index() {
  const { account } = useWeb3React()
  const dispatch = useDispatch()
  useEagerConnect()

  useEffect(() => {
    if (account) {
      dispatch(fetchInSpiritDataAsync(account))
    }
  }, [account, dispatch])

  return (
    <Main
      meta={<Meta title="CreepySwap" description="CreepySwap for Fantom" />}
    >
      <HomeContainer>
        <TitleContainer>
          <Title>All in one decentralized exchange.</Title>
          <Subtitle>
            Do it Cheaper and faster with Fantom Opera network.
          </Subtitle>
        </TitleContainer>

        <CardContainer>
          <Card
            title="Swap"
            description="this card is Swapping is Swapping is Swapping is Swapping "
          />
          <Card title="Liquidity" description="this card is" />
          <Card title="Farm" description="this card is" />
          <Card title="Stake" description="this card is" />
          <Card title="Bridge" description="this card is" />
          <Card title="NFT" description="this card is river " />
        </CardContainer>
      </HomeContainer>
    </Main>
  )
}

export default Index
