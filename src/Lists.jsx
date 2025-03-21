function Lists(props) {
  return (
    <li
      onClick={() => props.onToggle(props.id)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
        textDecoration: props.completed ? "line-through" : "none",
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          props.onDelete(props.id);
        }}
        style={{
          border: "none",
          background: "none",
          cursor: "pointer",
          color: "red",
          fontSize: "16px",
        }}
      >
        ❌
      </button>
      <span>{props.item}</span>
    </li>
  );
}

export default Lists;
