import Text from "../../../../common/components/Text";
import TouchableIcon from "../../../../common/components/TouchableIcon";
import React from "react";

export default function Footer() {
  return (
    <>
      <Text.Adorned>Or Log In Using</Text.Adorned>
      <TouchableIcon
        icon={"google"}
        onPress={() => console.log("Logging in with Google! (Login screen)")}
      />
    </>
  );
}
