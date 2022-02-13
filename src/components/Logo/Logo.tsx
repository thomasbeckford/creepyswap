import { Box, Text } from '@chakra-ui/react';

const Logo = ({ showName }: { showName?: boolean }) => {
  return (
    <Box
      position="fixed"
      left="7"
      top="2"
      display="flex"
      alignContent="center"
      alignItems="center"
    >
      <Box height={45} bg="teal.300" width={45} borderRadius={16} />
      {showName && (
        <Text ml={3} fontWeight="bold" fontSize="25px">
          CreepySwap
        </Text>
      )}
    </Box>
  );
};

export default Logo;
