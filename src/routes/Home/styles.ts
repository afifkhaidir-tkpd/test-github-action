import { css } from 'emotion';

export const mainCx = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

export const titleCx = css`
  text-align: center;
`;

export const descriptionCx = css`
  text-align: center;
  font-size: 1rem;
`;

export const codeCx = css`
  font-size: 1.1rem;
  background: #fafafa;
  padding: 0.5px 0.75rem;
  border-radius: 5px;
  line-height: 1.5;
`;

export const btnPrimary = css`
  font-size: 1.1rem;
  background: rgb(3, 172, 14);
  color: white;
  border: 1px solid rgb(3, 172, 14);
  height: 32px;
  padding: 0px 16px;
  border-radius: 5px;
`;

export const btnSecondaryCx = css`
  font-size: 1.1rem;
  background: white;
  color: rgb(3, 172, 14);
  border: 1px solid rgb(3, 172, 14);
  height: 32px;
  padding: 0px 16px;
  border-radius: 5px;
`;
