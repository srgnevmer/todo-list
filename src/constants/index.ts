import { doc } from "firebase/firestore";
import { db } from "../firebase.config";

export const MIN_WINDOW_WIDTH: number = 1024;
export const TODOS_REF = doc(db, "todo", "list");
