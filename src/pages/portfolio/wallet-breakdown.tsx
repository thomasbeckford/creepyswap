import CountUpNumber from '@/components/CountUp';
// import { formatAMPM } from "@/helpers/dates";
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

const WalletBreakdown = ({ tokens }: any) => (
  <>
    {tokens.tokenList.length ? (
      <Table size="sm">
        <TableCaption textAlign={'right'}>
          <Text fontWeight={'bold'}>Total Value</Text>
          <CountUpNumber
            value={tokens.total24ValueNumber}
            prefix="$"
            decimals={2}
          />
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Asset</Th>
            <Th isNumeric>Price</Th>
            <Th isNumeric>Amount</Th>
          </Tr>
        </Thead>

        <Tbody overflowX={'hidden'} overflowY="scroll">
          {tokens?.tokenList?.map((token: TokenData) => (
            <Tr key={token.address + token.name}>
              <Td display="flex" alignItems="center" gap="3">
                <Image
                  src={token.icon}
                  width="34px"
                  height="34px"
                  fallbackSrc={'https://via.placeholder.com/24'}
                  borderRadius={15}
                  alt={token.name}
                />

                <Text fontSize="large" fontWeight={'700'}>
                  {token.symbol}
                </Text>
              </Td>

              <Td isNumeric>
                <CountUpNumber
                  value={Number(token.rate)}
                  decimals={6}
                  color="white"
                />
              </Td>

              <Td isNumeric>
                <CountUpNumber value={Number(token.amount)} decimals={6} />

                <CountUpNumber
                  value={Number(token.usd)}
                  decimals={0}
                  prefix="$"
                  color="rgb(82, 213, 185)"
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

export default WalletBreakdown;
