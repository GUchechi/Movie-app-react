/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Container from '../Container';
import { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';
import HeroNavLogo from './HeroNavLogo';
import HeroNavMenu from './HeroNavMenu';
import HeroNavSearch from './HeroNavSearch';

const HeroNav = () => {
  const {hiddenMenu, setHiddenMenu } = useContext(MovieContext)
    return(
        <nav css={styles}>
            <Container>
              <div className="wrapper">
                <HeroNavLogo />
                <HeroNavMenu />
              </div>
              <HeroNavSearch />
              <i 
                id='burgerMenu' 
                className={hiddenMenu ? "fa fa-bars" : "fa fa-times"}
                ></i>
            </Container>
        </nav>
    );  
};

const styles = css`
  width: 100%;
  min-height: 80px;
  padding: 20px 0;
  background: #212229;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .wrapper {
      display: flex;
      align-items: center;
    }
    #burgerMenu {
      color: #f9a5ff;
      cursor: pointer;
      display: none;
    }
  }
  @media (max-width: 860px) {
    .container {
      #burgerMenu {
        display: block;
      }
    }
  }
  @media (max-width: 1365px) {
    .container {
      max-width: 90%;
    }
  }
`;


export default HeroNav;