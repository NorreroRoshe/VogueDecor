// import React from 'react';
// import ActiveLink from '@/components/ui/active-link';
// import useBreadcrumb, { convertBreadcrumbTitle } from '@/utils/use-breadcrumb';
// import { useTranslation } from 'next-i18next';
// import { IoChevronForward } from 'react-icons/io5';
// import { IoHomeOutline } from 'react-icons/io5';
// import { ROUTES } from '@/utils/routes';

// interface Props {
//   children: any;
// }

// const BreadcrumbItem: React.FC<Props> = ({ children, ...props }) => {
//   return (
//     <li
//       className="text-sm text-skin-muted px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-skin-base"
//       {...props}
//     >
//       {children}
//     </li>
//   );
// };

// const BreadcrumbSeparator: React.FC<Props> = ({ children, ...props }) => {
//   return (
//     <li className="text-base text-skin-base mt-[1px]" {...props}>
//       {children}
//     </li>
//   );
// };

// export const BreadcrumbItems = (props: any) => {
//   let children: any = React.Children.toArray(props.children);

//   children = children.map((child: string, index: number) => (
//     <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
//   ));

//   const lastIndex = children.length - 1;

//   children = children.reduce((acc: any, child: string, index: number) => {
//     const notLast = index < lastIndex;
//     if (notLast) {
//       acc.push(
//         child,
//         <BreadcrumbSeparator key={`breadcrumb_sep${index}`}>
//           {props.separator}
//         </BreadcrumbSeparator>
//       );
//     } else {
//       acc.push(child);
//     }
//     return acc;
//   }, []);

//   return (
//     <div className="Vogue DecorBreadcrumb flex items-center">
//       <ol className="flex items-center w-full overflow-hidden">{children}</ol>
//     </div>
//   );
// };

// const Breadcrumb: React.FC<{ separator?: string }> = ({
//   separator = (
//     <IoChevronForward className="text-skin-base text-opacity-40 text-15px" />
//   ),
// }) => {
//   const breadcrumbs = useBreadcrumb();
//   const { t } = useTranslation('common');
//   ROUTES;
//   return (
//     <BreadcrumbItems separator={separator}>
//       <ActiveLink
//         href={ROUTES.HOME}
//         activeClassName="font-semibold text-heading"
//       >
//         <span className="inline-flex items-center">
//           <IoHomeOutline className="me-1.5 text-skin-base text-15px" />
//           {t('breadcrumb-home')}
//         </span>
//       </ActiveLink>

//       {breadcrumbs?.map((breadcrumb: any) => (
//         <ActiveLink
//           href={breadcrumb.href}
//           activeClassName="font-semibold text-heading"
//           key={breadcrumb.href}
//         >
//           <span className="capitalize">
//             {convertBreadcrumbTitle(breadcrumb.breadcrumb)}
//           </span>
//         </ActiveLink>
//       ))}
//     </BreadcrumbItems>
//   );
// };

// export default Breadcrumb;

import React from 'react';
import ActiveLink from '@/components/ui/active-link';
import useBreadcrumb, { convertBreadcrumbTitle } from '@/utils/use-breadcrumb';
import { useTranslation } from 'next-i18next';
import { IoChevronForward } from 'react-icons/io5';
import { IoHomeOutline } from 'react-icons/io5';
import { ROUTES } from '@/utils/routes';

interface Props {
  children: any;
}

const BreadcrumbItem: React.FC<Props> = ({ children, ...props }) => {
  return (
    <li
      className="text-sm text-skin-muted px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-skin-base"
      {...props}>
      {children}
    </li>
  );
};

const BreadcrumbSeparator: React.FC<Props> = ({ children, ...props }) => {
  return (
    <li className="text-base text-skin-base mt-[1px]" {...props}>
      {children}
    </li>
  );
};

export const BreadcrumbItems = (props: any) => {
  let children: any = React.Children.toArray(props.children);

  children = children.map((child: string, index: number) => (
    <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
  ));

  const lastIndex = children.length - 1;

  children = children.reduce((acc: any, child: string, index: number) => {
    const notLast = index < lastIndex;
    if (notLast) {
      acc.push(
        child,
        <BreadcrumbSeparator key={`breadcrumb_sep${index}`}>{props.separator}</BreadcrumbSeparator>,
      );
    } else {
      acc.push(child);
    }
    return acc;
  }, []);

  return (
    <div className="Vogue DecorBreadcrumb flex items-center">
      <ol className="flex items-center w-full overflow-hidden">{children}</ol>
    </div>
  );
};

const Breadcrumb: React.FC<{ separator?: string }> = ({
  separator = <IoChevronForward className="text-skin-base text-opacity-40 text-15px" />,
}) => {
  const breadcrumbs = useBreadcrumb();
  const { t } = useTranslation('common');
  ROUTES;
  return (
    <div style={{marginTop: '30px',
    marginBottom: '20px',
    //  marginLeft: '12px'
     }}>
      <BreadcrumbItems separator={separator}>
        <ActiveLink href={ROUTES.HOME} activeClassName="font-semibold text-heading">
          <span className="inline-flex items-center">
            <IoHomeOutline className="me-1.5 text-skin-base text-15px" />
            {t('VogueDecor.com')}
          </span>
        </ActiveLink>

        {breadcrumbs?.map((breadcrumb: any) => (
          <ActiveLink
            href={breadcrumb.href}
            activeClassName="font-semibold text-heading"
            key={breadcrumb.href}>
            <span className="capitalize">{convertBreadcrumbTitle(breadcrumb.breadcrumb)}</span>
          </ActiveLink>
        ))}
      </BreadcrumbItems>
      {/* Остальной JSX код ... */}
    </div>
  );
};

export default Breadcrumb;
