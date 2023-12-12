import React, {useEffect, useState,AnimationEvent} from 'react';
import styles from './Dialog.module.scss';

type Props = {
  isOpen: boolean,
  closeCallback: () => void
}

const Dialog = (props:Props) => {
  const {
    isOpen,
    closeCallback
  } = props

  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [closeAnimation,setCloseAnimation] = useState<boolean>(false)

  useEffect(() => {
    setShowDialog(isOpen)
  }, [isOpen]);

  const handleAnimationEnd = (value:AnimationEvent<HTMLDivElement>) => {
    if(value.animationName.includes(`animationEnd`)){
      setShowDialog(false)
      setCloseAnimation(false)
      closeCallback()
    }
  }

  const handleCloseModal = () => {
    setCloseAnimation(!closeAnimation)
  }

  return (
    <>
      {showDialog && (
        <div className={styles.dialogWrapper}>
          <div className={styles.dialogOverlay}></div>
          <div className={[styles.dialogModal,closeAnimation ? styles.dialogModalCloseAnimation : ''].join(' ')} onAnimationEnd={handleAnimationEnd}>
            <button type="button" className="btn btn-primary" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
