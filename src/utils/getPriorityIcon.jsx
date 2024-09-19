import { ReactComponent as UrgentIcon } from "../assets/icons_FEtask/SVG - Urgent Priority colour.svg";
import { ReactComponent as ThreeDotsIcon } from "../assets/icons_FEtask/3 dot menu.svg";
import SignalHigh from "../assets/icons_FEtask/SignalHigh.svg";
import SignalMedium from "../assets/icons_FEtask/SignalMedium.svg";
import SignalLow from "../assets/icons_FEtask/SignalLow.svg";

export function getPriorityIcon(priority, color) {
  switch (priority) {
    case 1:
      return <img src={SignalLow} width={16} height={16} alt="Low" />;
    case 2:
      return <img src={SignalMedium} width={16} height={16} alt="Medium" />;
    case 3:
      return <img src={SignalHigh} width={16} height={16} alt="High" />;
    case 4:
      return <UrgentIcon color={color ? color : "#FC7840"} />;
    default:
      return <ThreeDotsIcon color={color ? color : "#697077"} />;
  }
}
