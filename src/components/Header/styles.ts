"use client";

import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background_deep_00};
  color: ${({ theme }) => theme.colors.primary_text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  z-index: 1000;
`;
