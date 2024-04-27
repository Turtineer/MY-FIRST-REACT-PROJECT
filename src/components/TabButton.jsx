export default function TabButton({children, onSelect}) {
  //props
  return (
    <li>
      <button onClick={onSelect}>{children /*props.children*/}</button>
    </li>
  );
}
