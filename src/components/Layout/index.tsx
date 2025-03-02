"use client"

import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import * as S from "./styles"
import GlobalStyles from "@/styles/GlobalStyles";
const Layout = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />

    <S.LayoutContainer>
      <Header />
      <S.MainContent>{children}</S.MainContent>
      <Footer />
    </S.LayoutContainer>
  </ThemeProvider>
);

export default Layout;