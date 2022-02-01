const Select = {
  parts: ["field", "icon"],
  baseStyle: {
    baseStyle: {
      field: {
        borderRadius: "4px",
        bg: "red.50",
      },
      icon: {
        borderRadius: "4px",
      },
    },
  },
  sizes: {},
  variants: {
    thomas: ({ colorMode }: any) => ({
      field: {
        bg: "transparent",
        color: colorMode === "dark" ? "#fefefe" : "#fafafa",
        border: "1px solid",
        borderColor: colorMode === "dark" ? "teal.300" : "teal.400",
        cursor: "pointer",
      },
      icon: {
        bg: "red.500",
        color: colorMode === "dark" ? "#fefefe" : "#fafafa",
        borderColor: colorMode === "dark" ? "teal.300" : "teal.400",
      },
    }),
  },
};

export default Select;
