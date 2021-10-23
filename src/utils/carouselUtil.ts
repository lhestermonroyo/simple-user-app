export const carouselUtil = (
  dir: string,
  currentUser: number,
  userArrCount: number
) => {
  if (dir === 'left') {
    return handleLeftDir(currentUser, userArrCount);
  }

  if (dir === 'right') {
    return handleRightDir(currentUser, userArrCount);
  }
};

const handleLeftDir = (currentUser: number, userArrCount: number) => {
  let userCount = userArrCount - 1;
  if (currentUser !== 0) {
    return currentUser - 1;
  } else {
    return userCount;
  }
};

const handleRightDir = (currentUser: number, userArrCount: number) => {
  let userCount = userArrCount - 1;
  if (currentUser !== userCount) {
    return currentUser + 1;
  } else {
    return 0;
  }
};
