export const handleRadius = (
  item: number,
  setRadius: (value: number) => void,
  setOpenDropdown: (value: boolean) => void
) => {
  setRadius(item);
  setOpenDropdown(false);
};
