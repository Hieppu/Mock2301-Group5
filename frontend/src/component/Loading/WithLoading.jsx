import React, { useState } from 'react';
import styles from './WithLoading.module.scss';

const WithLoading = (WrapperComponent) => {
  const WithLoadingComponent = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleShowLoading = (isLoading) => {
      setIsLoading(isLoading);
    };
    return (
      <div className={styles.loadingContainer}>
        {isLoading && (
          <div className={styles.loadingContent}>
            <div className={styles.loadingMain}>
              <h4>Loading...</h4>
              <img src="../../../image/loading.gif" alt=''/>
            </div>
          </div>
        )}
        <WrapperComponent {...props} showLoading={handleShowLoading} />
      </div>
    );
  };

  return WithLoadingComponent;
};
export default WithLoading;
