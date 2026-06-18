import { ref } from "vue";

export type ToastTone = "success" | "error" | "info" | "warning";

export interface ToastItem {
  id: number;
  tone: ToastTone;
  message: string;
  duration: number;
}

const toasts = ref<ToastItem[]>([]);
let nextId = 0;

function addToast(tone: ToastTone, message: string, duration = 4000) {
  const id = nextId++;
  toasts.value = [...toasts.value, { id, tone, message, duration }];

  if (duration > 0) {
    setTimeout(() => removeToast(id), duration);
  }

  return id;
}

function removeToast(id: number) {
  toasts.value = toasts.value.filter((t) => t.id !== id);
}

export function useToast() {
  return {
    toasts,
    success: (message: string, duration?: number) =>
      addToast("success", message, duration),
    error: (message: string, duration?: number) =>
      addToast("error", message, duration),
    info: (message: string, duration?: number) =>
      addToast("info", message, duration),
    warning: (message: string, duration?: number) =>
      addToast("warning", message, duration),
    dismiss: removeToast,
  };
}
