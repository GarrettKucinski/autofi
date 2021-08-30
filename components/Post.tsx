import Link from 'next/link';

type Props = {
  title: string
  body: string
  id: number
  userId?: number
};

export default function Post ({ title, id, body }: Props): JSX.Element {
  return (
    <Link href={`/post/${id}`}>
      <div className="group p-6 cursor-pointer border-t-2 border-offWorld border-opacity-20">
        <h1 key={`${Date.now()}__${id}`} className="text-starlight group-hover:text-wetSand font-bold text-5xl mb-4">{title}</h1>
        <p className="text-offWorld">{body}</p>
      </div>
    </Link>
  );
}
