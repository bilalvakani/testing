import Sidebar from "@/components/sideBar/sidebar";
import AdminNavbar from "@/components/navbars/adminNavbar";
import ChildrenBody from "@/components/childrenBody";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChildrenBody>{children}</ChildrenBody>
      </body>
    </html>
  );
}
