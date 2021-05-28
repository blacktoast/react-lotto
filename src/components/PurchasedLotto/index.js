import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LottoTicket from '../LottoTicket';
import { PurchasedLottoContainer, ToggleButtonContainer, LottoList } from './styles';
import ToggleButton from '../common/ToggleButton';

const PurchasedLotto = ({ lottoList }) => {
  const [isShowNumber, setIsShowNumber] = useState(false);

  const onToggleLottoNumber = ({ target }) => {
    setIsShowNumber(target.checked);
  };

  return (
    <PurchasedLottoContainer>
      <div>
        <span>총 {lottoList.length}개를 구매하였습니다.</span>
        <ToggleButtonContainer>
          <ToggleButton label="번호보기" onChange={onToggleLottoNumber} />
        </ToggleButtonContainer>
      </div>
      <LottoList isShowNumber={isShowNumber}>
        {lottoList.map((lotto, index) => (
          <li key={index}>
            <LottoTicket lottoNumbers={lotto} isShowNumber={isShowNumber} />
          </li>
        ))}
      </LottoList>
    </PurchasedLottoContainer>
  );
};

PurchasedLotto.propTypes = {
  lottoList: PropTypes.array.isRequired,
};

export default PurchasedLotto;
