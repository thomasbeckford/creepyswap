import React, { useEffect, useRef } from 'react';
import { useCountUp } from 'react-countup';
import { Text } from '@chakra-ui/react';

export interface CountUpNumberProps {
  value: number;
  decimals: number;
  fontSize?: string;
  lineHeight?: string;
  prefix?: string;
  bold?: boolean;
  color?: string;
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({
  value,
  decimals,
  prefix = '',
  color = 'blue.200',
}) => {
  const countUpRef = React.useRef(null);
  const { update } = useCountUp({
    ref: countUpRef,
    prefix: prefix,
    start: 0,
    end: value,
    delay: 4000,
    duration: 0.8,
    separator: ',',
    decimals: decimals || value < 0 ? 4 : value > 1e5 ? 0 : 3,
  });

  const updateValue = useRef(update);

  useEffect(() => {
    updateValue.current(value);
  }, [value, updateValue]);

  return <Text fontSize="large" color={color} ref={countUpRef} />;
};

export default CountUpNumber;
