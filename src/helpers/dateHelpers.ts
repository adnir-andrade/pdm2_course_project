export const formatDate = (date: Date): string => {
  const dayAbbreviation = date
    .toLocaleDateString(undefined, { weekday: "short" })
    .toUpperCase();
  const formattedDate = date.toLocaleDateString();

  return `${formattedDate}, ${dayAbbreviation}`;
};
