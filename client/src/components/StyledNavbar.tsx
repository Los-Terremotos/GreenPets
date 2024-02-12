import { StyledNavProps } from '../../types';
import styled, { useTheme } from 'styled-components';

const StyledNavContainer = styled.div<StyledNavProps>`
  display: ${props => props.isNavbarVisible ? 'flex' : 'none'};
  justifyContent: flex-end;
  height: 4rem;
  width: 100%;
  opacity: ${props => props.isNavbarVisible ? 1 : 0};
  transition: opacity 1s ease;
  position: 'fixed',
  top: 0;
  left: 0;
  right: 0;
  zIndex: 100;
  backgroundColor: ${props => props.theme.primary1.color};
`

const StyledNavbar: React.FC<StyledNavProps> = ({ isNavbarVisible , children}) => {
  const theme = useTheme();

  return (
    <>
      {/* <StyledNavContainer isNavbarVisible={isNavbarVisible} theme={theme}>
        {children}
      </StyledNavContainer> */}
      <nav
        style={{
          display: isNavbarVisible ? 'flex' : 'none',
          justifyContent: 'flex-end',
          height: '4rem',
          width: '100%',
          opacity: isNavbarVisible ? 1 : 0,
          transition: 'opacity 1s ease',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: '#FFE8D6',
        }}
      >
        {children}
      </nav>
    </>
  )
  
};

export default StyledNavbar;

