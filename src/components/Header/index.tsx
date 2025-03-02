"use-client"

import Image from "next/image";
import * as S from "./styles"

const Header = () => (
  <S.HeaderContainer>
    <Image src="/logo.png" alt="logo" width={210} height={25} />
  </S.HeaderContainer>
);

export default Header;