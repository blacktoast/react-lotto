import React, { createRef, useRef, useState } from "react";
import PropTypes from "prop-types";

import { ERROR_MESSAGE, GUIDE_MESSAGE } from "../../@shared/constants/messages";
import { isDistinctNumbers } from "../../@shared/utils/common";
import ErrorMessageBox from "../common/ErrorMessageBox";
import {
  Button,
  Container,
  Header,
  InputBox,
  InputBoxes,
  InputHeader,
  NumberContainer,
} from "./style";
import { LOTTO_LENGTH } from "../../@shared/constants/lotto";

const WinningNumberInput = ({ updateLottoResult, openModal }) => {
  const winningInputRefs = useRef(
    Array.from({ length: LOTTO_LENGTH }, () => createRef())
  );
  const bonusNumberRef = useRef();

  const [isValidInput, setValidInputState] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();

    const winningNumbers = winningInputRefs.current.map((ref) =>
      Number(ref.current.value)
    );
    const bonusNumber = Number(bonusNumberRef.current.value);

    if (isDistinctNumbers([...winningNumbers, bonusNumber])) {
      setValidInputState(true);
      updateLottoResult(winningNumbers, bonusNumber);
      openModal();
    } else {
      setValidInputState(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Header>{GUIDE_MESSAGE.WINNING_NUMBER}</Header>
      <Container>
        <NumberContainer>
          <InputHeader>당첨 번호</InputHeader>
          <InputBoxes>
            {Array.from({ length: 6 }, (_, i) => (
              <InputBox
                ref={winningInputRefs.current[i]}
                key={`winningInput-${i}`}
                name="winning-number"
                type="number"
                min="1"
                max="45"
                required="required"
              />
            ))}
          </InputBoxes>
        </NumberContainer>

        <NumberContainer>
          <InputHeader>보너스 번호</InputHeader>
          <InputBox
            ref={bonusNumberRef}
            name="bonus-number"
            type="number"
            min="1"
            max="45"
            required="required"
          />
        </NumberContainer>
      </Container>
      {!isValidInput && (
        <ErrorMessageBox text={ERROR_MESSAGE.DUPLICATED_NUMBER} />
      )}
      <Button type="submit">확인</Button>
    </form>
  );
};

WinningNumberInput.propTypes = {
  updateLottoResult: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default WinningNumberInput;
