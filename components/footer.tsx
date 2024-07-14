import Link from 'next/link';
import Image from 'next/image';
import WafiosIcon from '@/public/logo-icon.svg';

export default function Component() {
    return (
        <footer className="col-span-2 flex flex-col md:flex-row items-center justify-between py-6 border-t">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <Image
                    src={WafiosIcon}
                    alt="Wafios Icon"
                    width={26}
                    height={26}
                />
                <span className="sr-only">WAFIOS</span>
            </Link>
            {/* <nav className="flex gap-4 mt-4 md:mt-0">
                <Link
                    href="#"
                    className="text-sm hover:underline"
                    prefetch={false}
                >
                    Collection
                </Link>
                <Link
                    href="#"
                    className="text-sm hover:underline"
                    prefetch={false}
                >
                    Terms &amp; Conditions
                </Link>
            </nav> */}
        </footer>
    );
}
