import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Button from '@mui/material/Button';
import UsersList from "@/components/users/users";

const geistSans = localFont({
    src: "../../pages/fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
  });
  const geistMono = localFont({
    src: "../../pages/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
  });

const HomePage = async () => {
    const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
    return (
        <>
          
          <div
            className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
          >
            <main className={styles.main}>
              <Image
                className={styles.logo}
                src="https://nextjs.org/icons/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
              />
             <UsersList users={users} />
            </main>
            <footer className={styles.footer}>
              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="https://nextjs.org/icons/file.svg"
                  alt="File icon"
                  width={16}
                  height={16}
                />
                Learn
              </a>
              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="https://nextjs.org/icons/window.svg"
                  alt="Window icon"
                  width={16}
                  height={16}
                />
                Examples
              </a>
              <a
                href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="https://nextjs.org/icons/globe.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                />
                Go to nextjs.org →
              </a>
              <Button variant="contained">Hello world</Button>
            </footer>
          </div>
        </>
      );
}

export default HomePage;