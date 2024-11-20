import { getRaceName } from "./raceService";
import { getClassName } from "./classService";

//TODO: After API implementation, change this function to use race and klass names
export const formatDescription = (
  race_id: number,
  level: number,
  klass_id: number,
): string => {
  return `${getRaceName(race_id)}, Lv ${level.toString()} | ${getClassName(klass_id)}`;
};
