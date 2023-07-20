/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { css } from '@emotion/react';

const styles = {
  errorContainer: css({
    display: 'flex',
    flexDirection: 'column',
  }),
  errorMessage: css({
    fontSize: '20px',
  }),
};

const Error = () => {
  const [searchParams] = useSearchParams();
  const errorCode = searchParams.get('errorCode');

  let errorTitle = errorCode;

  return (
    <div css={styles.errorContainer}>
      <h1>{errorTitle}</h1>
      <Link to='/'>homeへ</Link>
    </div>
  );
};

export default Error;
