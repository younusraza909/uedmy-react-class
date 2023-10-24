import { connect } from "react-redux";


//legacy way to connect redux when we dont have hooks

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {

  return <div className="balance">{formatCurrency(balance)}</div>;
}


function mapStateToProps(state) {
  return {
    balance: state.account.balance
  }
}

export default connect(mapStateToProps)(BalanceDisplay)
