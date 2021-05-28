import PropTypes from 'prop-types';
import React from 'react';
import { BONUS_COUNT, LOTTO, NUMBER_COUNT, WINNING_COUNT, WINNING_PRIZE_INFO } from '../../constants/lottoData';
import { toFixedNumber } from '../../utils/format';
import Modal from '../common/Modal';
import TextButton from '../common/Button/TextButton';
import { RateOfReturnMessage, ResultTableContainer } from './styles.js';

const ResultModal = ({ lottoList, winningNumber, closeResultModal, restart }) => {
  const getNumbersMatchCount = (lottoTicket) => {
    return lottoTicket.reduce(
      (matchCount, lottoNumber) =>
        winningNumber.numbers.includes(lottoNumber) ? matchCount + NUMBER_COUNT : matchCount,
      0,
    );
  };

  const getBonusNumberMatchCount = (lottoTicket) => {
    return lottoTicket.includes(winningNumber.bonusNumber) ? BONUS_COUNT : 0;
  };

  const getResult = () => {
    const result = {
      [WINNING_COUNT.SIX]: 0,
      [WINNING_COUNT.FIVE_AND_BONUS]: 0,
      [WINNING_COUNT.FIVE]: 0,
      [WINNING_COUNT.FOUR]: 0,
      [WINNING_COUNT.THREE]: 0,
    };

    lottoList.forEach((lottoTicket) => {
      let matchCount = getNumbersMatchCount(lottoTicket);

      if (matchCount < WINNING_COUNT.THREE) {
        return;
      }

      if (matchCount === WINNING_COUNT.FIVE) {
        matchCount += getBonusNumberMatchCount(lottoTicket);
      }

      result[matchCount] += 1;
    });

    return result;
  };

  const getRateOfReturn = (result) => {
    try {
      const totalPrize = Object.keys(result).reduce(
        (sum, curCount) => sum + WINNING_PRIZE_INFO[curCount].PRIZE * result[curCount],
        0,
      );

      return (totalPrize / (lottoList.length * LOTTO.PRICE) - 1) * 100;
    } catch (e) {
      return 0;
    }
  };

  const result = getResult() || [];

  return (
    <Modal onClose={closeResultModal}>
      <h2>🏆 당첨 통계 🏆</h2>
      <ResultTableContainer>
        <table>
          <thead>
            <tr>
              <th>일치 갯수</th>
              <th>당첨금</th>
              <th>당첨 갯수</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(result)
              .sort()
              .map((matchCount) => (
                <tr key={matchCount}>
                  <td>{WINNING_PRIZE_INFO[matchCount].DESCRIPTION}</td>
                  <td>{WINNING_PRIZE_INFO[matchCount].PRIZE.toLocaleString('ko-KR')} 원</td>
                  <td>{result[matchCount]}장</td>
                </tr>
              ))}
          </tbody>
        </table>
      </ResultTableContainer>
      <RateOfReturnMessage>당신의 총 수익률은 {toFixedNumber(getRateOfReturn(result), 2)}%입니다.</RateOfReturnMessage>
      <TextButton type="reset" onClick={restart} width="100%">
        다시 시작하기
      </TextButton>
    </Modal>
  );
};

ResultModal.propTypes = {
  lottoList: PropTypes.array.isRequired,
  winningNumber: PropTypes.shape({
    numbers: PropTypes.array.isRequired,
    bonusNumber: PropTypes.number.isRequired,
  }),
  closeResultModal: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
};

export default ResultModal;
