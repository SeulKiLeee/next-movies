import Head from 'next/head'
import { useRouter } from 'next/router';

interface Props {
    title: string;
}

export default function Seo({ title }: Props){
    const router = useRouter();
    return (
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    );
}