import cls from './Сollaboration.module.scss';
import sotrud from '@/assets/img/img/sotrud.jpg';
import first from '@/assets/img/price-tag-3-svgrepo-com.svg';
import second from '@/assets/img/balance-svgrepo-com.svg';
import third from '@/assets/img/factory_qf4fouc7hc64.svg';
import fourth from '@/assets/img/activity-svgrepo-com.svg';
import fifth from '@/assets/img/shop_6jjktjc460s0.svg';
import sixth from '@/assets/img/warehouse_2749v1n2fdom.svg';
import Breadcrumb from '@components/ui/breadcrumb';
import { ReturnForm } from '../../components/returnForm/ReturnForm';
import {useRouter} from 'next/router'

const Collaboration: React.FC = () => {
  const page = useRouter();
  return (
    <>
    <div className={cls.section_collaboration}>
    <div className={`${cls.br_container} ${cls.container}`}>
      <Breadcrumb />
    </div>
        <div className={cls.content}>
          <div>
            <div className={cls.content_title}>Сотрудничество</div>
            <div className={cls.content_sotrud_img_ss}>
              <div className={cls.content_sotrud_img_s}></div>
            </div>
            <img
              className={cls.content_sotrud_img}
              width="90%"
              alt="Салон Vogue Decor на Новой Риге"
              src={sotrud.src}
            // title="Салон Vogue Decor на Новой Риге Аутлет Виллидж"
            />
          <div className={cls.container}>
            <br />
            {/* <i>Салон Vogue Decor на Новой Риге</i> */}
            <br />
            <div className={cls.content_desc}>
              Vogue Decor приглашает к сотрудничеству ритейлеров, дилеров, интернет-дилеров, а также
              региональных партнеров.&nbsp;Vogue Decor является крупным поставщиком светильников,
              аксессуаров для интерьера. <br />
            </div>
            <br />
            <br />
            <div>
              <span
                style={{
                  fontSize: '26px',
                  textAlign: 'center',
                  display: 'block',
                }}>
                Для дизайнеров, ритейлеров, интернет-дилеров и региональных партнеров:
                <br />
              </span>
              <br />
              <br />
              <br />
              <table width="100%">
                <tbody>
                  <tr
                    style={{
                      borderBottom: '1px solid #805856',
                    }}>
                    <td width="15%">
                    <img
                      className={cls.content_first_img}
                      width="100%"
                      alt="Салон Vogue Decor на Новой Риге"
                      src={first.src}
                    />
                    </td>
                    <td
                      width="85%"
                      style={{
                        paddingBottom: '10px',
                        paddingTop: '10px',
                        paddingLeft: '30px'
                      }}>
                      <b
                        style={{
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          fontFamily: 'sans-serif',
                        }}>
                        ЦЕНА-КАЧЕСТВО
                      </b>
                      :<br />
                      долгосрочное партнерство и объем заказов у фабрик-производителей позволяют нам
                      предложить вам лучшие условия сотрудничества
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: '1px solid #805856',
                    }}>
                    <td width="5%">
                    <img
                      className={cls.content_second_img}
                      width="100%"
                      alt="Салон Vogue Decor на Новой Риге"
                      src={second.src}
                    />
                    </td>
                    <td
                      width="95%"
                      style={{
                        paddingBottom: '10px',
                        paddingTop: '10px',
                        paddingLeft: '30px'
                      }}>
                      <b
                        style={{
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          fontFamily: 'sans-serif',
                        }}>
                        СТАБИЛЬНОСТЬ
                      </b>
                      :<br />
                      Vogue Decor уже более 15 лет на рынке
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: '1px solid #805856',
                    }}>
                    <td width="5%">
                      
                    <img
                      className={cls.content_third_img}
                      width="100%"
                      alt="Салон Vogue Decor на Новой Риге"
                      src={third.src}
                    />
                    </td>
                    <td
                      width="95%"
                      style={{
                        paddingBottom: '10px',
                        paddingTop: '10px',
                        paddingLeft: '30px'
                      }}>
                      <b
                        style={{
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          fontFamily: 'sans-serif',
                        }}>
                        РАБОТА НАПРЯМУЮ С ПРОИЗВОДИТЕЛЕМ
                      </b>
                      :<br />
                      Сотрудничество с нами, подразумевает внесение корректировок в ту или иную
                      модель светильника как из наличия, так и под заказ
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: '1px solid #805856',
                    }}>
                    <td width="5%">
                      
                    <img
                      className={cls.content_fourth_img}
                      width="100%"
                      alt="Салон Vogue Decor на Новой Риге"
                      src={fourth.src}
                    />
                    </td>
                    <td
                      width="95%"
                      style={{
                        paddingBottom: '10px',
                        paddingTop: '10px',
                        paddingLeft: '30px'
                      }}>
                      <b
                        style={{
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          fontFamily: 'sans-serif',
                        }}>
                        Активность
                      </b>
                      :<br />
                      Мы постоянно участвуем в выставках и обновляем свой ассортимент в
                      соответствиеи с текущими трендами и модой в сфере дизайна
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: '1px solid #805856',
                    }}>
                    <td width="5%">
                      
                    <img
                      className={cls.content_fifth_img}
                      width="100%"
                      alt="Салон Vogue Decor на Новой Риге"
                      src={fifth.src}
                    />
                    </td>
                    <td
                      width="95%"
                      style={{
                        paddingBottom: '10px',
                        paddingTop: '10px',
                        paddingLeft: '30px'
                      }}>
                      <b
                        style={{
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          fontFamily: 'sans-serif',
                        }}>
                        Салоны в Москве
                      </b>
                      :<br />
                      Наш ассортимент представлен в самых крупных торговых комплексах Москвы и
                      Московской области
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: '1px solid #805856',
                    }}>
                    <td width="5%">
                      
                    <img
                      className={cls.content_sixth_img}
                      width="100%"
                      alt="Салон Vogue Decor на Новой Риге"
                      src={sixth.src}
                    />
                    </td>
                    <td
                      width="95%"
                      style={{
                        paddingBottom: '10px',
                        paddingTop: '10px',
                        paddingLeft: '30px'
                      }}>
                      <b
                        style={{
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          fontFamily: 'sans-serif',
                        }}>
                        СКЛАДСКАЯ ПРОГРАММА
                      </b>
                      :<br />
                      большой ассортимент товаров в&nbsp;наличии на складе
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className={cls.collab_subscribe}>
        <ReturnForm pageMess={page.pathname}/>
      </div>
    </div>
    </>
  );
};

export default Collaboration;
