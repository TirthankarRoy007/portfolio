export const formatMonthYear = (date: string | null) => {
  if (!date) {
    return "Present";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric"
  }).format(new Date(date));
};
