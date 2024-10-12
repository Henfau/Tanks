import { List } from "react-virtualized";
import tanks from "./assets/tanks.json";
import Image from "./Image.tsx";

const list = tanks;
function TankList() {
  return (
    <List
      width={390}
      height={800}
      rowCount={list.length}
      rowHeight={400}
      rowRenderer={rowRenderer}
      autoHeight={true}
      autoWidth={true}
    />
  );
}

function rowRenderer(props: RowRendererProps) {
  return (
    <div key={props.key} style={props.style}>
      <Image url={list[props.index]} />
    </div>
  );
}

interface RowRendererProps {
  key: any;
  index: any;
  isScrolling: any;
  isVisible: any;
  style: any;
}

export default TankList;
