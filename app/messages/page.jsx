import { Breadcrumbs } from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import ListeIncomingMessage from "@/components/ListeIncomingMessage";
import MessageInput from "@/components/MessageInput";
import MessageReceived from "@/components/MessageReceived";
import MessageSent from "@/components/MessageSent";
import Search from "@/components/Search";
import Title from "@/components/Title";
import { AiOutlineDelete, AiOutlineInfoCircle } from "react-icons/ai";

export default function Messages() {
  return (
    <Layout>
      <Breadcrumbs terminalPath={"Messages"} />

      <Title text={"Service Support"} />
      <div className="px-10 py-5 flex flex-row h-[500px] gap-1">
        <div className="basis-1/3 bg-gray-200 rounded-lg p-3 shadow-4xl">
          <h2 className="mb-2 px-8 py-3 text-4xl font-extrabold text-gray-900 ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-sky-300">
              Chats
            </span>
          </h2>
          <Search />
          <ol className="mt-3 divide-y-4 bg-gray-300 rounded-lg overflow-y-auto max-h-[300px] ">
            <ListeIncomingMessage
              img={
                "https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/278379010_108857205133658_2458177458228774882_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ntiR4ajyqY0AX-BpafT&_nc_ht=scontent.ftun10-1.fna&oh=00_AfAaoHb3m7tEjhny9jVRzOzQp3iAVPzvnYkbZnQTS6lVdw&oe=64AD9E15"
              }
              name={"Iheb Ben Slama"}
              lastMessage={"Bonjour"}
              messageCount={2}
            />
            <ListeIncomingMessage
              img={
                "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/309124236_5326592124105141_8747167939274630792_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zNAJerit8EUAX9c2poL&_nc_ht=scontent.ftun8-1.fna&oh=00_AfDT16UNPh6KXDAz900BHei0Tdsa667Vj3dgiQ4dQvgeqg&oe=64A72556"
              }
              name={"Haithem Ben Slama"}
              lastMessage={"Bonjour"}
              messageCount={1}
            />
          </ol>
        </div>
        <div className="basis-2/3 bg-gray-100 rounded-lg shadow-2xl">
          <div className="h-16 shadow-lg bg-gray-200 rounded-md p-3 pl-5 flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-10 h-10 mb-3 mr-3 rounded-full sm:mb-0"
                src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/309124236_5326592124105141_8747167939274630792_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zNAJerit8EUAX9c2poL&_nc_ht=scontent.ftun8-1.fna&oh=00_AfDT16UNPh6KXDAz900BHei0Tdsa667Vj3dgiQ4dQvgeqg&oe=64A72556"
                alt="Haithem Ben Slama image"
              />
              <span className="text-lg font-medium text-gray-900">
                Haithem Ben Slama
              </span>
            </div>
            <div className="flex">
              <button className="mr-4 focus:outline-none">
                <AiOutlineDelete className="h-6 w-6 hover:text-red-500 hover:scale-150 hover:duration-500" />
              </button>
              <button className="mr-4 focus:outline-none">
                <AiOutlineInfoCircle className="h-6 w-6 hover:text-blue-500 hover:scale-150 hover:duration-500" />
              </button>
            </div>
          </div>
          <div className="p-4 overflow-y-auto h-[332px] container">
            <MessageSent />
            <MessageReceived />
            <MessageSent />
            <MessageSent />
            <MessageSent />
          </div>
          <div className="p-1 bg-gray-200 rounded-md h-16">
            <MessageInput />
          </div>
        </div>
      </div>
    </Layout>
  );
}
