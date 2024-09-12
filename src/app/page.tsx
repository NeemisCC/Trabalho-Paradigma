import Content from "./components/content";
import { Menu } from "./components/menu/menu";
import { Sidebar } from "./components/sidebar";

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="container mx-auto px-24">
        <div className="flex mt-10">
          <Sidebar />
          <Content />
        </div>
      </div>
    </div>
  );
}
