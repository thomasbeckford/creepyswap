import { ChakraStylesConfig } from 'chakra-react-select';

export const selectStyles: ChakraStylesConfig = {
  dropdownIndicator: (provided) => ({
    ...provided,
    p: 0,
    w: '25px',
    background: 'transparent',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    p: 0,
  }),
  control: (provided) => ({
    ...provided,
    p: 0,
    w: '120px',
    cursor: 'pointer',
    _hover: {
      background: 'rgba(255, 255, 255, 0.08)',
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '4x',
    border: 'none',
    boxShadow: 'none',
    p: 0,
    w: '100px',
  }),
};
