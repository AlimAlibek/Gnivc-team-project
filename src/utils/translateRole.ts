import Access from '../models/Access';

const translateRole = new Map([
  [Access.VIEWER, 'Читатель'],
  [Access.EDITOR, 'Редактор'],
  [Access.DPP, 'Сотрудник ДПП'],
  [Access.UIB, 'Сотрудник УИБ'],
  [Access.UIT, 'Сотрудник УИТ'],
  [Access.EXPERT, 'Эксперт ФКУ'],
  [Access.TEH, 'Тех. эксперт ФКУ'],
  [Access.SUPERVISOR, 'Руководитель ФКУ'],
  [Access.DISPATCH, 'Диспетчер ФКУ'],
]);

export default translateRole;
