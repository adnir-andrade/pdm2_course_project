//TODO: After API implementation, remove this function
export const getClassName = (klass_id: number): string => {
  switch (klass_id) {
    case 1:
      return "Barbarian";
    case 2:
      return "Bard";
    case 3:
      return "Cleric";
    case 4:
      return "Druid";
    case 5:
      return "Fighter";
    case 6:
      return "Monk";
    case 7:
      return "Paladin";
    case 8:
      return "Ranger";
    case 9:
      return "Rogue";
    case 10:
      return "Sorcerer";
    case 11:
      return "Warlock";
    case 12:
      return "Wizard";
    default:
      return "Unknown Class";
  }
};
