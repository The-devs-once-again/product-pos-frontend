import MenuView from "./MenuView";
import OrdersView from "./OrdersView";
import BillsView from "./BillsView";
import HistoryView from "./HistoryView";

const Views = [
  {
    ViewComponent: MenuView,
    ViewName: "MenuView",
  },
  {
    ViewComponent: OrdersView,
    ViewName: "OrdersView",
  },
  {
    ViewComponent: BillsView,
    ViewName: "BillsView",
  },
  {
    ViewComponent: HistoryView,
    ViewName: "HistoryView",
  },
];

export default Views;
