import { css } from 'emotion';

export const headerCx = css`
  width: 100%;
  min-height: 50px;
`;

export const floatHeaderCx = css`
  position: fixed;
  display: flex;
  z-index: 100;
  width: 100%;
  min-height: 50px;
  padding: 8px 0;
  background: #ffffff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 7%);
`;

export const wrapperCx = css`
  display: flex;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;

  justify-content: space-between;
`;

export const brandCx = css`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: #ffffff;
  height: 34 px;
  border: 0;
`;

export const logoCx = css`
  display: block;
  height: 24px;
`;

export const titleCx = css`
  display: block;
  color: rgba(0, 0, 0, 0.54);
  font-size: 1.25em;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
  line-height: 18px;
  margin-top: 1px;
  margin-left: 10px;
`;

export const navItemCx = css`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #0000ff;

    :link {
      color: #0000ee;
    }
    :visited {
      color: #551a8b;
    }
  }
`;
