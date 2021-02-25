import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import ShowChart from "@material-ui/icons/ShowChart";
import Fastfood from "@material-ui/icons/Fastfood";

import TodoApp from "components/TodoList/TodoApp";
import StockApp from "components/Stock/StockApp";
import RouletteApp from "components/Roulette/RouletteApp";

const dashboardRoutes = [
  {
    path: "/todoList",
    name: "투두리스트",
    rtlName: "TodoList",
    icon: PlaylistAddIcon,
    component: TodoApp,
    layout: "/yolo",
  },
  {
    path: "/roulette",
    name: "오늘 뭐 먹지?",
    rtlName: "Rulette",
    icon: Fastfood,
    component: RouletteApp,
    layout: "/yolo",
  },
  {
    path: "/stockChart",
    name: "주식차트 정보",
    rtlName: "StockInfo",
    icon: ShowChart,
    component: StockApp,
    layout: "/yolo",
  },
];

export default dashboardRoutes;
