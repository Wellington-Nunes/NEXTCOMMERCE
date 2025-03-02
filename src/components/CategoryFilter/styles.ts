"use client";

import styled from "styled-components";

export const CategoryFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.primary_text};
  margin-bottom: 0.5rem;
`;

export const Select = styled.select`
  width: 100%;
  height: 60px;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.background_deep_00};
  background-color: ${({ theme }) => theme.colors.background_deep_03};
  color: ${({ theme }) => theme.colors.secondary_text};
  border-radius: 8px;
  font-size: 1.6rem;
  transition: all 0.3s ease;
  appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.background_deep_00};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  option {
    color: ${({ theme }) => theme.colors.secondary_text};
    text-transform: uppercase;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;

  &::after {
    content: "▼";
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    pointer-events: none;
    color: ${({ theme }) => theme.colors.secondary_text};
  }
`;
