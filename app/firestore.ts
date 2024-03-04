import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import app from "./_app";

const db = getFirestore(app);

const ref = collection(
  db,
  "users",
  "{uid}",
  "discussions",
  "{discussionId}",
  "messages"
);

export async function getResponse(input: string, fn: any) {
  const id = await addDoc(ref, { prompt: input });

  const unsub = onSnapshot(id, (snap) => {
    if (snap.exists()) {
      const response = snap.data();
      if (response.status.state === "COMPLETED") {
        fn(response.response);
        unsub();
      }
    }
  });
}
