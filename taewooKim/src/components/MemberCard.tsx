import styles from './MemberCard.module.css'
import Button from './Button.tsx'

interface MemberCardProps {
    name: string;
    field?: string; // 담당분야
    isLeader: boolean; 
    isOnline?: boolean; 
    onGreet: (name:string) => void;
    onDelete: (name:string) => void;
}

export default function MemberCard({
     name,
     field = '미정',
     isLeader,
     isOnline = false,
     onGreet,
     onDelete,
    }: MemberCardProps) {
        const handleCardClick = () => {
            alert(`${name}님의 상세 정보`);
        }

    return (
        <div className={`${styles.card} ${isLeader ? styles.leaderCard : ''}`}
            onClick={handleCardClick}
        >
            <h2>{name}</h2>
            {isLeader && <span className={styles.leaderBadge}>스터디장</span>}
            <p>{field}</p>
            <p>{isOnline ? '온라인' : '오프라인'}</p>
            <Button 
                text="인사하기"
                variant="primary"
                onClick={(event) => {
                    event.stopPropagation();
                    onGreet(name);
                }} />
            <Button
                text="삭제"
                variant="danger"
                onClick={(event) => {
                    event.stopPropagation();
                    onDelete(name);
                }} />
        </div>
    )
}
