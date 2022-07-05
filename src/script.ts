let fun = (name: string, age: number): string => { return ` ${age}${name}` };

function generatePassword(name: string, age: number): string { return `${age}${name}` };

generatePassword('Yusuf', 12);


const createSkills = (name: string, ...skills: string[]): string => `${name} knows ${skills.join(',')}`;

// createSkills('Yusuf','typescript','javascript','react');
// console.log(createSkills('Yusuf', 'typescript', 'javascript', 'react'));


const getData = (data: number) => data

const getData2 = <T>(data: T) => data

getData(10);
getData2<string>('2eqweqwe');



// ----------------------------------------------------------

// type Person = {
//   name: string,
//   age: number,
//   skills?: string[]
//   nickname?: string,
//   getUsername?: () => string | null

// }


interface Person {
  name: string,
  age: number,
  password: string,
  nickname?: string,
  skills?: string[] | null,
  getUsername?: () => string | null
}

interface Admin extends Person {
  role: string
}

let User: Person = {
  name: 'Yusuf',
  age: 12,
  skills: ['typescript', 'javascript', 'react'],
  nickname: 'Yusuf',
  password: '123456',
  getUsername: () => null
}

let admin: Admin = {
  role: 'admin',
  name: 'Yunus',
  age: 12,
  skills: null,
  password: '654321',
  getUsername: () => "Yusuf",
}

console.log(admin.skills);




type SpetsTexnika= {
  id:number,
  name:string,
  description:string,
  description_bot:string,
  image:string,
  doc:string | null,
  category:number
}

const arr: SpetsTexnika[] = [
  {
      "id": 182,
      "name": "Полуприцеп U-образный самосвальный TONGDA TDZ9403ZZXP (60т)",
      "description": "<p>Полуприцеп U-образный самосвальный TONGDA TDZ9403ZZXP грузоподъемностью 60 т, с задней разгрузкой.&nbsp;</p>\r\n\r\n<p>Тент с дистанционным управлением.</p>\r\n\r\n<table border=\"0\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:100%\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td>Грузоподъёмность, кг</td>\r\n\t\t\t<td>60000</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Объём кузова, м3</td>\r\n\t\t\t<td>37,0</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Размер кузова внутренний (ДхШхВ), мм</td>\r\n\t\t\t<td>8600х2400х1800</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Вес полуприцепа, кг</td>\r\n\t\t\t<td>11800</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Толщина кузова (дно*боковая стенка), мм</td>\r\n\t\t\t<td>8*6</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Размеры пластины (верхняя*нижняя*средняя), мм</td>\r\n\t\t\t<td>12*16*8</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Форма кузова</td>\r\n\t\t\t<td>квадратная</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Ось</td>\r\n\t\t\t<td>3 х 16-20 ton&nbsp;</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Мост:&nbsp;</td>\r\n\t\t\t<td>FUWA</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td colspan=\"1\">Передний подъемный цилиндр</td>\r\n\t\t\t<td colspan=\"1\">214 # - 1 шт</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td colspan=\"1\">Вспомогательный цилиндр</td>\r\n\t\t\t<td colspan=\"1\">150 # - 2 шт</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Подвеска, шт.&nbsp;</td>\r\n\t\t\t<td>Листовая рессора, 12</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Размеры рессоры (длина*толщина), мм</td>\r\n\t\t\t<td>12*20</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Шина</td>\r\n\t\t\t<td>12:00R20*12+1</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Обод</td>\r\n\t\t\t<td>90-16 толщины</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Тормозная система</td>\r\n\t\t\t<td>4-х двойная и 2-х камерная</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Электросистема&nbsp;</td>\r\n\t\t\t<td>24В, светодиодная</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>",
      "description_bot": "Полуприцеп U-образный самосвальный TONGDA TDZ9403ZZXP грузоподъемностью 60 т, с задней разгрузкой. \r\n\r\nТент с дистанционным управлением.",
      "image": "https://shantui.xusanov.uz/files/special_technique/i.jpg",
      "doc": null,
      "category": 25
  },
  {
      "id": 181,
      "name": "Полуприцеп самосвальный на боковую",
      "description": "<p>Полуприцеп самосвальный на боковую&nbsp;<br />\r\nРазгрузку с двухсторонняя разгрузка.&nbsp;<br />\r\nМодель: MXH9401ZZX<br />\r\nЗавод: LIANGSHAN CHANGHONG<br />\r\nОбщий размер: 13300*2600*3800мм<br />\r\nРазмер кузов внутренней : 13000*2500*1800мм&nbsp;<br />\r\nОбъем 58м3<br />\r\nЗамок закрутки 12units роторные замки закрутки для контейнера 1*40ft или 2*20ft<br />\r\nСнаряженная масса (кг) 12 500<br />\r\nМаксимальная полезная нагрузка (кг)&nbsp;<br />\r\n100 000<br />\r\nНижняя пластина 8мм<br />\r\nБоковая пластина 6 мм<br />\r\nОсь 3 x 20 тонн+1x16 тонн передняя ось с автоматической функцией подъема<br />\r\nПодвеска 3 механические подвески+1 пневматическая подвеска<br />\r\nШина 12. 00r20 *17 единиц, запасная шина 16+1<br />\r\nКомплектация стандартная заводская лестница<br />\r\nТент тент с пультом дистанционного управления<br />\r\nГод выпуска 2021, новый</p>",
      "description_bot": "Полуприцеп самосвальный на боковую \r\nРазгрузку с двухсторонняя разгрузка. \r\nМодель: MXH9401ZZX\r\nЗавод: LIANGSHAN CHANGHONG\r\nОбщий размер: 13300*2600*3800мм\r\nРазмер кузов внутренней : 13000*2500*1800мм \r\nОбъем 58м3\r\nЗамок закрутки 12units роторные замки закрутки для контейнера 1*40ft или 2*20ft\r\nСнаряженная масса (кг) 12 500\r\nМаксимальная полезная нагрузка (кг) \r\n100 000\r\nНижняя пластина 8мм\r\nБоковая пластина 6 мм\r\nОсь 3 x 20 тонн+1x16 тонн передняя ось с автоматической функцией подъема\r\nПодвеска 3 механические подвески+1 пневматическая подвеска\r\nШина 12. 00r20 *17 единиц, запасная шина 16+1\r\nКомплектация стандартная заводская лестница\r\nТент тент с пультом дистанционного управления\r\nГод выпуска 2021, новый",
      "image": "https://shantui.xusanov.uz/files/special_technique/photo_2022-03-19_16-43-01.jpg",
      "doc": null,
      "category": 25
  },
  {
      "id": 180,
      "name": "Полуприцеп U образный",
      "description": "<p>Полуприцеп U образный, самосвальный на задний разгрузка.&nbsp;</p>\r\n\r\n<p>Грузоподъёмности: 50000 кг<br />\r\nОбъём кузов: 32 м3<br />\r\nЦвет: Белый&nbsp;<br />\r\nС тент дистанционный управления&nbsp;<br />\r\nРазмер кузова внутренней: 7800х2400х1700мм<br />\r\nГабаритные размеры наружный: 8600х2550х3800 мм<br />\r\nВес полуприцеп: 11800кг<br />\r\nТолщина кузов: Дно 8 мм, Баковая 6 мм<br />\r\nВерхняя пластина: 12 мм, нижняя пластина: 14 мм, средняя пластина: 8 мм<br />\r\nФорма кузов: U- образный&nbsp;<br />\r\nОсь 3 х 13-20 ton&nbsp;<br />\r\nМост: FUWA<br />\r\nПодвеска: Листовая рессора 12 шт. Ширина 12 см. Толщина 20 мм.&nbsp;<br />\r\nШина: &nbsp;12:00R20*12+1<br />\r\nОбод: 90-16 толщины.<br />\r\nТормозная система: 4-х двойная и 2-х камерная<br />\r\nЭлектросистема 24В, светодиодная.</p>",
      "description_bot": "Полуприцеп U образный, самосвальный на задний разгрузка. \r\n\r\nГрузоподъёмности: 50000 кг\r\nОбъём кузов: 32 м3\r\nЦвет: Белый \r\nС тент дистанционный управления \r\nРазмер кузова внутренней: 7800х2400х1700мм\r\nГабаритные размеры наружный: 8600х2550х3800 мм\r\nВес полуприцеп: 11800кг\r\nТолщина кузов: Дно 8 мм, Баковая 6 мм\r\nВерхняя пластина: 12 мм, нижняя пластина: 14 мм, средняя пластина: 8 мм\r\nФорма кузов: U- образный \r\nОсь 3 х 13-20 ton \r\nМост: FUWA\r\nПодвеска: Листовая рессора 12 шт. Ширина 12 см. Толщина 20 мм. \r\nШина:  12:00R20*12+1\r\nОбод: 90-16 толщины.\r\nТормозная система: 4-х двойная и 2-х камерная\r\nЭлектросистема 24В, светодиодная.",
      "image": "https://shantui.xusanov.uz/files/special_technique/CIMC-Dongyue-dump-truck-semi-trailer-and.jpg",
      "doc": null,
      "category": 25
  },
  {
      "id": 179,
      "name": "Полуприцеп",
      "description": "<p>Полуприцеп с боковой разгрузкой 11 м&nbsp;<br />\r\nВ основном для погрузки средних и тяжеловесных грузов.<br />\r\nГрузоподъёмность, (КГ): 50.000&nbsp;<br />\r\nРазмер кузов внутренней (Д*Ш*В): 11000*2500*1600 мм&nbsp;<br />\r\nОбъём кузов: 45 м3<br />\r\nОси: Zhengyang, 13T, 3 штук<br />\r\nМодель и количество шин 12R22.5, Triangle, Вакуумная шина, 12 шт +1 шт&nbsp;<br />\r\nСтальной материал, 28T, марка TFOC<br />\r\nТяговый палец, модель: 90 #<br />\r\nГидравлический цилиндр хорошего качества: 5 + 1 шт. 110 #<br />\r\nМодель обода и кол-во 9.0, 13 шт.<br />\r\nСистема рессорной подвески 10 шт. Каждый, ширина 90 мм, толщина 13 мм, механическая подвеска<br />\r\nТормозная система. Двойная тормозная камера 4шт и одиночная тормозная камера 2шт, воздушный резервуар 2шт</p>",
      "description_bot": "Полуприцеп с боковой разгрузкой 11 м \r\nВ основном для погрузки средних и тяжеловесных грузов.\r\nГрузоподъёмность, (КГ): 50.000 \r\nРазмер кузов внутренней (Д*Ш*В): 11000*2500*1600 мм \r\nОбъём кузов: 45 м3\r\nОси: Zhengyang, 13T, 3 штук\r\nМодель и количество шин 12R22.5, Triangle, Вакуумная шина, 12 шт +1 шт \r\nСтальной материал, 28T, марка TFOC\r\nТяговый палец, модель: 90 #\r\nГидравлический цилиндр хорошего качества: 5 + 1 шт. 110 #\r\nМодель обода и кол-во 9.0, 13 шт.",
      "image": "https://shantui.xusanov.uz/files/special_technique/photo_2022-03-19_16-37-10.jpg",
      "doc": null,
      "category": 25
  },
  {
      "id": 178,
      "name": "Полуприцеп цементовоз CIMC",
      "description": "<p><strong>Китайский полуприцеп для перевозки цемента (полуприцеп-цементовоз) CIMC</strong>&nbsp;ZJV9401GSNDY производства CIMC Vehicle (Group) Co., Ltd. (завод автомобильной техники в г. Шэньчжэнь, провинция Гуандун, Китай; производит грузовую автомобильную технику, в том числе полуприцепы для перевозки цемента (полуприцепы-цементовозы)&nbsp;<a href=\"http://cntruck.ru/tm/cimc.html\"><strong>CIMC</strong></a>). Грузоподъемность 31500&nbsp;кг, колесная база 5400+1310+1310&nbsp;мм, установлена АБС, полная масса 40000&nbsp;кг, шины 425/65R22.5, снаряженная масса полуприцепа 8500&nbsp;кг, максимальная нагрузка на&nbsp;седельно-сцепное устройство 16000&nbsp;кг.</p>\r\n\r\n<p>Полуприцеп цементовоз CIMC&nbsp;<br />\r\nМодель: SDW9403GXHA<br />\r\nОбъём кузов: 45 м3<br />\r\nГрузоподъёмности: 54000 кг<br />\r\nГабаритные размеры наружный: 10600х2500х4000мм<br />\r\nТолщина кузов: 4 мм<br />\r\nФорма бочка: V образный &nbsp;&nbsp;<br />\r\nМарка мост: FUBA бренд&nbsp;<br />\r\nОсь 3 х 13 тон&nbsp;<br />\r\nПалец: # 90<br />\r\nШина: , 12+1 шт. &nbsp;размер11.00R20<br />\r\nЗавод изготовитель: CIMC SHANDONG WANSHIDA SPECIAL AUTOMOBILE Co., LTD</p>\r\n\r\n<p>&nbsp;</p>",
      "description_bot": "Полуприцеп цементовоз CIMC \r\nМодель: SDW9403GXHA\r\nОбъём кузов: 45 м3\r\nГрузоподъёмности: 54000 кг\r\nГабаритные размеры наружный: 10600х2500х4000мм\r\nТолщина кузов: 4 мм\r\nФорма бочка: V образный   \r\nМарка мост: FUBA бренд \r\nОсь 3 х 13 тон \r\nПалец: # 90\r\nШина: , 12+1 шт.  размер11.00R20\r\nЗавод изготовитель: CIMC SHANDONG WANSHIDA SPECIAL AUTOMOBILE Co., LTD",
      "image": "https://shantui.xusanov.uz/files/special_technique/photo_2022-03-19_16-33-57.jpg",
      "doc": null,
      "category": 25
  },
]

arr.forEach((data):void=>{
  console.log(data.name)
})