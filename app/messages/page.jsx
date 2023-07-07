import { Breadcrumbs } from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import Title from "@/components/Title";

export default function Messages() {
  return (
    <Layout>
      <Breadcrumbs terminalPath={"Messages"} />

      <Title text={"Service Support"} />
      <div className="px-10 py-5 flex flex-row h-full gap-1">
        <div className="basis-1/3 bg-black rounded-lg p-3 shadow-4xl"></div>
        <div className="basis-2/3 bg-red-800 rounded-lg shadow-2xl"></div>
      </div>
    </Layout>
  );
}
