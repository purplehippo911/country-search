import Link from 'next/link';
import Image from 'next/image';

export default function Countries() {
    return ( 
            <Link href="/" className="btn justify-self-start flex items-center w-1/2">
                <picture className="w-10">
                    <Image 
                        src="/left-arrow.png" 
                        className="scale-[0.5] w-full"
                        alt="arrow pointing to the left to indicate how to go back to home"
                        width={70}
                        height={40}
                    />
                </picture>
                <button>Back to search for countries</button>
            </Link>
    );
}
