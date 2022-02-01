import { ChakraStylesConfig } from "chakra-react-select";

export const selectStyles: ChakraStylesConfig = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    p: 0,
    w: "25px",
    background: "transparent",
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    p: 0,
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: "4px",
    borderColor: "teal.300",
    border: "1px solid",
    p: 0,
    w: "100px",
    cursor: "pointer",
    _hover: {
      borderColor: "teal.300",
      background: "rgba(255, 255, 255, 0.08)",
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    borderRadius: "4x",
    border: "none",
    boxShadow: "none",
    p: 0,
    w: "100px",
  }),
};
