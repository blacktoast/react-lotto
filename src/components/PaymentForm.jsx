import React, { Component } from "react";
import { isNumber, MAX_PAYMENT, MESSAGE, SELECTOR } from "../utils";

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: "",
      errorInputMessage: "",
    };
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.isDisabled === prevProps.isDisabled) {
      return;
    }

    if (!this.props.isDisabled) {
      this.setState(() => ({
        money: "",
      }));
    }
  };

  handleInputCheck = ({ target }) => {
    if (!isNumber(target.value)) {
      return;
    }

    const money = target.value;

    if (money === "") {
      this.setState({
        money: "",
      });

      return;
    }

    this.setState({
      money,
    });

    const errorInputMessage = this.props.isValidPayment(money)
      ? ""
      : MESSAGE.PAYMENT_FORM.INVALID_PAYMENT;

    this.setState({
      errorInputMessage,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.props.isValidPayment(this.state.money)) {
      this.setState({
        errorInputMessage: MESSAGE.PAYMENT_FORM.INVALID_PAYMENT,
      });

      return;
    }

    this.props.onMoneySubmit(this.state.money);
  };

  render() {
    return (
      <form className="mt-5" onSubmit={this.handleSubmit}>
        <label
          className="mb-2 d-inline-block"
          htmlFor={SELECTOR.ID.PAYMENT_INPUT}
        >
          구입할 금액을 입력해주세요.
        </label>
        <div className="d-flex">
          <input
            id={SELECTOR.ID.PAYMENT_INPUT}
            className="w-100 mr-2 pl-2"
            type="text"
            placeholder={`구입 금액 (${this.props.paymentMinUnit}원 단위)`}
            onChange={this.handleInputCheck}
            max={MAX_PAYMENT}
            value={this.state.money}
            disabled={this.props.isDisabled}
          />
          <button
            id={SELECTOR.ID.PAYMENT_SUBMIT}
            className="btn btn-cyan"
            type="submit"
            disabled={this.props.isDisabled}
          >
            확인
          </button>
        </div>
        <p>{this.state.errorInputMessage}</p>
      </form>
    );
  }
}

export default PaymentForm;
