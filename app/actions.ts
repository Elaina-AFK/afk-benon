import { getResponse } from "./firestore";

export async function sendUserPrompt(
  formData: FormData,
  fn: (res: string) => void
) {
  const message = formData.get("user-input")?.toString() ?? "Hello!";
  await getResponse(message, fn);
}
