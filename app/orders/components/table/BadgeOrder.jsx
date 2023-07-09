import React from "react";
import Badge from "@/components/Badge";

const BadgeOrder = ({ status }) => {
  return status === "Completed" ? (
    <Badge
      text={status}
      colorBg={"bg-emerald-200"}
      colorText={"text-emerald-900"}
    />
  ) : status === "Cancelled" ? (
    <Badge text={status} colorBg={"bg-rose-200"} colorText={"text-red-800"} />
  ) : status === "In progress" ? (
    <Badge
      text={status}
      colorBg={"bg-violet-200"}
      colorText={"text-violet-800"}
    />
  ) : null;
};

export default BadgeOrder;
