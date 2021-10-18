export const avatarGenerator = (name: string) => {
  return {
    nameInitial: getFirstLetter(name),
    color: colorGenerator(),
  };
};

const getFirstLetter = (name: string) => {
  return name.charAt(0);
};

const colorGenerator = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
