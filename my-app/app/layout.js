"use client";
import localFont from "next/font/local";
import "./globals.css";
import MainHeader from "@/components/ui/mainHeader";
import Footer from "@/components/ui/footer";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Provider, useSelector } from "react-redux";
import { store } from "@/lib/redux/store"; // Adjust the path if necessary

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    // Wrap the entire layout with Provider to access Redux store in the layout and children
    <Provider store={store}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <MainHeader />
          <LayoutWithProgressBar>{children}</LayoutWithProgressBar>
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
// A separate component to handle the NProgress logic
function LayoutWithProgressBar({ children }) {
  const isLoading = useSelector((state) => state.page_Loading_Slice.isLoading);
  // Start or stop the progress bar based on isLoading
  if (isLoading) {
    NProgress.start();
  } else {
    NProgress.done();
  }
  return <>{children}</>;
}
