import Link from 'next/link';

export default function Countries() {
    return ( 
            <Link href="/">
                <button className="bg-White dark:bg-DarkBlue dark:text-lightText p-5 mt-4">Back to search for countries</button>
            </Link>
    );
}
