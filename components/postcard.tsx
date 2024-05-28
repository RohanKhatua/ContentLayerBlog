import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { Post } from 'contentlayer/generated';

function PostCard({ title, date, url, body }: Post) {
    return (
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <h2 className="mb-1 text-2xl font-semibold">
                <Link href={url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
                    {title}
                </Link>
            </h2>
            <time dateTime={date} className="mb-4 block text-sm text-gray-500 dark:text-gray-400">
                {format(parseISO(date), 'LLLL d, yyyy')}
            </time>
            <div className="text-base text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: body.html }} />
        </div>
    );
}

export default PostCard;
