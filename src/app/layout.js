import { Toaster } from "react-hot-toast";
import "./globals.css";
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
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
