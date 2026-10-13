import type { SubmitEvent } from 'react';

export default function InviteForm() { 
    const handleCheck = () => {
        alert('사용 가능한 이메일입니다.');
    }

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault(); // form태그의 기본 동작인 submit 막기
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        alert(`${email}로 초대 메일을 보냈습니다!`);
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="초대할 이메일" />
            <button type="button" onClick={handleCheck}>중복 확인</button>
            <button type="submit">초대하기</button>
        </form>
    );
}
