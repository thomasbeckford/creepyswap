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

const FarmingRewards = ({ liquidity }: any) => (
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

    <Tbody>
      {liquidity.farmList.map((farm: TokenData) => (
        <Tr key={farm.address + farm.name}>
          <Td>
            <Flex alignItems={"center"} gap="3">
              <Image
                src={farm.icon}
                width="24px"
                height="24px"
                fallbackSrc={"https://via.placeholder.com/24"}
                borderRadius={15}
                alt={farm.name}
              />
              <Box>
                <Text fontWeight={"bold"}>{farm.full_name}</Text>
                <Text>({farm.symbol})</Text>
              </Box>
            </Flex>
          </Td>

          <Td>
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
          <Td>
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
);

export default FarmingRewards;
