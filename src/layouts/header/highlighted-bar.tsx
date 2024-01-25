import cn from 'classnames';
import Navbar from '../Header/Navbar';
import { useModalAction } from '../../components/common/modal/modal.context';
import cls from './header.module.scss';

const HighlightedBar: React.FunctionComponent = ({
}) => {

  const { openModal } = useModalAction();

  const openFeedback = () => {
    openModal('FEEDBACK_PHONE');
  }

  return (
    <div
      className={cn(
        'w-full min-h-[40px] px-4 md:px-6 lg:px-8 flex items-center justify-center relative text-sm text-skin-inverted',
        cls.hild_cont
      )}
      style={{ backgroundColor: '#F5F3F1' }}
    >
      <Navbar />
      <button
        onClick={openFeedback}
        aria-label="Close Button"
        className={`outline-none absolute flex items-center justify-center w-7 md:w-8 h-7 md:h-8 rounded-full end-2 md:end-3 transition-colors duration-200 hover:bg-skin-fill hover:bg-opacity-10 focus:bg-skin-fill focus:bg-opacity-10 ${cls.main_logr}`}
      >
        Обратная связь
        <svg
          style={{ color: '#232323', marginLeft: '5px' }}
          width="13" height="13" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 13L8 7.5L2 2" stroke="currentColor"></path></svg>
      </button>
    </div>
  );
};

export default HighlightedBar;
