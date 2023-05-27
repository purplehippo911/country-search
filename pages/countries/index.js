import Link from 'next/link';

export default function Countries() {
    return ( 
        <div> 
            <h1>Countries</h1>

            <Link href="/">
                <button className="bg-DarkBlue p-5">Back to search for countries</button>
            </Link>
        </div> 
    );
}
