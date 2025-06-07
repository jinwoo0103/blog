import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import fs from 'fs';
import Link from 'next/link';
import path from 'path';

export default async function Page() {
  const mdxList = fs
    .readdirSync(path.join(process.cwd(), 'content'))
    .filter((file) => file.endsWith('.mdx'))
    .map((fileName) => fileName.replace('.mdx', ''));

  return (
    <div className="flex flex-col items-center gap-4">
      {mdxList.map((fileName) => (
        <BlogCard key={fileName} fileName={fileName} />
      ))}
    </div>
  );
}

function BlogCard({ fileName }: { fileName: string }) {
  return (
    <Link href={`/blog/${fileName}`} className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>{fileName}</CardTitle>
          <CardDescription>{fileName} Description</CardDescription>
          <CardAction>{fileName} Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>{fileName} Content</p>
        </CardContent>
        <CardFooter>
          <p>{fileName} Footer</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
