"use client" 

import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background_deep_00};
  color: ${({ theme }) => theme.colors.secondary_text};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
`;
