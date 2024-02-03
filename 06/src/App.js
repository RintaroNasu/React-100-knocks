import React, { useState } from "react";
import "./App.css";
import Styled from "styled-components";
import html2canvas from 'html2canvas';

function App() {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [tel, setTel] = useState();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const onChangeName = (e) => setName(e.target.value);
  const onChangeDate = (e) => setDate(e.target.value);
  const onChangeTel = (e) => setTel(e.target.value);
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagePreview(reader.result);
      }
    };
    reader.readAsDataURL(selectedImage);
  };
  const handleDownload = () => {
    // ProfileCardコンポーネントのHTML要素を取得
    const profileCard = document.getElementById('profile-card');
  
    // HTML要素から画像をキャプチャし、Canvasに描画
    html2canvas(profileCard).then((canvas) => {
      // Canvasから画像データを取得し、URLに変換
      const imageUrl = canvas.toDataURL('image/png');
  
      // 仮想的なリンクを作成し、画像のダウンロードをトリガー
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'profile-card.png';
      link.click();
    });
  };

  return (
    <Title>
      <TopSentence>プロフィール自動生成</TopSentence>
      <ParentElement>
        <Profile id="profile-card">
          <Image>{imagePreview && <img src={imagePreview} alt="選択された画像" />}</Image>
          <p>名前:{name}</p>
          <p>お誕生日:{date}</p>
          <p>電話番号:{tel}</p>
        </Profile>
        <div>
          <Form>
            <div>
              <p>お名前</p>
              <Input value={name} onChange={onChangeName} type="text" />
            </div>
            <div>
              <p>お誕生日</p>
              <Input value={date} onChange={onChangeDate} type="date" />
            </div>
            <div>
              <p>電話番号</p>
              <Input value={tel} onChange={onChangeTel} type="tel" />
            </div>
            <div>
              <p>プロフィール画像</p>
              <input type="file" onChange={handleImageChange} accept="image/*" />
            </div>
            <button onClick={handleDownload}>DownLoad as PNG</button>
          </Form>
        </div>
      </ParentElement>
    </Title>
  );
}

export default App;

const Title = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;
`;
const ParentElement = Styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  text-align: center;
`;
const Profile = Styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 15px -10px;
`;
const TopSentence = Styled.div`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 4rem
`;
const Image = Styled.div`
img {
  width: 80%; 
  height: auto; 
  border-radius: 50%; 
    overflow: hidden; 
}
`;
const Form = Styled.form`
  text-align: left;
`
const Input = Styled.input`
  width: 250px;
  height: 40px;
`