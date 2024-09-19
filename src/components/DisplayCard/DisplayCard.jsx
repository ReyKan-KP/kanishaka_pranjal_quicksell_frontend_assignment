import { useContext } from "react";
import { AppContext } from "../../state/state";
import { ReactComponent as DownIcon } from "../../assets/icons_FEtask/down.svg";
import "./DisplayCard.css";

export default function DisplayCard() {
  const { displayState, setDisplayState } = useContext(AppContext);

  const displayOptions = {
    grouping: ["status", "user", "priority"],
    ordering: ["priority", "title"],
  };

  const onChangeHandler = (e) => {
    const modifiedDisplayState = { ...displayState };
    if (e.target.id === "grouping") {
      modifiedDisplayState.grouping = e.target.value;
    } else if (e.target.id === "ordering") {
      modifiedDisplayState.ordering = e.target.value;
    }
    setDisplayState(modifiedDisplayState);
  };

  return (
    <div className="display-card-wrapper">
      <div className="setting-wrapper">
        <h1 className="label">Grouping</h1>
        <div className="select-wrapper">
          <select id="grouping" name="grouping" onChange={onChangeHandler}>
            {displayOptions.grouping.map((item) => (
              <option value={item} selected={displayState.grouping === item}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </option>
            ))}
          </select>
          <div className="arrow-down">
            <DownIcon width={16} height={16} />
          </div>
        </div>
      </div>
      <div className="setting-wrapper">
        <h1 className="label">Ordering</h1>
        <div className="select-wrapper">
          <select id="ordering" name="ordering" onChange={onChangeHandler}>
            {displayOptions.ordering.map((item) => (
              <option value={item} selected={displayState.ordering === item}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </option>
            ))}
          </select>
          <div className="arrow-down">
            <DownIcon width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
