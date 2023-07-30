import React from "react";

import styled from "styled-components";

const IconWrapper = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = () => {
  return (
    <IconWrapper className="close-button">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.6568 6.34314L12 12M12 12L6.34314 17.6568M12 12L17.6568 17.6568M12 12L6.34314 6.34314"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    </IconWrapper>
  );
};

export default CloseButton;
