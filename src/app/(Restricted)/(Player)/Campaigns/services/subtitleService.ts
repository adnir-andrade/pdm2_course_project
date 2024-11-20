export const formatDate = (date: Date): string => {
  const formattedDate = date.toLocaleDateString();
  const dayAbbreviation = date
    .toLocaleDateString(undefined, {
      weekday: "short",
    })
    .toUpperCase();
  return `${formattedDate}, ${dayAbbreviation}`;
};
