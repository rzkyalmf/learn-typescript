"use client";

import { updateNote } from "@/action/updateNote";
import { useFormState } from "react-dom";
import React from "react";

interface Propss {
  id: string;
  content: string | undefined;
}

export const UpdateNote: React.FC<Propss> = ({ id, content }) => {
  const [state, formAction] = useFormState(updateNote, null);

  return (
    <>
      <h1>Update Note</h1>
      <div>
        <form action={formAction} className="space-y-2">
          <input name="id" value={id} hidden />
          <input defaultValue={content} name="content" placeholder="tulis note" />
          <div>{state?.errors.content}</div>
          <button>Update Note</button>
        </form>
      </div>
    </>
  );
};
