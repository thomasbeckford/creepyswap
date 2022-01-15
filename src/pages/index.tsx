import Card from '../components/Card';
import { Meta } from '../layout/Meta';
import { Wrapper, HomeContainer } from '../styles/styled';
import { Main } from '../templates/Main';

function Index() {
  return (
    <Main
      meta={<Meta title="CreepySwap" description="CreepySwap for Fantom" />}
    >
      <HomeContainer>
        <Card>
          <Wrapper>
            <div>
              <p style={{ fontSize: '20px', marginBottom: 0 }}>
                Total Value Locked
              </p>
              <p style={{ fontSize: 30, marginTop: 5, marginBottom: 8 }}>
                $1,122,289,067
              </p>
            </div>
            <div>
              <p style={{ fontSize: '20px', marginBottom: 0 }}>Market Cap</p>
              <p style={{ fontSize: 30, marginTop: 5, marginBottom: 8 }}>
                $182,643,385
              </p>
            </div>
            <div>
              <p style={{ fontSize: '20px', marginBottom: 0 }}>
                Circulating Creepys
              </p>
              <p style={{ fontSize: 30, marginTop: 5, marginBottom: 8 }}>
                6,023,369
              </p>
            </div>
          </Wrapper>
        </Card>
      </HomeContainer>
    </Main>
  );
}

export default Index;
