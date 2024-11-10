import Text from "../../../Text";

type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return (
    <Text
      className="text-2xl pl-2 font-cinzel-decorative-black text-themys-straw"
      adjustsFontSizeToFit={true}
      lineBreakMode={"tail"}
      numberOfLines={2}
    >
      {title}
    </Text>
  );
}
