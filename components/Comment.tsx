import { CommentType } from "../pages/post/[id]"
import SecondaryHeading from "./headings/SecondaryHeading"
import TextBlock from "./TextBlock"

export default function Commment ({ name, body, email }: CommentType): JSX.Element {
  return (
    <div className="pt-2 pb-4">
      <SecondaryHeading>{name} <span className="text-sm font-light">{email.toLowerCase()}</span></SecondaryHeading>
      <TextBlock>{body}</TextBlock>
    </div>
  )
}
