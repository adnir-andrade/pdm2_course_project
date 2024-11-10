//TODO: After API implementation, remove this function
export const getRaceName = (race_id: number): string => {
  switch (race_id) {
    case 1:
      return "Dwarf";
    case 2:
      return "Elf";
    case 3:
      return "Halfling";
    case 4:
      return "Human";
    case 5:
      return "Dragonborn";
    case 6:
      return "Gnome";
    case 7:
      return "Half-Elf";
    case 8:
      return "Half-Orc";
    case 9:
      return "Tiefling";
    default:
      return "Unknown Race";
  }
};
