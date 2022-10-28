/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Output from '../Output/Output';
import HeroNav from './HeroNav';

const Hero = () => {
    return(
        <section css={styles} className='hero'>
            <HeroNav />
            <Output />
        </section>
    );
};

const styles = css `
    width: 100%;
    min-height: 100vh;
    background: #1b1c22;
`



export default Hero;