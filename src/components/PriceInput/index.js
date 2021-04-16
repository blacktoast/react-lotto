import React, { Component } from 'react';
import { Root, Form, Label, InputWrapper, Input, SubmitButton } from './style';

class PriceInput extends Component {
  constructor(props) {
    super(props);

    this.handleSubmitPrice = this.handleSubmitPrice.bind(this);
  }

  handleSubmitPrice(event) {
    event.preventDefault();

    const $priceInput = event.target.price;
    this.props.onPurchaseLottos($priceInput.valueAsNumber);
    $priceInput.value = '';
  }

  render() {
    return (
      <Root>
        <Form onSubmit={this.handleSubmitPrice}>
          <Label htmlFor="price">구입할 금액을 입력해주세요.</Label>
          <InputWrapper>
            <Input type="number" min="1000" id="price" placeholder="구입 금액" required />
            <SubmitButton disabled={this.props.isPriceInputDisabled}>확인</SubmitButton>
          </InputWrapper>
        </Form>
      </Root>
    );
  }
}

export default PriceInput;
