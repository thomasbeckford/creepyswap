import CountUpNumber from '@/components/CountUp';
import { TokenData } from '@/types';
import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  Image,
} from '@chakra-ui/react';

const FarmingRewards = ({ liquidity }: any) => (
  <>
    {liquidity.farmList.length ? (
      <Table size="sm">
        <TableCaption textAlign={'right'}>
          <Text fontWeight={'bold'}>Total Value</Text>
          <CountUpNumber
            value={liquidity.total24ValueNumber}
            prefix="$"
            decimals={0}
          />
        </TableCaption>

        <Thead>
          <Tr>
            <Th>Asset</Th>
            <Th isNumeric>Staked</Th>
            <Th isNumeric>Earned</Th>
            <Th isNumeric>Usd Value</Th>
          </Tr>
        </Thead>

        <Tbody maxHeight={400} overflowX={'hidden'} overflowY="scroll">
          {liquidity.farmList.map((farm: TokenData) => (
            <Tr key={farm.address + farm.name}>
              <Td display="flex" alignItems="center" gap="3">
                <Image
                  src={farm.icon}
                  width="34px"
                  height="34px"
                  fallbackSrc={'https://via.placeholder.com/24'}
                  borderRadius={15}
                  alt={farm.name}
                />

                <Text fontSize="large">{farm.symbol}</Text>
              </Td>

              <Td isNumeric>
                <CountUpNumber
                  value={Number(farm.rate)}
                  decimals={6}
                  color="white"
                />
              </Td>

              <Td isNumeric>
                <CountUpNumber value={Number(farm.amount)} decimals={6} />

                <CountUpNumber
                  value={Number(farm.usd)}
                  decimals={0}
                  prefix="$"
                  color="rgb(82, 213, 185)"
                />
              </Td>
              <Td isNumeric>
                <CountUpNumber
                  value={Number(farm.rate)}
                  decimals={6}
                  color="white"
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    ) : (
      <Text textAlign="center" fontSize="lg">
        No data
      </Text>
    )}
  </>
);

export default FarmingRewards;
