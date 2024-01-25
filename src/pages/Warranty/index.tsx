import cls from "./Warranty.module.scss";
import {  useModalState } from '@/components/common/modal/modal.context';
import Breadcrumb from '@components/ui/breadcrumb';

const Warranty: React.FC = () => {
  return (
    <>
    <section className={cls.section_warranty}>
      <div className={`${cls.warranty_container} ${cls.container}`}>
      <Breadcrumb />
        <h1 className={cls.warranty_header}>Гарантии Vogue Decor</h1>
        <div className={cls.warranty_desc}>
              Мы уверены в <b>качестве</b> наших светильников, мебели
              и аксессуаров. На весь товар в нашем магазине предоставляется{" "}
              <b>1 год гарантии</b>. За это время Вы успеете по достоинству оценить качество исполнения выбранной вещи.
        </div>
        <br />
        <div className={cls.warranty_desc}>
              <b>Мы полностью уверены в своем товаре</b>, но если вдруг что-либо
              произойдет, информируем Вас о деталях, касающихся распространения
              гарантии:
        </div>
        <ul className={cls.warranty_list}>
          <li className={cls.warranty_item}>
                Гарантия действует со дня передачи товара покупателю. Просим Вас
                сохранять <b>оригинал чека</b>, он является подтверждением
                покупки в нашем магазине и позволяет определить дату начала
                действия гарантии.
          </li>
          <li className={cls.warranty_item}>
                Гарантия распространяется на <b>дефекты товара</b>,
                обусловленные браком конструкции или материалов и проявившиеся с
                момента приобретения товара в магазине.
          </li>
          <li className={cls.warranty_item}>
            Гарантия действует только в случае использования товара по его{" "}
            <b>непосредственному назначению</b>.
          </li>
          <li className={cls.warranty_item}>
            Гарантия <b>не действует</b>, если товар хранился и
            эксплуатировался <b>ненадлежащим образом</b> или был{" "}
            <b>неправильно собран</b>.
          </li>
          <li className={cls.warranty_item}>
            Приемлемые условия для сохранности изделий из древесины
            являются: температура внутри помещения должна быть в пределах от
            +21 до +24°С, относительная влажность должна колебаться от 45 до
            60 % Если данные условия хранения изделий не соблюдены и в
            помещении нет датчиков для проверки температуры и влажности -
            гарантировать сохранность деревянной мебели и других предметов
            интерьера из дерева не возможно. Гарантия в таких
            обстоятельствах не действует.
          </li>
          <li className={cls.warranty_item}>
            Также гарантийным случаем не является <b>естественный износ</b>,
            порезы и царапины, возникшие в процессе эксплуатации.
          </li>
        </ul>
        <h2 className={cls.warranty_header_sec}>Обмен и возврат</h2>
        <div className={cls.warranty_desc}>
        Обмен и возврат купленного в нашем интернет-магазине товара может быть произведен в течение 14 дней с момента получения. Для этого позвоните, пожалуйста, по телефону 8 (999) 990-2020 и уточните у менеджера как это удобнее сделать.
        <br/>
        <br/>
        Приобретённый товар подлежит обмену и возврату, если он не был в употреблении, сохранены его товарный вид, потребительские свойства, пломбы, фабричные ярлыки. Также должен быть сохранен товарный чек или кассовый чек либо иной подтверждающий оплату указанного товара документ.
        </div>
        
        <h2 className={cls.warranty_header_sec}>Брак</h2>
        <div className={cls.warranty_desc}>
        В случае обнаружения брака покупатель имеет право на возврат, обмен или ремонт приобретенного товара, а именно: 
        <br/>
        <br/>
        - Если брак обнаружился в течение 2-х недель со дня покупки, то возврат/обмен происходит на пунктах выдачи по предварительной договоренности с менеджером магазина. При этом покупатель должен иметь при себе кассовый чек или счет, подтверждающий покупку в нашем интернет-магазине. Возврат денежных средств производится только по письменному заявлению от клиента.
        <br/>
        <br/>
        - Если брак обнаружился спустя 2 недели, но до окончания срока гарантийного обслуживания, то товар подлежит ремонту. Сдача товара в ремонт также производится на пунктах выдачи, опять же по предварительной договоренности.
        </div>
      </div>
    </section>
    </>
  );
};

export default Warranty;
