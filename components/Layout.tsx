import Head from "next/head";
import { ReactNode } from "react";

interface Props { children: ReactNode; }

export default function Layout({ children }: Props) {
    return (
        <>
            <Head>
                <title>Bhakta Bhusan Das - DevOps Engineer</title>
                <meta
                    name="description"
                    content="I build automated, observable, self-healing infrastructure."
                    />
            </Head>
            <main className="min-h-screen p-8 max-w-3xl mx-auto">
                {children}
            </main>
        </>
    );
}