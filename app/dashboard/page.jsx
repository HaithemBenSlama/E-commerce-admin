import { Breadcrumbs } from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import Title from "@/components/Title";

export default function Dashboard() {
  return (
    <Layout>
      <Breadcrumbs terminalPath={"Dashboard"} />

      <Title text={"Dashboard"} />
      <p class="mx-10 text-xl font-bold text-gray-700">Orders</p>
      <div class="flex flex-row mx-20 my-5 gap-5 h-36">
        <div class="basis-1/3 text-white bg-gradient-to-r from-slate-600 via-slate-300 to-slate-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          <div class="flex flex-col items-center justify-center mt-1">
            <dd class="text-gray-600 text-2xl font-bold mb-2">Today</dd>
            <dt class="mb-2 text-5xl font-extrabold ">2</dt>
            <dd class="text-gray-500 text-lg ">2 orders today</dd>
          </div>
        </div>
        <div class="basis-1/3 text-white bg-gradient-to-r from-gray-600 via-gray-300 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          <div class="flex flex-col items-center justify-center mt-1">
            <dd class="text-gray-600 text-2xl font-bold mb-2">This Week</dd>
            <dt class="mb-2 text-5xl font-extrabold ">10</dt>
            <dd class="text-gray-500 text-lg font-semibold">
              10 orders this week
            </dd>
          </div>
        </div>
        <div class="basis-1/3 text-white bg-gradient-to-r from-zinc-600 via-zinc-300 to-zinc-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          <div class="flex flex-col items-center justify-center mt-1">
            <dd class="text-gray-600 text-2xl font-bold mb-2">This Month</dd>
            <dt class="mb-2 text-5xl font-extrabold ">26</dt>
            <dd class="text-gray-500 text-lg ">26 orders this month</dd>
          </div>
        </div>
      </div>
      <p class="mx-10 text-xl font-bold text-gray-700">Revenu</p>
      <div class="flex flex-row mx-10 my-5 gap-5 h-44">
        <div class="basis-1/3 text-white bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          <div class="flex flex-col items-center justify-center mt-3">
            <dd class="text-black text-3xl font-bold mb-4">Today</dd>
            <dt class="mb-4 text-5xl font-extrabold ">$ 12,569</dt>
            <dd class="text-gray-500 text-xl ">2 orders today</dd>
          </div>
        </div>
        <div class="basis-1/3 text-white bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          <div class="flex flex-col items-center justify-center mt-3">
            <dd class="text-black text-3xl font-bold mb-4">This Week</dd>
            <dt class="mb-4 text-5xl font-extrabold ">$ 1236,03</dt>
            <dd class="text-gray-500 text-xl ">10 orders this week</dd>
          </div>
        </div>
        <div class="basis-1/3 text-white bg-gradient-to-r from-violet-100 via-violet-200 to-violet-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          <div class="flex flex-col items-center justify-center mt-3">
            <dd class="text-black text-3xl font-bold mb-4">This Month</dd>
            <dt class="mb-4 text-5xl font-extrabold ">$ 9625,02</dt>
            <dd class="text-gray-500 text-xl ">26 orders this month</dd>
          </div>
        </div>
      </div>
    </Layout>
  );
}
