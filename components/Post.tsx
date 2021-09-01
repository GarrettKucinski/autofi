import Link from 'next/link';
import DisplayHeading from './headings/DisplayHeading';
import TextBlock from './TextBlock';

type Props = {
  title: string
  body: string
  id: number
  userId?: number
};

export default function Post ({ title, id, body }: Props): JSX.Element {
  return (
    <Link href={`/post/${id}`}>
      <div className="group p-6 cursor-pointer">
        <DisplayHeading key={`${Date.now()}__${id}`}>
          {title}
        </DisplayHeading>
        <TextBlock>{body}</TextBlock>
      </div>
    </Link>
  );
}
