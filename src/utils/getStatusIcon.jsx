import { ReactComponent as BacklogIcon } from "../assets/icons_FEtask/Backlog.svg";
import { ReactComponent as InProgressIcon } from "../assets/icons_FEtask/in-progress.svg";
import { ReactComponent as DoneIcon } from "../assets/icons_FEtask/Done.svg";
import { ReactComponent as ToDoIcon } from "../assets/icons_FEtask/To-do.svg";
import { ReactComponent as CanceledIcon } from "../assets/icons_FEtask/Cancelled.svg";

export function getStatusIcon(status, color) {
  switch (status) {
    case "Backlog":
      return <BacklogIcon color={color ? color : "gray"} />;
    case "Todo":
      return <ToDoIcon color={color ? color : "gray"} />;
    case "In progress":
      return <InProgressIcon color={color ? color : "#F1CA49"} />;
    case "Done":
      return <DoneIcon color={color ? color : "#5E6AD2"} />;
    case "Canceled":
      return <CanceledIcon color={color ? color : "gray"} />;
    default:
      return <BacklogIcon color={color ? color : "gray"} />;
  }
}
