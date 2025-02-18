import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { CSSProperties } from "react";

const Row = ({ index, style }: { index: number; style?: CSSProperties }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    Row {index}
  </div>
);

const ListVirtualize = () => {
  return (
    <AutoSizer style={{ width: "500px", height: "100vh" }}>
      {({ height, width }) => (
        <List
          className="List"
          height={height}
          itemCount={10000}
          itemSize={35}
          width={width}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};

export default ListVirtualize;
