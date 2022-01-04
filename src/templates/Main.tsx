import { ReactNode } from 'react';

import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Wrapper, Children } from './styled';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';

type IMainProps = {
	meta: ReactNode;
	children: ReactNode;
};

const Main = ({ meta, children }: IMainProps) => (
	<Wrapper>
		{meta}
		<NavBar />
		<LazyMotion features={domAnimation}>
			<AnimatePresence exitBeforeEnter>
				<m.div
					exit={{ opacity: 0 }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					<Children>{children}</Children>
				</m.div>
			</AnimatePresence>
		</LazyMotion>
		<Footer />
	</Wrapper>
);

export { Main };
