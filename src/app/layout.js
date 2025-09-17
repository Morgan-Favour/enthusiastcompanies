import "./globals.css";

export const metadata = {
  title: "Enthusiast Hydrogen Company",
  description: "Leading innovator in hydrogen technology solutions",
  icons: {
    icon: '/logo.png', // Your company logo as favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-space-grotesk">
        {children}
      </body>
    </html>
  );
}