import { css } from 'emotion';

export const containerCx = css`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: 'center';
  color: #000;
  background: #fff;
`;

export const bodyCx = css`
  display: flex;
  flex-flow: row;
`;

export const titleCx = css`
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  margin-right: 20px;
  padding: 10px 23px 10px 0;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
`;

export const descriptionCx = css`
  display: inline-block;
  height: 49px;
  text-align: left;
  line-height: 49px;
`;

export const textCx = css`
  font-size: 14px;
  font-weight: normal;
  line-height: inherit;
  margin: 0;
  padding: 0;
`;
