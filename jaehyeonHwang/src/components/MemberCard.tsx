import type { MouseEvent } from 'react';
import Button from './Button';
import styles from '../css/MemberCard.module.css'

interface MemberCardProps {
  name: string;
  role?: string;
  isLeader: boolean;
  isOnline?: boolean;
  onGreet: (name: string) => void;
  onDelete: (name: string) => void;
}

export default function MemberCard({
  name,
  role = "미정", // 과제 요구사항
  isLeader,
  isOnline = false,
  onGreet,
  onDelete,
}: MemberCardProps) {
  const handleCardClick = () => {
    alert(`${name}님의 상세 정보`);
  };

  const handleGreetClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onGreet(name);
  };

  const handleDeleteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onDelete(name);
  };

  return (
    <div
      className={isLeader ? `${styles.card} ${styles.leaderCard}` : styles.card}
      onClick={handleCardClick}
    >
      <div className={styles.top}>
        <h2 className={styles.name}>{name}</h2>
        {isLeader && <span className={styles.leaderBadge}>스터디장</span>}
      </div>
      <p className={styles.role}>담당 분야: {role}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? "온라인" : "오프라인"}
      </p>
      <div className={styles.buttons}>
        <Button text="인사하기" variant="primary" onClick={handleGreetClick} />
        <Button text="삭제" variant="danger" onClick={handleDeleteClick} />
      </div>
    </div>
  );
}
