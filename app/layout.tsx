import { Provider } from "@/app/components/ui/provider";
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Country Dashboard",
  description: "Explore country data",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
