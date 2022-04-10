import { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableHeader from "./TableHeader";

// const rowInformation = [
//     {"name" : "Bob", "age":23 },
//     {"name" : "Jenny", "age":30}
// ]

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
const sortedRowInformation = (rowArray, comparator) => {
  // console.log(rowArray);
  const stabilizedRowArray = rowArray.map((el, index) => [el, index]);
  // console.log(stabilizedRowArray);
  stabilizedRowArray.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  return stabilizedRowArray.map((el) => el[0]);
};

export default function TableContent({ coins }) {
  // console.log(coins);
  const [orderDirection, setOrderDirection] = useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = useState("market-cap");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(1);
  const [rowInformation, setRowInformation] = useState(coins);

  // console.log(coins);
  // setRowInformation({coins});
  // console.log(setRowInformation)
  const handleRequestSort = (event, property) => {
    // console.log(property,valueToOrderBy,orderDirection);
    const isAscending = valueToOrderBy === property && orderDirection === "asc";
    // console.log(isAscending);
    setValueToOrderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };
  // console.log(rowInformation);
  return (
    <>
      <TableContainer>
        <Table>
          <TableHeader
            valueToOrderBy={valueToOrderBy}
            orderDirection={orderDirection}
            handleRequestSort={handleRequestSort}
          />
          {sortedRowInformation(
            coins,
            getComparator(orderDirection, valueToOrderBy)
          ).map((coin, index) => (
            <TableRow key={index} className="coin">
              <TableCell className="coin-name">
                <img src={coin.image} />
                {coin.name}
              </TableCell>
              <TableCell className="coin-symbol">{coin.symbol}</TableCell>

              <TableCell className="coin-price ">
                ₹{coin.current_price.toLocaleString("en-IN")}
              </TableCell>
              {/* <TableCell className="coin-percent ">
                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                </TableCell> */}

              {coin.price_change_percentage_24h < 0 ? (
                <TableCell className="coin-percent red">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </TableCell>
              ) : (
                <TableCell className="coin-percent green">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </TableCell>
              )}

              <TableCell className="coin-high">
                ₹{coin.high_24h.toLocaleString("en-IN")}
              </TableCell>
              <TableCell classNam="coin-low">
                ₹{coin.low_24h.toLocaleString("en-IN")}
              </TableCell>
              <TableCell className="coin-marketcap ">
                ₹{coin.market_cap.toLocaleString("en-IN")}
              </TableCell>
            </TableRow>
          ))}

          {/* {   
                        sortedRowInformation(rowInformation,getComparator(orderDirection,valueToOrderBy)).map((coin,index)=>(
                            <TableRow key={index}>
                                <TableCell>
                                    {coin.name}
                                </TableCell>
                                <TableCell>
                                    {coin.id}
                                </TableCell>
                            </TableRow>
                        ))
                    } */}
        </Table>
      </TableContainer>
    </>
  );
}
