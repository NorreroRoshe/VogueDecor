import cn from 'classnames';
import cls from './ThxMod.module.scss';
import { useModalAction } from '../../common/modal/modal.context';

const ThxMod: React.FC = () => {

  const { closeModal } = useModalAction();
  
  return (
    <div className={cn('w-full relative')} style={{maxWidth: '425px'}}>
      <div className="flex bg-skin-fill mx-auto rounded-lg overflow-hidden">
        <div className="w-full rounded-md shadow-dropDown flex flex-col justify-center" style={{padding: '30px', paddingBottom: '55px'}}>
<div className={cls.feedback_container}>
      <div className={cls.feedback_tubs}>
        <div>
          <div className={cls.feedback_tubs_iconsWrapper}>
            <div className={cls.iconsWrapper_itemIcon}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30"
              style={{fill: '#40C057', border: '2px solid rgb(64, 192, 87)', borderRadius: '50%', padding: '8px'}}>
              <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
              </svg></div>
          </div>
        </div>
      <div className={cls.feedback_tubs_close}  onClick={closeModal}>
          <svg className="ui-9F9ST" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.00045 24L24 0.999999M23.9995 24L0.999999 1" stroke="currentColor" stroke-miterlimit="10"></path>
          </svg>
        </div>
      </div>
      <form className={cls.feedback_formo} method="POST">
        <div className={cls.formo_title}>Благодарим вас )<br/> Ваша заявка отправлена!</div>
        <div className={cls.callme_container}>Вы можете сэкономить время, позвонив нам прямо сейчас:</div>
        <div className={cls.phnumber_container}>
          <div className={cls.phnumber_container_wrapp}>
            <a className={cls.phnumber_container_wrapp_phone} href="tel:+79999902020">
              +7 (999) 990-20-20
            </a>
          </div>
        </div>
      </form>
    </div>
        </div>
      </div>
    </div>
  );
};

export default ThxMod;
