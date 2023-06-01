import { toast } from "react-toastify";

export const toastSuccess = (msg: string, post?: string) => {
  return toast["success"](msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}

export const toastInfo = (msg: string, post?: string) => {
  return toast["info"](msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}

export const toastError = (msg: string, callback?: Function | any) => {
  return toast["error"](msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
    // onChange: () => console.log('test'),
  });
}
