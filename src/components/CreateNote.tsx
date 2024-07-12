"use client";

import { createNote } from "@/action/createNote";
import { useFormState } from "react-dom";

export const CreateNote = () => {
  const [state, formAction] = useFormState(createNote, {
    resetKey: "",
    message: "",
  });

  return (
    <div>
      <form key={state.resetKey} action={formAction} className="space-y-2">
        <input name="content" placeholder="tulis note" />
        <div>{state.message}</div>
        <button>Create Note</button>
      </form>
    </div>
  );
};
