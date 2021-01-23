import React from "react";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router";
import "./Menu.css";

const UserMenu = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeposit = () => {
    history.push("/deposit");
    setAnchorEl(null);
  };
  const handleWithdrawal = () => {
    history.push("/withdrawal");
    setAnchorEl(null);
  };
  const handleTransfer = () => {
    history.push("/transfer");
    setAnchorEl(null);
  };
  const handleTransaction = () => {
    history.push("/transaction");
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        aria-controls="admin-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="menu"
      >
        <MenuIcon className="menu" />
        Actions
      </Button>
      <Menu
        id="admin-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleDeposit}>Deposit</MenuItem>
        <MenuItem onClick={handleWithdrawal}>Withdrawal</MenuItem>
        <MenuItem onClick={handleTransfer}>Transfer</MenuItem>
        <MenuItem onClick={handleTransaction}>Transaction</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
