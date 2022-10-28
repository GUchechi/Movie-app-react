/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from '../Container';
import Popular from '../Popular/Popular';

const Output = () => {
    const {activeLink} = useContext(MovieContext)
    return(
        <div css={styles} className='output'>
           {activeLink === 'Popular' && (
            <Container>
                <Popular />
            </Container>
           )}
        </div>
    );
};


const styles = css`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  > .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media (max-width: 1365px) {
    > .container {
      max-width: 90%;
    }
  }
`;


export default Output;