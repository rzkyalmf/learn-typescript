import { deleteNote } from "@/action/deleteNote";

interface Props {
  id: string;
}

export const DeleteNote: React.FC<Props> = ({ id }) => {
  return (
    <form action={deleteNote}>
      <input name="id" value={id} hidden />
      <button className="bg-rose-100 text-rose-400 text-xs font-medium px-2 py-1 rounded-lg">
        Delete
      </button>
    </form>
  );
};
