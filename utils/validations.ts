export const validEmail = (value: string) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(value)) {
    // return setDisabled([false, disabled[1]]);
    return true;
  } else {
    return false;
    // return setDisabled([true, disabled[1]]);
  }
}

export const validText = (value: string) => {
  const regex = /^[a-zA-Z,? ]*$/;
  if (regex.test(value)) {
    return true;
  } else {
    return false;
  }
}