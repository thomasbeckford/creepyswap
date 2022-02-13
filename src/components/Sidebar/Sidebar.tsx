import { Navigation } from '@/utils/navigation';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { selectSidebarIsOpen } from '@/redux/sidebar/selectors';
import { setSidebarIsOpen } from '@/redux/sidebar';

export default function Sidebar() {
  const sidebarIsOpen = useAppSelector(selectSidebarIsOpen);
  const dispatch = useAppDispatch();
  const sidebarRef = useRef<any>();
  const toggleSidebar = () => {
    dispatch(setSidebarIsOpen(!sidebarIsOpen));
  };

  return (
    <>
      <Box
        ref={sidebarRef}
        transition={'all 0.2s ease 0s'}
        transform="translate3d(0px, 0px, 0px)"
        border="1px solid rgb(55, 65, 81)"
        width={{ base: '50%', md: sidebarIsOpen ? 240 : 20 }}
        margin="0px 10px"
        borderRadius="8px"
        color="#fff"
        bg={{ base: 'rgba(20,20,20,.9)', md: 'rgba(60,60,60,0.5)' }}
        display={{ base: sidebarIsOpen ? 'block' : 'none', md: 'flex' }}
        position="fixed"
        height={'93%'}
        justifyContent={'space-between'}
        flexDirection="column"
        zIndex={1}
      >
        <Box
          display={{ base: 'none', md: 'block' }}
          position={'absolute'}
          right="-25px"
          top="20px"
          bg="rgba(30,30,36)"
          border="1px solid rgba(40,43,43)"
          p="10px"
          rounded="md"
          cursor="pointer"
          onClick={toggleSidebar}
        >
          <Box>{sidebarIsOpen ? <ArrowBackIcon /> : <ArrowForwardIcon />}</Box>
        </Box>

        <Navigation sidebarIsOpen={sidebarIsOpen} sidebarRef={sidebarRef} />
      </Box>
    </>
  );
}
