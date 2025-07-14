import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({subsets:["latin"]});

export const metadata = {
  title: "ExpensIQ",
  description: "Personalised Finance App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/* {header} */}
        <Header>

        </Header>

        <main className="min-h-screen">
          {children}
        </main>
        <Toaster richColors />
        
        {/* {footer} */}
        <footer className="bg-blue-100 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>
              Made By DivyangP
            </p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
