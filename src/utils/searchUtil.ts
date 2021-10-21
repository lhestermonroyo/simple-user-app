export const searchUtil = (searchVal: string, userArr: any[]) => {
  const loweredSearchVal = searchVal.toLowerCase();

  return userArr.filter(
    (user) =>
      user.name.toLocaleLowerCase().includes(loweredSearchVal) ||
      user.email.toLocaleLowerCase().includes(loweredSearchVal) ||
      user.username.toLowerCase().includes(loweredSearchVal)
  );
};
