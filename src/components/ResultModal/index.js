import React from 'react';
import {
  Root,
  Modal,
  ModalInner,
  CloseButton,
  CloseX,
  Title,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  EarningRate,
  RestartButton,
} from './style';
import { RANK_CONVERTER, WINNING_PRIZE } from '../../constants';

const ResultModal = ({ winningNumbers, lottos, isOpen, price, onCloseModal, onResetGame }) => {
  const calculateResult = () => {
    const rankCount = {
      '1st': 0,
      '2nd': 0,
      '3rd': 0,
      '4th': 0,
      '5th': 0,
    };
    const { mainNumbers, bonusNumber } = winningNumbers;

    lottos.forEach((lotto) => {
      const mainPoint = lotto.numbers.filter((number) => mainNumbers.includes(number)).length;
      const isSecondRanked = mainPoint === 5 && lotto.numbers.includes(bonusNumber);
      const bonusPoint = isSecondRanked ? 0.5 : 0;

      if (mainPoint < 3) return;

      rankCount[RANK_CONVERTER[mainPoint + bonusPoint]]++;
    });

    const earningRate = calculateEarningRate(rankCount);

    return { rankCount, earningRate };
  };

  const calculateEarningRate = (rankCount) => {
    const totalEarning = Object.entries(rankCount).reduce((sum, [rank, count]) => {
      return sum + count * WINNING_PRIZE[rank];
    }, 0);

    return ((totalEarning / price - 1) * 100).toFixed(2);
  };

  const clickDimmedArea = (event) => {
    if (event.target === event.currentTarget) closeModal();
  };

  const closeModal = () => {
    onCloseModal();
  };

  const { rankCount, earningRate } = calculateResult();
  return (
    <Root>
      <Modal onClick={clickDimmedArea}>
        <ModalInner>
          <CloseButton onClick={closeModal}>
            <svg viewBox="0 0 40 40">
              <CloseX d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </CloseButton>
          <Title>💰당첨 통계💰</Title>
          <Table>
            <Thead>
              <Tr>
                <Th>일치 갯수</Th>
                <Th>당첨금</Th>
                <Th>당첨 갯수</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>3개</Td>
                <Td>5,000</Td>
                <Td>{rankCount['5th']}개</Td>
              </Tr>
              <Tr>
                <Td>4개</Td>
                <Td>50,000</Td>
                <Td>{rankCount['4th']}개</Td>
              </Tr>
              <Tr>
                <Td>5개</Td>
                <Td>1,500,000</Td>
                <Td>{rankCount['3rd']}개</Td>
              </Tr>
              <Tr>
                <Td>5개 + 보너스볼</Td>
                <Td>30,000,000</Td>
                <Td>{rankCount['2nd']}개</Td>
              </Tr>
              <Tr>
                <Td>6개</Td>
                <Td>2,000,000,000</Td>
                <Td>{rankCount['1st']}개</Td>
              </Tr>
            </Tbody>
          </Table>
          <EarningRate>당신의 총 수익률은 {earningRate}%입니다.</EarningRate>
          <RestartButton onClick={onResetGame}>다시 시작하기</RestartButton>
        </ModalInner>
      </Modal>
    </Root>
  );
};

export default ResultModal;