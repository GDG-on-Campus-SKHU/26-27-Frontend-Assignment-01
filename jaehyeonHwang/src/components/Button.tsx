import type { MouseEvent } from 'react';
import styles from '../css/Button.module.css';

interface ButtonProps {
  text: string;
  variant: 'primary' | 'danger'; // 과제 요구사항에 맞게 두 값으로 설정
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ text, variant, onClick }: ButtonProps) {
  return (
    <button type="button" className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
}
