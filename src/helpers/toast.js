import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const toastOptions = { position: 'top-right', autoClose: 2500 };

export const toastSuccess = (message) => toast.success(message, toastOptions);

export const toastError = (message) => toast.error(message, toastOptions);

export const toastWarn = (message) => toast.warn(message, toastOptions);
