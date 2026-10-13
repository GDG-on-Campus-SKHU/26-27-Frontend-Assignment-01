import type { CSSProperties } from 'react';

interface HeaderProps {
    title: string;
    memberCount: number;
    newMemberCount: number;
}

const headerStyle: CSSProperties = {
    padding: '24px',
    borderBottom: '2px solid #ddd',
    marginBottom: '16px',
};

const newBadgeStyle: CSSProperties = {
  marginLeft: '8px',
  padding: '2px 8px',
  borderRadius: '12px',
  backgroundColor: '#ff6b6b',
  color: 'white',
  fontSize: '14px',
};

export default function Header({ title, memberCount, newMemberCount }: HeaderProps) {
    return (
        <header style={headerStyle}>
            <h1>{title}</h1>
            <p> 현재 멤버 {memberCount}명</p>
            {newMemberCount > 0 && <span style={newBadgeStyle}>신규 {newMemberCount}명</span>}
        </header>
    );
}
