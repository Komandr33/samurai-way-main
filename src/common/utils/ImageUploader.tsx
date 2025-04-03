import React, {ChangeEvent, useRef} from 'react';
import s from '../../components/Body/Profile/Profile.module.css';
import {AppThunk, useAppDispatch} from '../../redux/store-redux';

type ImageUploader = {
  updatePhoto: (photo: string) => AppThunk
}

export const ImageUploader = (props: ImageUploader) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      dispatch(props.updatePhoto(imageUrl));
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click(); // Используем optional chaining для обращения к click
  };

  return (
    <div>
      <button className={s.replaceButton} onClick={handleButtonClick}>
        <div>Загрузить изображение</div>
      </button>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{display: 'none'}} // Скрываем input
        ref={fileInputRef} // Привязываем ref
      />
    </div>
  );
};