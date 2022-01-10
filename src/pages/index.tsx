import { useEffect } from 'react'

import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'

import Card from '../components/Card'
import useEagerConnect from '../hooks/useEagerConnect'
import { Meta } from '../layout/Meta'
import { fetchInSpiritDataAsync } from '../redux/actions'
import { Main } from '../templates/Main'
import {
  Wrapper,
  HomeContainer,
  // Subtitle,
  // Title,
  // TitleContainer,
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
        <Card>
          <Wrapper>
            <div>
              <p>Total Value Locked</p>
              <p>$1,122,289,067</p>
            </div>
            <div>
              <p>Market Cap</p>
              <p>$182,643,385</p>
            </div>
            <div>
              <p>Circulating Creepys</p>
              <p>6,023,369</p>
            </div>
          </Wrapper>
        </Card>
      </HomeContainer>
    </Main>
  )
}

export default Index
