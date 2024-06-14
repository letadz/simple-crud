import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastOptions = {
  position: "bottom-left",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};

const showToast = {
  success: (message) => toast.success(message, toastOptions),
  error: (message) => toast.error(message, toastOptions),
  info: (message) => toast.info(message, toastOptions),
  warn: (message) => toast.warn(message, toastOptions),
};

export default showToast;
