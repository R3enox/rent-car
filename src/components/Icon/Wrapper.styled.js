import styled from 'styled-components';

export const Wrapper = styled.div`
  .iconChevron {
    position: absolute;
    bottom: 14px;
    right: 18px;
    pointer-events: none;
    stroke: black;
    fill: transparent;
    width: 20px;
    height: 20px;
  }
  .brandChevron,
  .priceChevron {
    transition: transform 250ms cubic-bezier(0, 0.91, 1, 0.56);
  }

  .brandChevron {
    transform: ${(prop) => (prop.$brandClick ? 'none' : 'rotate(180deg)')};
  }

  .priceChevron {
    transform: ${(prop) => (prop.$priceClick ? 'none' : 'rotate(180deg)')};
  }
`;
