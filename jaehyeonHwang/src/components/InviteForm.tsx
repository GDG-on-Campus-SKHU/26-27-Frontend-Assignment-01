import type { FormEvent } from 'react';
import styles from '../css/InviteForm.module.css';

export default function InviteForm() {
  const handleCheckClick = () => {
    alert('사용 가능한 이메일입니다.');
  };


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = String(formData.get('email') ?? '').trim();

    if (!email) return; // 추가: 이메일을 입력하지 않은 경우에는 실행되지 않게 처리함

    alert(`${email}로 초대 메일을 보냈습니다!`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} type="email" name="email" placeholder="이메일을 입력하세요" />
      <button type="button" onClick={handleCheckClick}>
        중복 확인
      </button>
      <button type="submit">초대하기</button>
    </form>
  );
}
