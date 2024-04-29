export default function TabButton({children, onSelect, isSelected}) {
  //props
  return (
    <li>
      <button className={isSelected ? 'active' : null} onClick={onSelect}>
        {children /*props.children*/}
      </button>
    </li>
  );
}
