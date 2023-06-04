import { Ionicon } from "@components/common/icon";
import { COLORS } from "constants/theme";
import Menu from "./menu/menuView";
import OrderList from "./orderList/orderListView";
import Bills from "./bills/billsView";
import History from "./history/historyView";
import React from "react";

type NavIconProps = {
  name: string;
  color: string;
  isFilled: boolean;
};

const NavIcon: React.FC<NavIconProps> = ({ name, color, isFilled }) => {
  const ICON_SIZE = 20;

  return (
    <Ionicon
      name={isFilled ? name : `${name}-outline`}
      size={ICON_SIZE}
      color={color}
    />
  );
};

const Features = [
  {
    ViewComponent: Menu,
    ViewName: "Menu",
    NavName: "Menu",
    NavIcon: (color: string, isFilled: boolean) => (
      <NavIcon name={"grid"} color={color} isFilled={isFilled} />
    ),
  },
  {
    ViewComponent: OrderList,
    ViewName: "OrderList",
    NavName: "Order List",
    NavIcon: (color: string, isFilled: boolean) => (
      <NavIcon name={"list"} color={color} isFilled={isFilled} />
    ),
  },
  {
    ViewComponent: Bills,
    ViewName: "Bills",
    NavName: "Bills",
    NavIcon: (color: string, isFilled: boolean) => (
      <NavIcon name={"receipt"} color={color} isFilled={isFilled} />
    ),
  },
  {
    ViewComponent: History,
    ViewName: "History",
    NavName: "History",
    NavIcon: (color: string, isFilled: boolean) => (
      <NavIcon name={"time"} color={color} isFilled={isFilled} />
    ),
  },
];

export default Features;
