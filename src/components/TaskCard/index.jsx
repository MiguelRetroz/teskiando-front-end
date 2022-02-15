import React from 'react';
import { string } from 'prop-types';
import dayjs from 'dayjs';

import BtnStatusOpen from './btn-status/btn-status-open.svg';

import CardContainer from './style';

function TaskCard({ title, status, createdAt }) {
  return (
    <CardContainer>
      <span>{ dayjs(createdAt).format('DD/MM/YY HH:MM') }</span>
      <span>{ status }</span>
      <span>{ title }</span>
      <button type="button">
        <img src={ BtnStatusOpen } alt="button change status" />
      </button>
    </CardContainer>
  );
}

TaskCard.propTypes = {
  title: string.isRequired,
  status: string.isRequired,
  createdAt: string.isRequired,
};

export default TaskCard;
