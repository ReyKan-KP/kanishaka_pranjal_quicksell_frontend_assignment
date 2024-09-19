import { ReactComponent as DownIcon } from "../../assets/icons_FEtask/down.svg";
import { ReactComponent as DisplayIcon } from "../../assets/icons_FEtask/Display.svg";
import "./DisplayButton.css";

export default function DisplayButton({ onClick }) {
  return (
    <button className="display-button-wrapper" onClick={onClick}>
      <DisplayIcon width={16} height={16} />
      <h1 className="text">Display</h1>
      <DownIcon width={20} height={20} />
    </button>
  );
}
