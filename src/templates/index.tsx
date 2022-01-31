import Sidebar from "@/components/Sidebar";
import { useDisclosure, Fade, Box } from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";
import { Topbar } from "../components/TopBar";
import { useAppSelector } from "@/redux/hooks";
import { selectSidebarIsOpen } from "@/redux/sidebar/selectors";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const Main = ({ meta, children }: IMainProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const isSidebarOpen = useAppSelector(selectSidebarIsOpen);

  useEffect(onToggle, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {meta}
      <Box
        display={{ sm: "block", md: "grid" }}
        gridAutoColumns="1fr"
        gridTemplateColumns={isSidebarOpen ? "0.33fr 1.9fr" : "0.25fr 4fr"}
        gridTemplateRows="0.3fr 1.7fr"
        gap="0px 1px"
        gridTemplateAreas={`
          "Logo Topbar"
          "Sidebar Content"
          "Sidebar Footer"
        `}
      >
        <Box gridArea="Topbar">
          <Topbar />
        </Box>
        <Box display={{ base: "none", md: "block" }} gridArea="Logo">
          <Logo />
        </Box>
        <Box gridArea="Sidebar">
          <Sidebar />
        </Box>

        <Box margin={{ base: "0px 5px", md: "0px 80px" }} gridArea="Content">
          <Fade in={isOpen}>{children} </Fade>
        </Box>

        <Box margin={{ base: "0px 5px", md: "0px 80px" }} gridArea="Footer">
          <Footer />
        </Box>
      </Box>
    </>
  );
};
