import Header from './components/Header.tsx';
import MemberCard from './components/MemberCard.tsx'
import InviteForm from './components/InviteForm.tsx'

export default function App() {
  const taewoo = {
    name: '김태우',
    field: '프론트엔드',
    isLeader: true,
    isOnline: true,
  };

  const handleGreet = (name: string) => {
    alert(`${name}님, 안녕하세요!`);
  };

  const handleDelete = (name: string) => {
    console.log(`${name} 삭제 요청`);
  };


  return (
    <div>
      <Header title="프론트엔드 스터디" memberCount={3} newMemberCount={0}/>
      <MemberCard {...taewoo} onGreet={handleGreet} onDelete={handleDelete} />
      <MemberCard name="황재현" field="디자인" isLeader={false} isOnline={true} 
        onGreet={handleGreet} onDelete={handleDelete}/>
      <MemberCard name="김동주" isLeader={false} 
        onGreet={handleGreet} onDelete={handleDelete}/>
      <InviteForm />
    </div>
  )
}
