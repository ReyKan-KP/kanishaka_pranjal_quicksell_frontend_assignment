import { BsCircleFill } from "react-icons/bs";
import { ReactComponent as ThreeDotMenu } from "../../assets/icons_FEtask/3 dot menu.svg";
import { ReactComponent as AddIcon } from "../../assets/icons_FEtask/add.svg";
import "./Header.css";

export default function Header({ icon, name, count = 0, available }) {
  return (
    <div className="header-wrapper">
      <div className="left">
        <div className="icon">
          {icon}
          {available !== undefined && (
            <div className="available-icon">
              <BsCircleFill color={available ? "#FFB302" : "gray"} size={8} />
            </div>
          )}
        </div>
        <h1 className="title">{name}</h1>
        <h1 className="count">{count}</h1>
      </div>
      <div className="right">
        <AddIcon width={16} height={16} />
        <ThreeDotMenu width={16} height={16} />
      </div>
    </div>
  );
}
