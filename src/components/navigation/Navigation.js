import React from "react";
import { RxBoxModel } from "react-icons/rx";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiEnvelope } from "react-icons/bi";
import { CiMoneyBill } from "react-icons/ci";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav__avatar">
        <img src="/images/avatar.png" alt="avatar" className="avatar" />
        <div className="nav__avatar--name">
          <span>Ildiko Gaspar</span>
          <email>@igaspar</email>
        </div>
      </div>

      <div className="nav__buttons">
        <div className="nav__buttons--options">
          <RxBoxModel size={20} />
          <span>General</span>
        </div>

        <div className="nav__buttons--options">
          <RiLockPasswordLine size={20} />
          <span>Password</span>
        </div>

        <div className="nav__buttons--options">
          <BiEnvelope size={20} />
          <span>Invitations</span>
        </div>

        <div className="nav__buttons--options">
          <CiMoneyBill size={20} />
          <span>Billing</span>
        </div>

        <div className="nav__buttons--options">
          <AiOutlineAppstoreAdd size={20} />
          <span>Apps</span>
        </div>
      </div>

      <div className="nav__buttons--logout">
        <TbLogout size={20} />
        <span>Log out</span>
      </div>
    </div>
  );
};

export default Navigation;
