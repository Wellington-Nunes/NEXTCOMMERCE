"use client";

import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background_deep_00};
  color: ${({ theme }) => theme.colors.primary_text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
