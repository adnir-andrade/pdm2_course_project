import Text from "../../../common/components/Text";
import GoogleLogo from "./GoogleLogo";
import React from "react";

export default function Footer() {
  return (
    <>
      <Text.Adorned>Or Log In Using</Text.Adorned>
      <GoogleLogo />
    </>
  );
}
