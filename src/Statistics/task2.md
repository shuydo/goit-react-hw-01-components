Секция статистики

Создать компонет <Statistics>, который бы отображал статистику по переданным
пропам. К примеру загрузки в облако по типу файлов, посещение веб-страницы
пользователями разных стран, финансовые траты и т. п. Данные о статистике лежат
в файле statistical-data.json.

[ { "id": "id-1", "label": ".docx", "percentage": 22 }, { "id": "id-2", "label":
".pdf", "percentage": 4 }, { "id": "id-3", "label": ".mp3", "percentage": 17 },
{ "id": "id-4", "label": ".psd", "percentage": 47 }, { "id": "id-5", "label":
".pdf", "percentage": 10 } ]

Превью компонента Statistics Описание компонента

Компонент должен принимать два пропа title и stats, в которых указывается
заголовок и объект статистики.

    title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.
    stats - массив объектов содержащих информацию о элементе статистики. Может иметь произвольное кол-во элементов.
    Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.

Компонент должен создавать DOM элемент следующей структуры.

<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>

Пример использования

import statisticalData from '/путь/к/statistical-data.json';

<Statistics title="Upload stats" stats={statisticalData} />;
<Statistics stats={statisticalData} />;
