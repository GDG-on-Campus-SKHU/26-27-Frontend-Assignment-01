import Header from './components/Header';
import MemberCard from './components/MemberCard';
import InviteForm from './components/InviteForm';

function App() {
  const leader = {
    name: '김태우',
    role: '프론트엔드',
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
    <div className="container">
      <Header title="프론트엔드 스터디" memberCount={3} newMemberCount={0} />
      <MemberCard {...leader} onGreet={handleGreet} onDelete={handleDelete} />
      <MemberCard
        name="황재현"
        role="디자인"
        isLeader={false}
        isOnline={true}
        onGreet={handleGreet}
        onDelete={handleDelete}
      />
      <MemberCard name="김동주" isLeader={false} onGreet={handleGreet} onDelete={handleDelete} />
      <InviteForm />
    </div>
  );
}

export default App;
