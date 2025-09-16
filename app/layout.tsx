import "./index.css";

export const metadata = {
  title: "Kofi Ebedaowei Gideon | Fullstack Developer Portfolio",
  description:
    "Portfolio website of Kofi Ebedaowei Gideon, a passionate Fullstack Developer specializing in React, JavaScript, HTML, CSS, and modern web technologies. Explore projects, skills, and experiences.",
  keywords: [
    "Kofi Ebedaowei Gideon",
    "Kofi Gideon",
    "Fullstack Developer",
    "React Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer Portfolio",
  ],
  author: "Kofi Ebedaowei Gideon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* SEO Meta Tags */}
        <meta name="google-site-verification" content="etLT725mk-sDytNX8UZuS1BSdzF5lfMztZSwfPcbxzQ" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.author} />

        {/* Favicon */}
        <link rel="icon" href="/me.jpg" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://kofi-ebedaowei-gideon.vercel.app/"
        />
        <meta property="og:image" content="/me.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/me.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
