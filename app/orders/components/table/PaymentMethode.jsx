import React from "react";
import Bitcoin from "../../assets/Bitcoin";
import Paypal from "../../assets/Paypal";
import AmericanExpress from "../../assets/AmericanExpress";
import Visa from "../../assets/Visa";
import MasterCard from "../../assets/MasterCard";
import Maestro from "../../assets/Maestro";
import BankOfAmerica from "../../assets/BankOfAmerica";
const PaymentMethod = ({ payment }) => {
  return (
    <div>
      {payment === "Bitcoin" ? (
        <Bitcoin />
      ) : payment === "Paypal" ? (
        <Paypal />
      ) : payment === "American Express" ? (
        <AmericanExpress />
      ) : payment === "Visa" ? (
        <Visa />
      ) : payment === "MasterCard" ? (
        <MasterCard />
      ) : payment === "Maestro" ? (
        <Maestro />
      ) : payment === "Bank Of America" ? (
        <BankOfAmerica />
      ) : (
        <span className="text-gray-600 font-bold">{payment}</span>
      )}
    </div>
  );
};

export default PaymentMethod;
