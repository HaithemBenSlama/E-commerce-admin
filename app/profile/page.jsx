import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GeneralInfo } from "@/components/GeneralInfo";
import Layout from "@/components/Layout";
import PasswordInfo from "@/components/PasswordInfo";
import { ProfileInfo } from "@/components/ProfileInfo";
import Title from "@/components/Title";

export default function Profile() {
  return (
    <Layout>
      <Breadcrumbs terminalPath={"Profile"} />
      <Title text={"Update Profile"} />
      <p className="mb-5 mx-14 text-lg font-normal text-gray-500 dark:text-gray-400">
        You can Update your Profile by updating these fields
      </p>
      <div className="grid grid-rows-2 grid-flow-col gap-4 px-10">
        <ProfileInfo />
        <PasswordInfo />
        <GeneralInfo />
      </div>
    </Layout>
  );
}
