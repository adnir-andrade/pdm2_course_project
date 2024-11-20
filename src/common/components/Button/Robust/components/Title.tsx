import Text from "../../../Text";

type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return (
    <Text
      className="text-decorated text-2xl pl-2"
      adjustsFontSizeToFit={true}
      lineBreakMode={"tail"}
      numberOfLines={2}
    >
      {title}
    </Text>
  );
}
