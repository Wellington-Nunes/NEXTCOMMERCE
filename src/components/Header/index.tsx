"use-client"

import Image from "next/image";
import * as S from "./styles"
import Link from "next/link";

const Header = () => (
  <S.HeaderContainer>
    <Link href="/">
      <Image src="/logo.png" alt="logo" width={210} height={25} />
    </Link>
  </S.HeaderContainer>
);

export default Header;