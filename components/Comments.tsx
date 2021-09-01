import Commment from "./Comment";

export default function Comments ({ comments }) {
  return (
    <div className="bg-scifiGreen divide-y divide-offWorld divide-opacity-10 bg-opacity-10 p-4">
      {comments && comments.map(Commment)}
    </div>
  )
}
