"use client"

import styled from "styled-components"

export const MainContent = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin-top: 80px;
    padding: 10px ;
    background-color: ${({ theme }) => theme.colors.background_deep_01};
`