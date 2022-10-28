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
        <div className='output'>
           {activeLink === 'Popular' && (
            <Container>
                <Popular />
            </Container>
           )}
        </div>
    );
};

export default Output;