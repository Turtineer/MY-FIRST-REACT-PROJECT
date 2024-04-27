export default function TabButton({children}) {
  //props
  function handleClick() {
    console.dir('hello world');
  }
  return (
    <li>
      <button onClick={handleClick}>{children /*props.children*/}</button>
    </li>
  );
}
