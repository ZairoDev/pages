
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <>
        <h2>inner layout file</h2>
        {children}
     </>
  );
}
