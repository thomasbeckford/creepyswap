import styled from 'styled-components';
import { TextProps } from './types';

const Text = styled.div<TextProps>`
	color: ${({ theme }) => theme.colors.ci};
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: ${({ bold }) => (bold ? 600 : 400)};
`;

export default Text;
