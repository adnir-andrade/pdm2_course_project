import Text from "../../../../common/components/Text";
import React from "react";
import TouchableIcon from "../../../../common/components/TouchableIcon";

export default function Footer() {
  return (
    <>
      <Text.Adorned>Or Log In Using</Text.Adorned>
      <TouchableIcon
        icon={"google"}
        onPress={() => console.log("Logging in with Google! (Home screen)")}
      />
    </>
  );
}
