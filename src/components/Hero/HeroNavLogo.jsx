/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const HeroNavLogo = () => <h2 css={styles}>MovieApp</h2>;

const styles = css`
  font-size: 22px;
  color: #cb6ad2;
  font-weight: 900;
  user-select: none;
`;

export default HeroNavLogo;