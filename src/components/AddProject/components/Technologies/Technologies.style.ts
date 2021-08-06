import styled from 'styled-components';
export const Label = styled('label')`
  padding: 0 0 4px;
  line-height.5;
  display: block;
  color: rgba(118, 118, 118);
  textAlign: left;
`;

export const InputWrapper = styled('div')`
  width:'100%';
  border:1px solid #d9d9d9;
  background-color: #fff;
  border-radius: 4px;
  paddingpx;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: #40a9ff;
  }

  &.focused {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    font-size4px;
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow;
    border: 0;
    margin: 0;
    outline: 0;
  }
`;
export const Listbox = styled('ul')`
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index:100;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus='true'] {
    background-color: #e6f7ff;
    cursor: pointer;

    & svg {
      color: #000;
    }
  }
`;