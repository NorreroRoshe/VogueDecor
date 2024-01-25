import cn from 'classnames';
import cls from './Ui.module.scss';

interface Props {
  className?: string;
  children?: any;
  el?: HTMLElement;
  clean?: boolean;
  line?: boolean;
}

const Container: React.FC<Props> = ({
  children,
  className,
  el = 'div',
  clean,
  line
}) => {

  const rootClassName = cn(className, {
    'mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10': !clean,
    [cls.rootClassNamePadding]: true
  });
  
  
  let Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    el as any;

  return <Component className={rootClassName}>{children}</Component>;
};

export default Container;
