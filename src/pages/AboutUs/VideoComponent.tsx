import React from 'react';
import cls from './AboutUs.module.scss';
import aboutone from '@/assets/img/Commpany-1024x640.jpg';
import video from '../../assets/Video/Comp.mp4';

const VideoComponent = () => {
  return (
    <div className={cls.video_conetnt}>
      <div className={cls.video_conetnt_wrapp} style={{ paddingBottom: '25px' }}>
        <div className={cls.video_conetnt_wrap_diver} style={{ textTransform: 'none' }}>
          <p>
            <video autoPlay muted loop playsInline poster={aboutone} className={cls.wrap_diver_video}>
              <source src={video} type="video/mp4" />
            </video>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
