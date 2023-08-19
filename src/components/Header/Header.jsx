import { HeaderContainter } from './Header.styled';

const Header = ({ children }) => {
  return <HeaderContainter> {children}</HeaderContainter>;
};

export default Header;
