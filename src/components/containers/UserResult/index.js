import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Animation,
  Button,
  Record,
  Title,
  XButton,
  LottoBall,
  Table,
  Thead,
  Tbody,
  TbodyRow,
} from '../../shared';
import { getComputedResult, getNumOfMatch } from './service';
import { RESULT_TABLE_DATA } from '../../../constants';
import { coin } from '../../../statics';
import './style.css';

const COIN_ANIMATION_DURATION = 1500;
const initialState = {
  profit: 0,
  rateOfReturn: 0,
};

export const UserResult = (props) => {
  const { restUseModal, lottoBundle, winningNumber, onReset, ...rest } = props;
  const { HookedModal: Modal, completeLoading, hideUserResult } = restUseModal;
  const [result, setResult] = useState(initialState);
  const { profit, rateOfReturn } = result;
  const ARIA_LABEL = { TITLE: 'user-result-title', DESC: 'user-result-desc' };

  useEffect(() => {
    setResult(() => getComputedResult(lottoBundle, winningNumber));
    setTimeout(completeLoading, COIN_ANIMATION_DURATION);
  }, [lottoBundle]);

  return (
    <Modal
      loading={<Animation animationData={coin} speed={2} height="360px" />}
      aria-labelledby={ARIA_LABEL.TITLE}
      aria-describedby={ARIA_LABEL.DESC}
      {...rest}
    >
      <>
        <XButton onClick={hideUserResult} />
        <Title id={ARIA_LABEL.TITLE}>당첨결과</Title>
        <UserResultTable lottoBundle={lottoBundle} winningNumber={winningNumber} />
        <div className="Record__wrapper" id={ARIA_LABEL.DESC}>
          <Record label="당첨 금액">{profit}원</Record>
          <Record label="총 수익률">{rateOfReturn}%</Record>
        </div>
        <div className="UserResult__reset_button_wrapper">
          <Button type="button" className="UserResult__reset_button" onClick={onReset}>
            다시 시작하기
          </Button>
        </div>
      </>
    </Modal>
  );
};

UserResult.propTypes = {
  restUseModal: PropTypes.shape({
    isUserResultOpen: PropTypes.bool,
    showUserResult: PropTypes.func,
    hideUserResult: PropTypes.func.isRequired,
    HookedModal: PropTypes.elementType.isRequired,
    completeLoading: PropTypes.func.isRequired,
  }),
  lottoBundle: PropTypes.array.isRequired,
  winningNumber: PropTypes.object.isRequired,
  onReset: PropTypes.func.isRequired,
};

function UserResultTable(props) {
  const { lottoBundle, winningNumber } = props;
  const { winningNumbers, bonusNumber } = winningNumber;

  const theadItems = ['구분', '번호'];
  const getFirstCell = (lotto) => {
    const numOfMatch = getNumOfMatch(lotto, winningNumber);
    return RESULT_TABLE_DATA[numOfMatch].DESCRIPTION;
  };
  const LottoBalls = (lotto, rowIndex) =>
    lotto.map((num, index) => (
      <LottoBall
        key={`${rowIndex}th-lotto-ball-${index}`}
        targetNumber={num}
        winningNumbers={winningNumbers.concat(bonusNumber)}
      />
    ));

  return (
    <Table>
      <Thead>{theadItems}</Thead>
      <Tbody>
        {lottoBundle.map((lotto, index) => (
          <TbodyRow key={index} rowIndex={index}>
            {[getFirstCell(lotto), LottoBalls(lotto, index)]}
          </TbodyRow>
        ))}
      </Tbody>
    </Table>
  );
}

UserResultTable.propTypes = {
  lottoBundle: PropTypes.array.isRequired,
  winningNumber: PropTypes.exact({
    winningNumbers: PropTypes.array,
    bonusNumber: PropTypes.number,
  }).isRequired,
};
