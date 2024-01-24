import { StyledNavProps } from '../../types';


const StyledNavbar: React.FC<StyledNavProps> = ({ isNavbarVisible , children}) => {

  return (
    <>
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

