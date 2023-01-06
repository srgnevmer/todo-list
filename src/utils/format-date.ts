export const formatDate = (date: number): string => {
  const hours: string = String(new Date(date).getHours()).padStart(2, "0");
  const minutes: string = String(new Date(date).getMinutes()).padStart(2, "0");
  const day: string = String(new Date(date).getDate()).padStart(2, "0");
  const month: string = String(new Date(date).getMonth() + 1).padStart(2, "0");
  const year: number = new Date(date).getFullYear();
  return `${hours}:${minutes} ${day}/${month}/${year}`;
};
