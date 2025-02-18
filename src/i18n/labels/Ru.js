import Helpers from '../../common/Helpers'

export const common = {
    all: 'Все',//TODO Check if word form is correct for all places where it's used
}

export const config = {
    refresh: 'Обновлять главную страницу',
    villain: 'Меню выбора злодея',
    villain_tiers: `Показывать стадии с ${Helpers.isGH() ? 'парнями' : 'девушками'}`,
    market: 'Информация о рынке',
    marketGirlsFilter: `Фильтр ${Helpers.isGH() ? 'парней' : 'девушек'} на рынке`,
    marketEquipsFilter: 'Фильтр снаряжения на рынке',
    marketXPAff: 'XP и влечение на рынке',
    marketHideSellButton: 'Отключаемая кнопка "Продать"',
    harem: 'Информация о гареме',
    league: 'Информация о лиге',
    league_board: 'Показывать верхнюю строку в лиге',
    league_promo: 'Показывать инфо о повышении',
    simFight: 'Симуляция Лиги / Сезона / Злодеев',
    simFight_logging : 'Подробный лог в консоли браузера',
    simFight_highPrecisionMode: 'Режим высокой точности (внимание: медленный!)',
    teamsFilter: 'Фильтр в Командах',
    champions: 'Индикаторы в Чемпионах',
    champions_fixPower: `Показывая силу ${Helpers.isGH() ? 'парней' : 'девушек'} учитывать силу героя`,
    homeScreen: 'Ссылки и таймеры на главной странице',
    resourceBars: 'Полоски ресурсов / Таймеры бустеров',
    popSort: 'Сортировка и быстрая навигация по Рейдам',
    seasonStats: 'Статистика Сезона',
    pachinkoNames: 'Показывать имена в Пачинко',
    contestSummary: 'Обзор сохраненных Состязаний',
    battleEndstate: 'Показывать финальные значения при пропуске боя',
    gemStock: 'Показывать запас камней в Гареме/Рынке',
    staticBackground: 'Остановить переключение фона во время Оргий',
    rewardShards: `Показывать текущее притяжение на ${Helpers.isGH() ? 'парнях' : 'девушках'}-наградах`,
    leaderboardFix: 'Исправить список лидеров Сезона и PoV',//TODO No official name for PoV yet
    hideClaimedRewards: 'Скрывать полученные награды Сезона/Пути/PoV',//TODO No official name for PoV yet
    disableDragDrop: 'Отключить перетаскивание на Рынке',
    autoRefresh: 'Обновлять окно игры каждые 10 минут',
    villainBreadcrumbs: 'Показывать цепочку навигации на экранах злодеев',
    blessingSpreadsheetLink: 'Добавить ссылку на таблицу благословений во всплывающее окно благословений'
}
export const stConfig = {
    missionsBackground: 'Изменить фон миссий',
    collectMoneyAnimation: 'Убрать анимацию сбора денег',
    mobileBattle: 'Исправить мобильную версию экрана битв',
    darkMobileLeague: 'Темный фон в мобильной версии лиг',
    hideRotateDevice: 'Скрыть напоминание повернуть экран в мобильной версии',
    salaryTimers: `Читаемые таймеры заработка ${Helpers.isGH() ? 'парней' : 'девушек'}`,
    moveSkipButton: 'Переместить кнопку пропуска битв вниз',
    poseAspectRatio: `Исправить соотношение сторон у поз ${Helpers.isGH() ? 'парней' : 'девушек'} в битвах`,
}

export const villain = {
    darklord: 'Темный властелин',
    ninjaspy: 'Ниндзя-шпион',
    gruntt: 'Закупа',
    edwarda: 'Эдуарда',
    donatien: 'Донатьен',
    silvanus: 'Сильванус',
    bremen: 'Бремен',
    finalmecia: 'Конченция',
    rokosensei: 'Роко-Сэнсей',
    karole: 'Кэрол',
    jacksoncrew: 'Команда Джексона',
    pandorawitch: 'Пандорская ведьма',
    nike: 'Найк',
    sake: 'Сейк', //TODO No official name yet
    werebunnypolice: 'Кроличья полиция', //TODO No official name yet
    fallback: 'Злодей мира {{world}}',
    event: 'Сейчас',
}

export const market = {
    pointsUnbought: 'Очков до максимума',
    moneyUnspent: 'Нужно денег до максимума',
    moneySpent: 'Потрачено денег на очки',
    pointsLevel: 'Очков от уровня',
    pointsBought: 'Куплено очков',
    pointsEquip: 'Очков от снаряжения',
    pointsBooster: 'Очков от бустеров',
    pointsClub: 'Бонусных очков от клуба',
    boosterItem: 'бустеров',
    xpItem: 'книг',
    xpCurrency: 'XP',
    affItem: 'подарков',
    affCurrency: 'влечения',
    equips: 'предметов снаряжения',
    youOwn: 'У тебя есть <b>{{count}}</b> {{type}}.',
    youCanSell: 'Можно продать все за <b>{{cost}}</b> <span class="hudSC_mix_icn"></span>.',
    youCanGive: 'Всего можно дать <b>{{value}}</b> {{currency}}.',
}

export const marketGirlsFilter = {
    searchedName: 'Поиск',
    girlName: `Имя ${Helpers.isGH() ? 'парня' : 'девушки'}`,
    searchedClass: 'Класс',
    searchedElement: 'Элемент',
    searchedRarity: 'Редкость',
    levelRange: 'Диапазон уровней',
    searchedAffCategory: 'Категория по влечению',
    searchedAffLevel: 'Уровень влечения',
    grade0: '0 звезд',
    grade1: '1 звезда',
    grade2: '2 звезды',
    grade3: '3 звезды',
    grade4: '4 звезды',
    grade5: '5 звезд',
    grade6: '6 звезд',
    team: 'Команда',
    visitTeams: 'Сначала посетите <a href="../teams.html">Команды</a>.',
}

export const marketXPAff = {
    aff: 'След.: {{remainNext}}'
}

export const marketHideSellButton = {
    hide: 'Скрыть кнопку "Продать"',
}

export const harem = {
    marketRestocked: '> <a href="../shop.html">Рынок</a> обновился с последнего визита.',
    visitMarket: '> Посети <a href="../shop.html">Рынок</a> чтобы здесь появился обзор по ресурсам',
    haremStats: 'Статистика Гарема',
    upgrades: 'Улучшения',
    levelsAwakening: 'Уровни и Пробуждения',
    market: 'Ресурсы и Рынок',
    wikiPage: '{{name}} в вики',
    haremLevel: 'Уровень гарема',
    unlockedScenes: 'Открытые сцены',
    income: 'Доход',
    or: '{{left}} или {{right}}',
    toUpgrade: 'Чтобы улучшить всех:',
    toLevelCap: 'Довести уровень до предела:',
    toLevelMax: 'Довести уровень до максимума ({{max}}):',
    affectionScenes: 'Сцены Влечения',
    buyable: 'Доступно на рынке:',
    sellable: 'В запасе',
    gifts: 'Подарки',
    books: 'Книги',
    canBeSold: 'Можно продать за {{sc}}',
    canBeBought: '{{item}} за {{amount}}',
    marketRestock: 'Рынок обновится в {{time}} или на {{level}} уровне',
}

export const league = {
    stayInTop: 'Чтобы <em><u>остаться в топ {{top}}</u></em>, требуется минимум <em>{{points}}</em> очков',
    notInTop: 'Чтобы <em><u>оказаться в топ {{top}}</u></em>, требуется минимум <em>{{points}}</em> очков',
    challengesRegen: 'Обычная регенерация: <em>{{challenges}}</em>',
    challengesLeft: 'Осталось битв: <em>{{challenges}}</em>',
    averageScore: 'Среднее кол-во очков за битву: <em>{{average}}</em>',
    scoreExpected: 'Ожидаемый результат: <em>{{score}}</em>',
    toDemote: 'Чтобы <em><u>опуститься в лиге</u></em>, тебя должны обогнать <em>{{players}}</em> игроков',
    willDemote: 'Чтобы <em><u>опуститься в лиге</u></em>, у тебя должно быть не более <em>{{points}}</em> очков',
    willDemoteZero: 'Чтобы <em><u>опуститься в лиге</u></em>, тебе надо остаться на <em>0</em> очков',
    toNotDemote: 'Чтобы <em><u>остаться в этой лиге</u></em>, у тебя должно быть больше <em>0</em> очков',
    toStay: 'Чтобы <em><u>не повысится в лиге</u></em>, тебя должны обогнать <em>{{players}}</em> игроков',
    willStay: 'Чтобы <em><u>не повысится в лиге</u></em>, у тебя должно быть не больше <em>{{points}}</em> очков',
    hideFoughtOpponents: 'Скрыть проведенные бои',
    showFoughtOpponents: 'Показать проведенные бои',
    currentLeague: 'Текущая лига',
    victories: 'Побед',
    defeats: 'Поражений',
    unknown: 'Неизвестно',
    notPlayed: 'Осталось',
    levelRange: 'Диапазон уровней',
    leagueFinished: 'Лига завершенная {{date}}',
    opponents: 'Противников',
    leaguePoints: 'Очков',
    avg: 'В среднем',
}

export const teamsFilter = {
    searchedName: 'Поиск',
    girlName: `Имя ${Helpers.isGH() ? 'парня' : 'девушки'}`,
    searchedClass: 'Класс',
    searchedElement: 'Элемент',
    searchedRarity: 'Редкость',
    levelRange: 'Диапазон уровней',
    searchedAffCategory: 'Категория по влечению',
    searchedAffLevel: 'Уровень влечения',
    grade0: '0 звезд',
    grade1: '1 звезда',
    grade2: '2 звезды',
    grade3: '3 звезды',
    grade4: '4 звезды',
    grade5: '5 звезд',
    grade6: '6 звезд',
    searchedBlessedAttributes: 'Благословения',//TODO No official name for Blessings yet
    blessedAttributes: `Благословленные ${Helpers.isGH() ? 'парни' : 'девушки'}`,//TODO No official name for Blessings yet
    nonBlessedAttributes: `Неблагословленные ${Helpers.isGH() ? 'парни' : 'девушки'}`,//TODO No official name for Blessings yet
}

export const champions = {
    participants: 'Участников: {{participants}}/{{members}}',
    clubChampDuration: '{{duration}} с начала раунда',
}

export const resourceBars = {
    popsIn: 'Рейды через {{time}}',
    popsReady: 'Рейды завершены',
    readyAt: 'Завершатся в {{time}}',
    endAt: 'Закончится в {{time}}',
    fullAt: 'Заполнится в {{time}}',
    xp: 'Следующий: {{xp}} XP',
}

export const homeScreen = {
    clubChamp: 'Клубный Чемпион',
    completeIn: 'Завершится через ',
    newMissionsIn: 'Новые миссии через ',
    missionsReady: 'Доступны миссии',
}

export const seasonStats = {
    fights: 'Битв',
    victories: 'Побед',
    defeats: 'Поражений',
    mojoWon: 'Выиграно удали',
    mojoLost: 'Потяряно удали',
    mojoWonAvg: 'Средняя выигрываемая удаль',
    mojoLostAvg: 'Средняя проигрываемая удаль',
    mojoAvg: 'Средняя удаль за битву',
}

export const pachinkoNames = {
    availableGirls: `Доступные ${Helpers.isGH() ? 'парни' : 'девушки'}: `,
}

export const contestSummary = {
    totalRewards: 'Всего Сохраненных Наград ({{contests}} Соревнований):',
    contestsWarning: 'Награды соревнований исчезают через 21 день!',
}

export const villainBreadcrumbs = {
    town: 'Город',
    adventure: 'Похождения',
    begincity: 'Стартовый город',
    gemskingdom: 'Королевство самоцветов',
    ninjavillage: 'Деревня ниндзя',
    invadedkingdom: 'Осажденное королевство',
    juysea: 'Жуевое море',
    admittance: 'Царство мертвых',
    magicforest: 'Волшебный лес',
    hamelintown: 'Гамельн',
    plainofrituals: 'Земля ритуалов',
    heroesuniversity: 'Геройский университет',
    ninjasacredlands: 'Священные земли ниндзя',
    splatters: 'Влажный Архипелаг',
    digisekai: 'Цифромир',
    stairway: 'Небесная лестница',
    training: 'Training Dimension',
    weresquidisland: 'WereSquid Island',
}

export const blessingSpreadsheetLink = {
    name: `Открыть таблицу благословений от ${Helpers.isGH() ? 'Bella' : 'zoopokemon'}`
}
