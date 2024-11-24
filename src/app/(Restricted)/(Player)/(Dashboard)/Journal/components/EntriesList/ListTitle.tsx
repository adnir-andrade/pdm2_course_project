import React from "react";
import { ListItem } from "@rneui/themed";

type Props = { title: string };

export default function ListTitle({ title }: Props) {
  return (
    <ListItem.Title
      style={{
        textAlign: "left",
        color: "#c29f41",
        textShadowColor: "rgba(0, 0, 0, 0.1)",
        textShadowOffset: { width: 3, height: 2 },
        textShadowRadius: 2,
      }}
      className="text-decorated-gold absolute left-0 self-center"
    >
      {title}
    </ListItem.Title>
  );
}
