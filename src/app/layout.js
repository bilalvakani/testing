import { Toaster } from "react-hot-toast";
import "./globals.css";
import "antd/dist/reset.css";
import Sidebar from "@/components/sideBar/sidebar";
import AdminNavbar from "@/components/navbars/adminNavbar";
// import ProtectedRoute from "@/components/protectedRoute"


export const metadata = {
  title: "Al-Tabib Portal",
  description: "Al-Tabib Portal ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts link tag yahan add karo */}
        <link href="https://fonts.googleapis.com/css2?family=National+Park:wght@200..800&display=swap" rel="stylesheet"/>
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
