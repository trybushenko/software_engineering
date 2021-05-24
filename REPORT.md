# Універсальний кодувальник речень TF.js

![alt text](https://newdaycrypto.com/wp-content/uploads/2020/04/6f22de6463b198225158e89a867ff8d2.jpg)

## 1. Вступ
Машинне навчання (англ. machine learning) — це підгалузь штучного інтелекту в галузі інформатики, 
яка часто застосовує статистичні прийоми для надання комп'ютерам здатності 
«навчатися» (тобто, поступово покращувати продуктивність у певній задачі) з даних, 
без того, щоби бути програмованими явно.

Назву «машинне навчання» (англ. machine learning) було започатковано 1959 року Артуром Семюелем. 
Еволюціонувавши з досліджень розпізнавання образів та теорії обчислювального навчання в галузі штучного інтелекту,
машинне навчання досліджує вивчення та побудову алгоритмів, які можуть навчатися й робити передбачення з даних, — такі алгоритми 
долають слідування строго статичним програмним інструкціям, здійснюючи керовані даними прогнози або ухвалювання рішень
шляхом побудови моделі з вибіркових входів. Машинне навчання застосовують в ряді обчислювальних задач, в яких розробка 
та програмування явних алгоритмів з доброю продуктивністю є складною або нездійсненною; до прикладів застосувань 
належать фільтрування електронної пошти, виявляння мережних вторгників або зловмисних інсайдерів, що добуваються витоку даних, 
оптичне розпізнавання символів (ОРС), навчання ранжуванню та комп'ютерний зір.

Машинне навчання тісно пов'язане (та часто перетинається) з обчислювальною статистикою, 
яка також зосереджується на прогнозуванні шляхом застосування комп'ютерів. Воно має тісні зв'язки з математичною оптимізацією, 
яка забезпечує цю галузь методами, теорією та прикладними областями. Машинне навчання іноді об'єднують з добуванням даних, де
друга підгалузь фокусується більше на розвідувальному аналізі даних, і є відомою як навчання без учителя.
Машинне навчання також може бути спонтанним, і застосовуваним для навчання та встановлення базових характерів поведінки різних суб'єктів,
а потім застосовуваним для пошуку виразних аномалій.

В межах галузі аналізу даних машинне навчання є методом, який застосовують для винаходження складних моделей та алгоритмів, 
які слугують прогнозуванню — в комерційному застосуванні це відоме як передбачувальна аналітика. Ці аналітичні моделі дозволяють дослідникам, 
науковцям з даних, інженерам та аналітикам «виробляти надійні, повторювані рішення та результати» та розкривати «приховані розуміння» 
шляхом навчання з історичних співвідношень та тенденцій в даних.
## 2. Універсальний кодувальник речень.
Це модель для кодування пропозицій у вбудовуються вектори, які спеціально націлені на передачу навчання іншим завданням НЛП.
Модель ефективна і забезпечує точну продуктивність при виконанні різних завдань передачі. Універсальний кодувальник дає досить 
гарне уявлення про речення.

### Отже, він має багато потужних варіантів використання, які перевершують попередні методи, деякі з яких можуть бути:
 #### -пошук інформації
 #### -кластеризація документів
 #### -класифікація тексту
 #### -підсумовування
 #### -трансферне навчання в НЛП 
 
Однак модель дуже важка, і для вилучення вектора для тексту потрібен якийсь час. Отже, якщо ваша система не така складна і не дуже чутлива, 
і має короткі текстові дані, то ви можете безпосередньо використовувати вкладення слів для представлення тексту. 
Оскільки ці моделі вбудовування слів дають вектор фіксованого розміру для кожного слова, ви можете усереднити вектори для всіх слів в тексті. 
Це дає приблизне (але правильне до деякого рівня) уявлення всього тексту.

Хоча Universal Sentence Encoder краще, ніж традиційні вбудовування, це не останній прорив. 
Google випустив BERT - Bidirectional Encoder Representations from Transformers яке перевершило попередні моделі. 
Всі ці останні моделі використовують attention mechanism.

На момент написання цього запису в блозі запуск BERT на моїй локальній машині неможливий через специфікацій високого класу. 
Моя оперативна пам'ять здається і ноутбук зависає. Так що так! Не так здорово для ентузіаста штучного інтелекту, як я, який хоче спробувати новітні 
сучасні моделі.
## 3. Як працює універсальний кодувальник речень.
![alt text](https://www.gstatic.com/aihub/tfhub/universal-sentence-encoder/example-similarity.png)
Семантична схожість - це міра того, наскільки два фрагменти тексту мають однакове значення. 
Це в цілому корисно для отримання хорошого висвітлення численних способів висловлення думки за 
допомогою мови без необхідності їх ручного перерахування.
Прості програми включають поліпшення охоплення систем, які ініціюють поведінку певних ключових слів, фраз або висловлювань.