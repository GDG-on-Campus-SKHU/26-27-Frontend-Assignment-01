import styles from '../css/Header.module.css';

interface HeaderProps {
  title: string;
  memberCount: number;
  newMemberCount: number;
}

export default function Header({ title, memberCount, newMemberCount }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.count}>
        현재 멤버 {memberCount}명
        {newMemberCount > 0 && <span className={styles.newBadge}>신규 {newMemberCount}명</span>}
      </p>
    </header>
  );
}
