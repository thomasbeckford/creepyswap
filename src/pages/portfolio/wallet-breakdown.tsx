import CountUpNumber from "@/components/CountUp";
import { TokenData } from "@/types";
import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";

const WalletBreakdown = ({ tokens }: any) => (
  <Table
    borderWidth="1px"
    size="md"
    variant="striped"
    colorScheme={"blackAlpha"}
    boxShadow="0px 0px 10px rgba(0, 0, 0, 0.6)"
  >
    <TableCaption textAlign={"right"}>
      Total Value:
      <CountUpNumber
        value={tokens.total24ValueNumber}
        prefix="$"
        decimals={0}
      />
    </TableCaption>
    <Thead>
      <Tr>
        <Th>Asset</Th>
        <Th>Price</Th>
        <Th isNumeric>Amount</Th>
      </Tr>
    </Thead>

    <Tbody>
      {tokens.tokenList.map((token: TokenData) => (
        <Tr key={token.address + token.name}>
          <Td>
            <Flex alignItems={"center"} gap="3">
              <Image
                src={token.icon}
                width="24px"
                height="24px"
                fallbackSrc={"https://via.placeholder.com/24"}
                borderRadius={15}
                alt={token.name}
              />
              <Box>
                <Text fontWeight={"bold"}>{token.full_name}</Text>
                <Text>({token.symbol})</Text>
              </Box>
            </Flex>
          </Td>

          <Td>
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
);

export default WalletBreakdown;
