import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

export default function TableHeader(props) {
  const { valueToOrderBy, orderDirection, handleRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow className="coin ">
        <TableCell key="name" className="table-header coin-name">
          <TableSortLabel
            active={valueToOrderBy === "name"}
            direction={valueToOrderBy === "name" ? orderDirection : "asc"}
            onClick={createSortHandler("name")}
            className="coin-name"
          >
            Name
          </TableSortLabel>
        </TableCell>
        <TableCell key="symbol" className="table-header coin-symbol">
          <TableSortLabel
            active={valueToOrderBy === "symbol"}
            direction={valueToOrderBy === "symbol" ? orderDirection : "asc"}
            onClick={createSortHandler("symbol")}
            className="coin-symbol"
          >
            Symbol
          </TableSortLabel>
        </TableCell>
        <TableCell key="current-price" className="table-header coin-price">
          <TableSortLabel
            active={valueToOrderBy === "current_price"}
            direction={
              valueToOrderBy === "current_price" ? orderDirection : "asc"
            }
            onClick={createSortHandler("current_price")}
            className="coin-price"
          >
            Current Price
          </TableSortLabel>
        </TableCell>
        <TableCell
          key="price_change_percentage_24h"
          className="table-header coin-percent"
        >
          <TableSortLabel
            active={valueToOrderBy === "price_change_percentage_24h"}
            direction={
              valueToOrderBy === "price_change_percentage_24h"
                ? orderDirection
                : "asc"
            }
            onClick={createSortHandler("price_change_percentage_24h")}
            className="coin-percent"
          >
            24h
          </TableSortLabel>
        </TableCell>
        <TableCell key="high_24h" className="table-header coin-high">
          <TableSortLabel
            active={valueToOrderBy === "high_24h"}
            direction={valueToOrderBy === "high_24h" ? orderDirection : "asc"}
            onClick={createSortHandler("high_24h")}
            className="coin-high"
          >
            24h High
          </TableSortLabel>
        </TableCell>
        <TableCell key="low_24h" className="table-header coin-low">
          <TableSortLabel
            active={valueToOrderBy === "low_24h"}
            direction={valueToOrderBy === "low_24h" ? orderDirection : "asc"}
            onClick={createSortHandler("low_24h")}
            classNam="coin-low"
          >
            24h Low
          </TableSortLabel>
        </TableCell>
        <TableCell key="market_cap" className="table-header coin-marketcap">
          <TableSortLabel
            active={valueToOrderBy === "market_cap"}
            direction={valueToOrderBy === "market_cap" ? orderDirection : "asc"}
            onClick={createSortHandler("market_cap")}
            className="coin-marketcap"
          >
            Market-Cap
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
