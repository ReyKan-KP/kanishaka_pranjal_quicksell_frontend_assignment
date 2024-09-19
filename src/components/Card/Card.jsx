import { AppContext } from "../../state/state";
import { useContext } from "react";
import { BsCircleFill } from "react-icons/bs";
import { getStatusIcon } from "../../utils/getStatusIcon";
import { getPriorityIcon } from "../../utils/getPriorityIcon";
import { getAvatar } from "../../utils/avatar";
import "./Card.css";

export default function Card(props) {
  const { data, displayState } = useContext(AppContext);
  const grouping = displayState.grouping;

  const findUserById = (userId) => {
    return data?.users.find((user) => user.id === userId);
  };

  const statusIcon = getStatusIcon(props.data.status);
  const priorityIcon = getPriorityIcon(props.data.priority, "#697077");

  return (
    <div className="card-wrapper">
      <div className="id-line">
        <h1 className="id-text">{props.data.id}</h1>
        {grouping.toString() !== "user" && (
          <div className="usr-img-wrapper">
            <img
              className="usr-img"
              src={getAvatar(props.data.userId)}
              alt="user-avatar"
            />
            <BsCircleFill
              color={
                findUserById(props.data.userId)?.available ? "#FFB302" : "gray"
              }
            />
          </div>
        )}
      </div>
      <div className="title-line">
        {grouping.toString() !== "status" && (
          <div className="status-icon">{statusIcon}</div>
        )}
        <h1 className="title">{props.data.title}</h1>
      </div>
      <div className="bottom-line">
        {grouping.toString() !== "priority" && (
          <div className="priority-img-wrapper">{priorityIcon}</div>
        )}
        {props.data.tag && (
          <div className="tags">
            {props.data.tag.map((tag) => (
              <div className="tag" key={tag}>
                <BsCircleFill color="#a8a8a8" size={8} />
                <h1>{tag}</h1>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
