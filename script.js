const KEYS = {
    workers: 'ak_workers',
    history: 'ak_history',
    settings: 'ak_settings',
    currency: 'ak_currency',
    language: 'ak_language'
  };
  
  const defaults = { language: 'ru', currency: 'KZT', theme: 'green' };
  
  const roles = {
    trainee: { label: { ru: 'Стажер', kk: 'Тағылымгер', en: 'Trainee' }, coefficient: 0.7 },
    worker: { label: { ru: 'Работник', kk: 'Қызметкер', en: 'Worker' }, coefficient: 1 },
    experienced: { label: { ru: 'Опытный работник', kk: 'Тәжірибелі қызметкер', en: 'Experienced' }, coefficient: 1.3 },
    senior: { label: { ru: 'Старший работник', kk: 'Аға қызметкер', en: 'Senior worker' }, coefficient: 1.6 }
  };
  
  const translations = {
    ru: {
      accounting: 'Бухгалтерия', dashboard: 'Обзор', workers: 'Работники', distribution: 'Распределение',
      history: 'История', analytics: 'Аналитика', settings: 'Настройки', localData: 'Данные хранятся локально',
      online: 'Локальный режим', hello: 'Добрый день', overview: 'Вот состояние вашей команды сегодня',
      addWorker: 'Добавить работника', newDistribution: 'Новое распределение', giveAdvance: 'Выдать аванс',
      totalEarnings: 'Общий заработок', advances: 'Выданные авансы', bonuses: 'Общие бонусы',
      activeWorkers: 'Активные работники', thisMonth: 'за текущий месяц', workerOfMonth: 'Работник месяца',
      noWorker: 'Работник не назначен', chooseWorker: 'Назначить работника', quickActions: 'Быстрые действия',
      recentActivity: 'Последняя активность', noActivity: 'Пока нет операций', team: 'В команде',
      manageTeam: 'Управление командой', search: 'Поиск по имени...', allStatuses: 'Все статусы',
      active: 'Активен', inactive: 'Неактивен', name: 'Имя', role: 'Роль', specialty: 'Специальность',
      level: 'Уровень', coefficient: 'Коэффициент', status: 'Статус', bonus: 'Бонус', debt: 'Долг',
      actions: 'Действия', edit: 'Изменить', delete: 'Удалить', emptyWorkers: 'Добавьте первого работника',
      emptyWorkersText: 'Команда появится здесь после заполнения профилей.', addFirst: 'Добавить работника',
      workerTitle: 'Новый работник', editTitle: 'Редактировать работника', fullName: 'Имя и фамилия',
      specialtyPlaceholder: 'Например, монтажник', save: 'Сохранить', cancel: 'Отмена', monthWorker: 'Работник месяца',
      fixedBonus: 'Фиксированный бонус', percentBonus: 'Процентная прибавка', specialBonus: 'Специальный коэффициент',
      benefit: 'Льгота', close: 'Закрыть', distributionTitle: 'Распределение заработка',
      distributionText: 'Выберите участников и задайте общий фонд.', earnings: 'Общий заработок',
      currency: 'Валюта', participants: 'Участники расчета', divide: 'ПОДЕЛИТЬ',
      noParticipants: 'Выберите хотя бы одного активного работника', baseShare: 'Базовая доля',
      advance: 'Аванс', deduction: 'Удержание', payout: 'К выплате', totalCoefficients: 'Всего коэффициентов',
      calculationDone: 'Расчет выполнен и сохранен', historyTitle: 'История расчетов', noHistory: 'Расчетов еще нет',
      details: 'Подробности', analyticsTitle: 'Аналитика', payments: 'Общие выплаты', debts: 'Задолженности',
      paymentsByWorker: 'Выплаты по работникам', settingsTitle: 'Настройки', language: 'Язык интерфейса',
      theme: 'Тема оформления', greenTheme: 'Зеленая', yellowTheme: 'Оливковая', dataManagement: 'Управление данными',
      clearData: 'Очистить локальные данные', clearDataText: 'Удалит работников, историю расчетов и настройки.',
      clearConfirm: 'Очистить все локальные данные? Это нельзя отменить.', settingsSaved: 'Настройки сохранены',
      workerSaved: 'Работник сохранен', workerDeleted: 'Работник удален', advanceIssued: 'Аванс выдан',
      advanceHistory: 'История авансов', date: 'Дата', amount: 'Сумма', noAdvances: 'Авансов нет',
      invalidAmount: 'Введите корректную положительную сумму', invalidCoefficient: 'Коэффициент должен быть больше нуля',
      needWorker: 'Выберите работника', advanceTooLarge: 'Аванс не может быть больше текущего долга или планируемой выплаты',
      required: 'Заполните обязательные поля', confirmDelete: 'Удалить этого работника?', noCalculation: 'Сначала выполните расчет',
      roleUp: 'Повысить', roleDown: 'Понизить'
    },
    kk: {
      accounting: 'Бухгалтерия', dashboard: 'Шолу', workers: 'Қызметкерлер', distribution: 'Бөлу',
      history: 'Тарих', analytics: 'Талдау', settings: 'Баптаулар', localData: 'Деректер жергілікті сақталады',
      online: 'Жергілікті режим', hello: 'Қайырлы күн', overview: 'Бүгінгі командаңыздың жағдайы',
      addWorker: 'Қызметкер қосу', newDistribution: 'Жаңа бөлу', giveAdvance: 'Аванс беру',
      totalEarnings: 'Жалпы табыс', advances: 'Берілген аванстар', bonuses: 'Жалпы бонустар',
      activeWorkers: 'Белсенділер', thisMonth: 'осы айда', workerOfMonth: 'Ай қызметкері',
      noWorker: 'Қызметкер тағайындалмаған', chooseWorker: 'Қызметкер тағайындау', quickActions: 'Жылдам әрекеттер',
      recentActivity: 'Соңғы әрекет', noActivity: 'Әзірге операция жоқ', team: 'Командада',
      manageTeam: 'Команданы басқару', search: 'Аты бойынша іздеу...', allStatuses: 'Барлық күйлер',
      active: 'Белсенді', inactive: 'Белсенді емес', name: 'Аты', role: 'Рөлі', specialty: 'Мамандығы',
      level: 'Деңгей', coefficient: 'Коэффициент', status: 'Күйі', bonus: 'Бонус', debt: 'Қарыз',
      actions: 'Әрекеттер', edit: 'Өзгерту', delete: 'Жою', emptyWorkers: 'Бірінші қызметкерді қосыңыз',
      emptyWorkersText: 'Профильдерді толтырғаннан кейін команда осында көрінеді.', addFirst: 'Қызметкер қосу',
      workerTitle: 'Жаңа қызметкер', editTitle: 'Қызметкерді өзгерту', fullName: 'Аты-жөні', specialty: 'Мамандығы',
      specialtyPlaceholder: 'Мысалы, монтажшы', save: 'Сақтау', cancel: 'Бас тарту', monthWorker: 'Ай қызметкері',
      fixedBonus: 'Тұрақты бонус', percentBonus: 'Пайыздық үстеме', specialBonus: 'Арнайы коэффициент',
      benefit: 'Жеңілдік', close: 'Жабу', distributionTitle: 'Табысты бөлу',
      distributionText: 'Қатысушыларды таңдап, қорды енгізіңіз.', earnings: 'Жалпы табыс', currency: 'Валюта',
      participants: 'Есепке қатысушылар', divide: 'БӨЛУ', noParticipants: 'Кемінде бір белсенді қызметкерді таңдаңыз',
      baseShare: 'Негізгі үлес', advance: 'Аванс', deduction: 'Ұсталым', payout: 'Төлемге',
      totalCoefficients: 'Коэффициенттер жиыны', calculationDone: 'Есеп орындалды және сақталды',
      historyTitle: 'Есептер тарихы', noHistory: 'Есептер әлі жоқ', details: 'Толығырақ', analyticsTitle: 'Талдау',
      payments: 'Жалпы төлемдер', debts: 'Қарыздар', paymentsByWorker: 'Қызметкерлер бойынша төлемдер',
      settingsTitle: 'Баптаулар', language: 'Интерфейс тілі', theme: 'Безендіру тақырыбы', greenTheme: 'Жасыл',
      yellowTheme: 'Зәйтүн', dataManagement: 'Деректерді басқару', clearData: 'Жергілікті деректерді тазарту',
      clearDataText: 'Қызметкерлерді, тарихты және баптауларды жояды.', clearConfirm: 'Барлық жергілікті деректерді тазарту керек пе?',
      settingsSaved: 'Баптаулар сақталды', workerSaved: 'Қызметкер сақталды', workerDeleted: 'Қызметкер жойылды',
      advanceIssued: 'Аванс берілді', advanceHistory: 'Аванстар тарихы', date: 'Күні', amount: 'Сома',
      noAdvances: 'Аванс жоқ', invalidAmount: 'Дұрыс оң соманы енгізіңіз', invalidCoefficient: 'Коэффициент нөлден үлкен болуы керек',
      needWorker: 'Қызметкерді таңдаңыз', advanceTooLarge: 'Аванс жоспарланған төлемнен көп болмауы керек',
      required: 'Міндетті өрістерді толтырыңыз', confirmDelete: 'Бұл қызметкерді жою керек пе?', noCalculation: 'Алдымен есеп жасаңыз',
      roleUp: 'Жоғарылату', roleDown: 'Төмендету'
    },
    en: {
      accounting: 'Accounting', dashboard: 'Dashboard', workers: 'Workers', distribution: 'Distribution',
      history: 'History', analytics: 'Analytics', settings: 'Settings', localData: 'Data is stored locally',
      online: 'Local mode', hello: 'Good day', overview: 'Your team at a glance', addWorker: 'Add worker',
      newDistribution: 'New distribution', giveAdvance: 'Give advance', totalEarnings: 'Total earnings',
      advances: 'Advances paid', bonuses: 'Total bonuses', activeWorkers: 'Active workers', thisMonth: 'this month',
      workerOfMonth: 'Worker of the month', noWorker: 'No worker assigned', chooseWorker: 'Assign worker',
      quickActions: 'Quick actions', recentActivity: 'Recent activity', noActivity: 'No operations yet',
      team: 'on the team', manageTeam: 'Manage your team', search: 'Search by name...', allStatuses: 'All statuses',
      active: 'Active', inactive: 'Inactive', name: 'Name', role: 'Role', specialty: 'Specialty', level: 'Level',
      coefficient: 'Coefficient', status: 'Status', bonus: 'Bonus', debt: 'Debt', actions: 'Actions', edit: 'Edit',
      delete: 'Delete', emptyWorkers: 'Add your first worker',
      emptyWorkersText: 'Your team will appear here as profiles are added.', addFirst: 'Add worker',
      workerTitle: 'New worker', editTitle: 'Edit worker', fullName: 'Full name', specialty: 'Specialty',
      specialtyPlaceholder: 'For example, installer', monthWorker: 'Worker of the month', fixedBonus: 'Fixed bonus',
      percentBonus: 'Percentage increase', specialBonus: 'Special coefficient', benefit: 'Benefit', save: 'Save',
      cancel: 'Cancel', close: 'Close', distributionTitle: 'Earnings distribution',
      distributionText: 'Choose participants and set the shared fund.', earnings: 'Total earnings', currency: 'Currency',
      participants: 'Calculation participants', divide: 'DIVIDE', noParticipants: 'Choose at least one active worker',
      baseShare: 'Base share', advance: 'Advance', deduction: 'Deduction', payout: 'Payout',
      totalCoefficients: 'Total coefficients', calculationDone: 'Calculation completed and saved',
      historyTitle: 'Calculation history', noHistory: 'No calculations yet', details: 'Details',
      analyticsTitle: 'Analytics', payments: 'Total payouts', debts: 'Debts', paymentsByWorker: 'Payments by worker',
      settingsTitle: 'Settings', language: 'Interface language', theme: 'Appearance', greenTheme: 'Green',
      yellowTheme: 'Olive', dataManagement: 'Data management', clearData: 'Clear local data',
      clearDataText: 'Removes workers, calculation history and settings.', clearConfirm: 'Clear all local data? This cannot be undone.',
      settingsSaved: 'Settings saved', workerSaved: 'Worker saved', workerDeleted: 'Worker deleted',
      advanceIssued: 'Advance issued', advanceHistory: 'Advance history', date: 'Date', amount: 'Amount',
      noAdvances: 'No advances', invalidAmount: 'Enter a valid positive amount',
      invalidCoefficient: 'Coefficient must be greater than zero', needWorker: 'Choose a worker',
      advanceTooLarge: 'Advance cannot exceed the planned payout', required: 'Fill in required fields',
      confirmDelete: 'Delete this worker?', noCalculation: 'Run a calculation first', roleUp: 'Promote', roleDown: 'Demote'
    }
  };
  
  let state = {
    workers: [],
    history: [],
    settings: { ...defaults },
    currentView: 'dashboard',
    lastResult: null
  };
  
  const t = (key) => key === 'accounting' ? 'BurmalBank' : (translations[state.settings.language]?.[key] || translations.ru[key] || key);
  
  function read(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  }
  
  function saveData() {
    localStorage.setItem(KEYS.workers, JSON.stringify(state.workers));
    localStorage.setItem(KEYS.history, JSON.stringify(state.history));
    localStorage.setItem(KEYS.settings, JSON.stringify(state.settings));
    localStorage.setItem(KEYS.currency, JSON.stringify(state.settings.currency));
    localStorage.setItem(KEYS.language, JSON.stringify(state.settings.language));
  }
  
  function loadData() {
    const workers = read(KEYS.workers, []);
    const history = read(KEYS.history, []);
    const settings = read(KEYS.settings, { ...defaults });
    state.workers = Array.isArray(workers) ? workers : [];
    state.history = Array.isArray(history) ? history : [];
    state.settings = { ...defaults, ...(settings && typeof settings === 'object' ? settings : {}) };
    state.settings.language = ['ru', 'kk', 'en'].includes(state.settings.language) ? state.settings.language : 'ru';
    state.settings.currency = ['KZT', 'USD', 'EUR', 'RUB'].includes(state.settings.currency) ? state.settings.currency : 'KZT';
  }
  
  function saveWorkers() { localStorage.setItem(KEYS.workers, JSON.stringify(state.workers)); }
  function saveSettings() { localStorage.setItem(KEYS.settings, JSON.stringify(state.settings)); }
  
  function escapeHtml(value = '') {
    return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  }
  
  function money(value, currency = state.settings.currency) {
    const locale = state.settings.language === 'en' ? 'en-US' : (state.settings.language === 'kk' ? 'kk-KZ' : 'ru-RU');
    return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(Number(value) || 0) + ' ' + currency;
  }
  
  function generateUniqueId() {
    return 'w_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }
  
  function initials(name) {
    return (name || '').split(' ').map(x => x[0]).join('').slice(0, 2).toUpperCase() || '??';
  }
  
  function currentMonthWorker() { return state.workers.find(w => w.monthWorker && w.status !== 'inactive'); }
  function totalAdvances() { return state.workers.reduce((sum, w) => sum + (Number(w.debt) || 0), 0); }
  function totalBonuses() { return state.workers.reduce((sum, w) => sum + (Number(w.bonus) || 0), 0); }
  function totalPayouts() { return state.history.reduce((sum, h) => sum + (Number(h.totalPayout) || 0), 0); }
  
  function layout() {
    document.documentElement.lang = state.settings.language === 'kk' ? 'kk' : state.settings.language;
    document.body.classList.toggle('light-theme', state.settings.theme === 'yellow');
    document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
    document.getElementById('headerLanguage').value = state.settings.language;
    document.getElementById('pageCrumb').textContent = t(state.currentView);
    renderView();
  }
  
  function renderView() {
    const app = document.getElementById('app');
    const views = {
      dashboard: renderDashboard,
      workers: renderWorkers,
      distribution: renderDistribution,
      history: renderHistory,
      analytics: renderAnalytics,
      settings: renderSettings
    };
    app.innerHTML = views[state.currentView] ? views[state.currentView]() : renderDashboard();
    bindView();
  }
  
  function pageHead(title, subtitle, action = '') {
    return `<div class="page-heading"><div><p class="eyebrow">BurmalBank</p><h1>${title}</h1><p class="subtle">${subtitle}</p></div>${action}</div>`;
  }
  
  function renderDashboard() {
    const month = currentMonthWorker();
    const active = state.workers.filter(w => w.status !== 'inactive').length;
    const recent = state.history.slice(0, 3);
    return pageHead(`${t('hello')} 👋`, t('overview'), `<button class="btn btn-primary" data-action="add-worker">＋ ${t('addWorker')}</button>`) +
      `<div class="stats-grid">
        <div class="stat-card"><span class="stat-icon">↗</span><span class="stat-label">${t('totalEarnings')}</span><div class="stat-value">${money(state.history.reduce((s, h) => s + Number(h.total || 0), 0))}</div><span class="stat-note">${t('thisMonth')}</span></div>
        <div class="stat-card"><span class="stat-icon">◷</span><span class="stat-label">${t('advances')}</span><div class="stat-value">${money(totalAdvances())}</div><span class="stat-note">${state.workers.filter(w => w.debt > 0).length} ${t('team')}</span></div>
        <div class="stat-card"><span class="stat-icon">✦</span><span class="stat-label">${t('bonuses')}</span><div class="stat-value">${money(totalBonuses())}</div><span class="stat-note">${month ? escapeHtml(month.name) : t('noWorker')}</span></div>
        <div class="stat-card"><span class="stat-icon">♙</span><span class="stat-label">${t('activeWorkers')}</span><div class="stat-value">${active}</div><span class="stat-note">${t('team')}</span></div>
      </div>
      <div class="grid-2">
        <div class="panel">
          <div class="panel-header"><h2 class="panel-title">${t('quickActions')}</h2></div>
          <div class="quick-actions">
            <button class="quick-action" data-action="add-worker"><b>＋</b><span>${t('addWorker')}</span></button>
            <button class="quick-action" data-action="distribution"><b>↗</b><span>${t('newDistribution')}</span></button>
            <button class="quick-action" data-action="advance"><b>◷</b><span>${t('giveAdvance')}</span></button>
          </div>
          <div class="panel-header" style="margin-top:27px"><h2 class="panel-title">${t('recentActivity')}</h2><span class="panel-kicker">${state.history.length}</span></div>
          <div class="activity-list">${recent.length ? recent.map(h => `<div class="activity"><i class="activity-dot"></i><div><b>${t('distribution')} · ${money(h.total, h.currency)}</b><span>${new Date(h.date).toLocaleDateString()} · ${h.rows.length}${t('team')}</span></div></div>`).join('') : `<div class="empty-state">${t('noActivity')}</div>`}</div>
        </div>
        <div class="month-card panel">
          <div class="month-top"><span class="month-badge">✦ ${t('workerOfMonth')}</span><button class="icon-button" style="color:#c3ded1" data-action="choose-month">✎</button></div>
          ${month ? `<h2>${escapeHtml(month.name)}</h2><p>${escapeHtml(month.specialty || roles[month.role]?.label[state.settings.language] || '')}</p><div class="month-meta"><div><strong>${money(month.bonus || 0)}</strong><span>${t('fixedBonus')}</span></div><div><strong>${Number(month.monthPercent || 0)}%</strong><span>${t('percentBonus')}</span></div></div>` : `<h2>${t('noWorker')}</h2><p>${t('chooseWorker')}</p><button class="btn btn-yellow" data-action="choose-month" style="margin-top:24px">${t('chooseWorker')}</button>`}
        </div>
      </div>`;
  }
  
  function workerRows() {
    const query = (document.getElementById('workerSearch')?.value || '').toLowerCase();
    const filter = document.getElementById('statusFilter')?.value || 'all';
    return state.workers
      .filter(w => (w.name.toLowerCase().includes(query) || (w.specialty || '').toLowerCase().includes(query)) && (filter === 'all' || w.status === filter))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(w => `<tr>
        <td><div class="worker-cell"><span class="worker-avatar">${initials(w.name)}</span><div><span class="worker-name">${escapeHtml(w.name)}</span>${w.monthWorker ? ` <span class="pill star">✦</span>` : ''}<span class="worker-role">${escapeHtml(w.specialty || '—')}</span></div></div></td>
        <td>${escapeHtml(roles[w.role]?.label[state.settings.language] || w.role)}</td>
        <td><b>${Number(w.coefficient).toFixed(1)}</b></td>
        <td><span class="pill ${w.status === 'inactive' ? 'inactive' : 'active'}">${w.status === 'inactive' ? t('inactive') : t('active')}</span></td>
        <td>${money(w.bonus || 0)}</td>
        <td class="${w.debt ? 'negative' : ''}">${money(w.debt || 0)}</td>
        <td>
          <div class="table-actions">
            <button class="icon-button" title="${t('roleUp')}" data-action="promote" data-id="${w.id}">↑</button>
            <button class="icon-button" title="${t('roleDown')}" data-action="demote" data-id="${w.id}">↓</button>
            <button class="icon-button" title="${t('edit')}" data-action="edit-worker" data-id="${w.id}">✎</button>
            <button class="icon-button" title="${t('advanceHistory')}" data-action="advance-history" data-id="${w.id}">▤</button>
            <button class="icon-button" title="${t('advance')}" data-action="advance" data-id="${w.id}">◷</button>
            <button class="icon-button" title="${t('delete')}" data-action="delete-worker" data-id="${w.id}">×</button>
          </div>
        </td>
      </tr>`).join('');
  }
  
  function renderWorkers() {
    return pageHead(t('manageTeam'), `${state.workers.length} ${t('team')}`, `<button class="btn btn-primary" data-action="add-worker">＋ ${t('addWorker')}</button>`) +
      `<div class="panel">
        <div class="toolbar">
          <div class="search"><input id="workerSearch" placeholder="${t('search')}" value=""></div>
          <select class="btn btn-secondary" id="statusFilter">
            <option value="all">${t('allStatuses')}</option>
            <option value="active">${t('active')}</option>
            <option value="inactive">${t('inactive')}</option>
          </select>
        </div>
        ${state.workers.length ? `<div class="table-wrap"><table class="data-table"><thead><tr><th>${t('name')}</th><th>${t('role')}</th><th>${t('coefficient')}</th><th>${t('status')}</th><th>${t('bonus')}</th><th>${t('debt')}</th><th>${t('actions')}</th></tr></thead><tbody id="workerRows">${workerRows()}</tbody></table></div>` : `<div class="empty-state"><strong>${t('emptyWorkers')}</strong><span>${t('emptyWorkersText')}</span><br><button class="btn btn-primary" data-action="add-worker" style="margin-top:15px">${t('addFirst')}</button></div>`}
      </div>`;
  }
  
  function renderDistribution() {
    const active = state.workers.filter(w => w.status !== 'inactive');
    return pageHead(t('distributionTitle'), t('distributionText')) +
      `<div class="distribution-layout">
        <div class="panel sticky-panel">
          <div class="field">
            <label>${t('earnings')}</label>
            <div class="currency-input">
              <input id="earningsInput" type="number" min="1" placeholder="300000">
              <select id="distributionCurrency"><option>KZT</option><option>USD</option><option>EUR</option><option>RUB</option></select>
            </div>
          </div>
          <div class="field" style="margin-top:18px">
            <label>${t('participants')}</label>
            <div class="worker-checks">
              ${active.length ? active.map(w => `<label class="worker-check"><input type="checkbox" value="${w.id}" checked><span>${escapeHtml(w.name)}</span><span class="check-meta">×${Number(w.coefficient).toFixed(1)}</span></label>`).join('') : `<div class="empty-state">${t('emptyWorkers')}</div>`}
            </div>
          </div>
          <button class="btn btn-primary" data-action="calculate" style="width:100%;margin-top:20px">↗ ${t('divide')}</button>
        </div>
        <div class="panel" id="resultPanel">${renderResult()}</div>
      </div>`;
  }
  
  function renderResult() {
    if (!state.lastResult) return `<div class="empty-state"><strong>${t('distributionTitle')}</strong><span>${t('noCalculation')}</span></div>`;
    const r = state.lastResult;
    return `<div class="panel-header"><div><h2 class="panel-title">${t('distributionTitle')}</h2><span class="panel-kicker">${new Date(r.date).toLocaleString()}</span></div><span class="pill active">${r.currency}</span></div>
      <div class="result-summary">
        <div class="result-box"><span>${t('earnings')}</span><strong>${money(r.total, r.currency)}</strong></div>
        <div class="result-box"><span>${t('totalCoefficients')}</span><strong>${r.coefficientTotal.toFixed(1)}</strong></div>
        <div class="result-box"><span>${t('payout')}</span><strong class="positive">${money(r.totalPayout, r.currency)}</strong></div>
      </div>
      <div class="table-wrap">
        <table class="result-table">
          <thead><tr><th>${t('name')}</th><th>${t('baseShare')}</th><th>${t('coefficient')}</th><th>${t('bonus')}</th><th>${t('advance')}</th><th>${t('payout')}</th></tr></thead>
          <tbody>${r.rows.map(row => `<tr><td><b>${escapeHtml(row.name)}</b></td><td>${money(row.base, r.currency)}</td><td>×${row.coefficient.toFixed(1)}</td><td class="positive">+${money(row.bonus, r.currency)}</td><td class="negative">−${money(row.advance, r.currency)}</td><td class="positive">${money(row.payout, r.currency)}</td></tr>`).join('')}</tbody>
        </table>
      </div>`;
  }
  
  function renderHistory() {
    return pageHead(t('historyTitle'), `${state.history.length} ${t('history').toLowerCase()}`) +
      `<div class="panel">${state.history.length ? `<div class="history-list">${state.history.map((h, i) => `<div class="history-item"><div class="history-main"><b>${money(h.total, h.currency)}</b><span>${new Date(h.date).toLocaleString()} · ${h.rows.length} ${t('team')}</span></div><div><span class="pill active">${t('payout')}: ${money(h.totalPayout, h.currency)}</span><button class="btn btn-secondary" data-action="history-detail" data-index="${i}" style="margin-left:8px">${t('details')}</button></div></div>`).join('')}</div>` : `<div class="empty-state"><strong>${t('noHistory')}</strong></div>`}</div>`;
  }
  
  function renderAnalytics() {
    const paid = totalPayouts(), max = Math.max(...state.workers.map(w => state.history.reduce((s, h) => s + (h.rows.find(r => r.id === w.id)?.payout || 0), 0)), 1);
    return pageHead(t('analyticsTitle'), t('overview')) +
      `<div class="stats-grid">
        <div class="stat-card"><span class="stat-label">${t('totalEarnings')}</span><div class="stat-value">${money(state.history.reduce((s, h) => s + Number(h.total), 0))}</div></div>
        <div class="stat-card"><span class="stat-label">${t('payments')}</span><div class="stat-value">${money(paid)}</div></div>
        <div class="stat-card"><span class="stat-label">${t('bonuses')}</span><div class="stat-value">${money(totalBonuses())}</div></div>
        <div class="stat-card"><span class="stat-label">${t('debts')}</span><div class="stat-value">${money(totalAdvances())}</div></div>
      </div>
      <div class="analytics-grid">
        <div class="panel">
          <div class="panel-header"><h2 class="panel-title">${t('paymentsByWorker')}</h2></div>
          <div class="bars">${state.workers.length ? state.workers.map(w => {
            const val = state.history.reduce((s, h) => s + (h.rows.find(r => r.id === w.id)?.payout || 0), 0);
            return `<div class="bar-col"><span class="bar-value">${val ? Math.round(val / 1000) + 'k' : '0'}</span><i class="bar" style="height:${Math.max(3, val / max * 75)}%"></i><span class="bar-label">${escapeHtml(w.name.split(' ')[0])}</span></div>`;
          }).join('') : `<div class="empty-state">${t('noActivity')}</div>`}</div>
        </div>
        <div class="panel">
          <div class="panel-header"><h2 class="panel-title">${t('debt')}</h2></div>
          <div class="metric-list">${state.workers.length ? state.workers.map(w => `<div><div class="metric-row"><span>${escapeHtml(w.name)}</span><b>${money(w.debt || 0)}</b></div><div class="progress"><i style="width:${Math.min(100, ((w.debt || 0) / Math.max(totalAdvances(), 1)) * 100)}%"></i></div></div>`).join('') : `<div class="empty-state">${t('noActivity')}</div>`}</div>
        </div>
      </div>`;
  }
  
  function renderSettings() {
    return pageHead(t('settingsTitle'), t('localData')) +
      `<div class="settings-grid">
        <div class="panel">
          <div class="panel-header"><h2 class="panel-title">${t('settingsTitle')}</h2></div>
          <div class="form-grid">
            <div class="field"><label>${t('language')}</label><select id="settingsLanguage"><option value="ru">Русский</option><option value="kk">Қазақша</option><option value="en">English</option></select></div>
            <div class="field"><label>${t('currency')}</label><select id="settingsCurrency"><option>KZT</option><option>USD</option><option>EUR</option><option>RUB</option></select></div>
            <div class="field full"><label>${t('theme')}</label><select id="settingsTheme"><option value="green">${t('greenTheme')}</option><option value="yellow">${t('yellowTheme')}</option></select></div>
          </div>
          <button class="btn btn-primary" data-action="save-settings" style="margin-top:20px">${t('save')}</button>
        </div>
        <div class="panel danger-zone">
          <div class="panel-header"><h2 class="panel-title">${t('dataManagement')}</h2></div>
          <p class="subtle">${t('clearDataText')}</p>
          <button class="btn btn-danger" data-action="clear-data">${t('clearData')}</button>
        </div>
      </div>`;
  }
  
  function openModal(content) {
    const back = document.getElementById('modalBackdrop');
    document.getElementById('modal').innerHTML = content;
    back.hidden = false;
    document.querySelectorAll('#modal [data-action="close-modal"]').forEach(button => button.onclick = closeModal);
    back.onclick = e => { if (e.target === back) closeModal(); };
  }
  
  function closeModal() { document.getElementById('modalBackdrop').hidden = true; }
  
  function workerForm(worker = {}) {
    const isEdit = Boolean(worker.id);
    return `<div class="modal-header">
      <div><p class="eyebrow">BurmalBank</p><h2>${isEdit ? t('editTitle') : t('workerTitle')}</h2></div>
      <button class="icon-button" data-action="close-modal">×</button>
    </div>
    <form id="workerForm">
      <div class="form-grid">
        <div class="field full"><label>${t('fullName')} *</label><input name="name" required value="${escapeHtml(worker.name || '')}" placeholder="Alex Kim"></div>
        <div class="field"><label>${t('role')}</label><select name="role">${Object.entries(roles).map(([key, value]) => `<option value="${key}" ${worker.role === key ? 'selected' : ''}>${value.label[state.settings.language]} · ×${value.coefficient}</option>`).join('')}</select></div>
        <div class="field"><label>${t('coefficient')} *</label><input name="coefficient" type="number" min="0.1" step="0.1" value="${worker.coefficient || 1}"></div>
        <div class="field full"><label>${t('specialty')}</label><input name="specialty" value="${escapeHtml(worker.specialty || '')}" placeholder="${t('specialtyPlaceholder')}"></div>
        <div class="field"><label>${t('fixedBonus')}</label><input name="bonus" type="number" min="0" value="${worker.bonus || 0}"></div>
        <div class="field"><label>${t('percentBonus')}</label><input name="monthPercent" type="number" min="0" max="100" value="${worker.monthPercent || 0}"></div>
        <div class="field"><label>${t('specialBonus')}</label><input name="specialCoefficient" type="number" min="0.1" step="0.1" value="${worker.specialCoefficient || ''}" placeholder="1.8"></div>
        <div class="field"><label class="check-row"><input type="checkbox" name="benefit" ${worker.benefit ? 'checked' : ''}> ${t('benefit')}</label></div>
        <div class="field full"><label class="check-row"><input type="checkbox" name="monthWorker" ${worker.monthWorker ? 'checked' : ''}> ${t('monthWorker')}</label></div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn-secondary" data-action="close-modal">${t('cancel')}</button>
        <button class="btn btn-primary">${t('save')}</button>
      </div>
    </form>`;
  }
  
  function openWorker(workerId) {
    const existing = state.workers.find(w => w.id === workerId);
    openModal(workerForm(existing || {}));
    
    document.getElementById('workerForm').onsubmit = e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
      const coefficient = Number(data.coefficient);
      const name = data.name.trim();
  
      if (!name) { toast(t('required')); return; }
      if (!Number.isFinite(coefficient) || coefficient <= 0) { toast(t('invalidCoefficient')); return; }
  
      if (data.monthWorker) {
        state.workers.forEach(w => w.monthWorker = false);
      }
  
      const targetId = existing ? existing.id : generateUniqueId();
      const updatedWorker = {
        id: targetId,
        name,
        specialty: data.specialty.trim(),
        role: data.role,
        coefficient,
        bonus: Math.max(0, Number(data.bonus) || 0),
        monthPercent: Math.max(0, Number(data.monthPercent) || 0),
        specialCoefficient: Math.max(0, Number(data.specialCoefficient) || 0),
        benefit: Boolean(data.benefit),
        monthWorker: Boolean(data.monthWorker),
        status: existing?.status || 'active',
        debt: existing?.debt || 0,
        advances: existing?.advances || [],
        payments: existing?.payments || []
      };
  
      if (existing) {
        Object.assign(existing, updatedWorker);
      } else {
        state.workers.push(updatedWorker);
      }
  
      saveWorkers();
      closeModal();
      toast(t('workerSaved'));
      renderView();
    };
  }
  
  function openAdvance(workerId) {
    const options = state.workers.filter(w => w.status !== 'inactive').map(w => `<option value="${w.id}" ${w.id === workerId ? 'selected' : ''}>${escapeHtml(w.name)}</option>`).join('');
    openModal(`<div class="modal-header"><div><p class="eyebrow">BurmalBank</p><h2>${t('giveAdvance')}</h2></div><button class="icon-button" data-action="close-modal">×</button></div>
    <form id="advanceForm">
      <div class="field"><label>${t('name')}</label><select name="workerId">${options}</select></div>
      <div class="field" style="margin-top:15px"><label>${t('amount')} *</label><div class="currency-input"><input name="amount" type="number" min="1" required placeholder="20000"><select name="currency"><option>KZT</option><option>USD</option><option>EUR</option><option>RUB</option></select></div></div>
      <p class="notice" style="margin-top:15px">${t('advanceHistory')}</p>
      <div class="modal-actions"><button type="button" class="btn btn-secondary" data-action="close-modal">${t('cancel')}</button><button class="btn btn-primary">${t('save')}</button></div>
    </form>`);
    
    document.getElementById('advanceForm').onsubmit = e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
      const amount = Number(data.amount);
      const worker = state.workers.find(w => w.id === data.workerId);
      if (!worker || !Number.isFinite(amount) || amount <= 0) { toast(t('invalidAmount')); return; }
      
      worker.debt = (Number(worker.debt) || 0) + amount;
      worker.advances = worker.advances || [];
      worker.advances.unshift({ date: new Date().toISOString(), amount, currency: data.currency });
      saveWorkers();
      closeModal();
      toast(t('advanceIssued'));
      renderView();
    };
  }
  
  function openMonth() {
    const options = state.workers.filter(w => w.status !== 'inactive').map(w => `<option value="${w.id}" ${w.monthWorker ? 'selected' : ''}>${escapeHtml(w.name)}</option>`).join('');
    openModal(`<div class="modal-header"><div><p class="eyebrow">BurmalBank</p><h2>${t('workerOfMonth')}</h2></div><button class="icon-button" data-action="close-modal">×</button></div>
    <form id="monthForm">
      <div class="field"><label>${t('chooseWorker')}</label><select name="id"><option value="">${t('noWorker')}</option>${options}</select></div>
      <div class="form-grid" style="margin-top:15px">
        <div class="field"><label>${t('fixedBonus')}</label><input name="bonus" type="number" min="0" value="${currentMonthWorker()?.bonus || 0}"></div>
        <div class="field"><label>${t('percentBonus')}</label><input name="percent" type="number" min="0" max="100" value="${currentMonthWorker()?.monthPercent || 0}"></div>
      </div>
      <div class="modal-actions"><button type="button" class="btn btn-secondary" data-action="close-modal">${t('cancel')}</button><button class="btn btn-primary">${t('save')}</button></div>
    </form>`);
  
    document.getElementById('monthForm').onsubmit = e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
      state.workers.forEach(w => {
        w.monthWorker = w.id === data.id;
        if (w.monthWorker) {
          w.bonus = Math.max(0, Number(data.bonus) || 0);
          w.monthPercent = Math.max(0, Number(data.percent) || 0);
        }
      });
      saveWorkers();
      closeModal();
      toast(t('settingsSaved'));
      renderView();
    };
  }
  
  function calculate() {
    const amount = Number(document.getElementById('earningsInput').value);
    const currency = document.getElementById('distributionCurrency').value;
    const ids = [...document.querySelectorAll('.worker-check input:checked')].map(x => x.value);
  
    if (!Number.isFinite(amount) || amount <= 0) { toast(t('invalidAmount')); return; }
    if (!ids.length) { toast(t('noParticipants')); return; }
  
    const selected = state.workers.filter(w => ids.includes(w.id));
    const coefficientTotal = selected.reduce((s, w) => s + (w.monthWorker && w.specialCoefficient ? w.specialCoefficient : Number(w.coefficient)), 0);
  
    const rows = selected.map(w => {
      const effectiveCoefficient = w.monthWorker && w.specialCoefficient ? w.specialCoefficient : Number(w.coefficient);
      const base = amount * (effectiveCoefficient / coefficientTotal);
      const bonus = (w.bonus || 0) + base * (w.monthWorker ? (w.monthPercent || 0) / 100 : 0);
      const advance = w.benefit ? 0 : Math.min(Number(w.debt) || 0, base + bonus);
      const payout = Math.max(0, base + bonus - advance);
      return { id: w.id, name: w.name, base, coefficient: effectiveCoefficient, bonus, advance, payout };
    });
  
    state.lastResult = { date: new Date().toISOString(), total: amount, currency, coefficientTotal, rows, totalPayout: rows.reduce((s, r) => s + r.payout, 0) };
    state.history.unshift({ ...state.lastResult, rows: rows.map(r => ({ ...r })) });
    state.history = state.history.slice(0, 100);
  
    rows.forEach(row => {
      const worker = state.workers.find(w => w.id === row.id);
      if (worker) {
        worker.debt = Math.max(0, (worker.debt || 0) - row.advance);
        worker.payments = worker.payments || [];
        worker.payments.unshift({ date: state.lastResult.date, amount: row.payout, currency });
      }
    });
  
    saveData();
    toast(t('calculationDone'));
    document.getElementById('resultPanel').innerHTML = renderResult();
  }
  
  function toast(message) {
    const el = document.getElementById('toast');
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }
  
  function adjustRole(workerId, direction) {
    const worker = state.workers.find(w => w.id === workerId);
    const levels = Object.keys(roles);
    const position = levels.indexOf(worker?.role);
    if (!worker || position < 0) return;
  
    const next = Math.max(0, Math.min(levels.length - 1, position + direction));
    worker.role = levels[next];
    worker.coefficient = roles[worker.role].coefficient;
    saveWorkers();
    renderView();
  }
  
  function advanceHistory(workerId) {
    const worker = state.workers.find(w => w.id === workerId);
    openModal(`<div class="modal-header"><div><p class="eyebrow">${escapeHtml(worker?.name || '')}</p><h2>${t('advanceHistory')}</h2></div><button class="icon-button" data-action="close-modal">×</button></div>
    ${worker?.advances?.length ? `<table class="result-table"><thead><tr><th>${t('date')}</th><th>${t('amount')}</th></tr></thead><tbody>${worker.advances.map(item => `<tr><td>${new Date(item.date).toLocaleString()}</td><td class="negative">−${money(item.amount, item.currency)}</td></tr>`).join('')}</tbody></table>` : `<div class="empty-state">${t('noAdvances')}</div>`}`);
  }
  
  function historyDetail(index) {
    const h = state.history[index];
    openModal(`<div class="modal-header"><div><p class="eyebrow">${new Date(h.date).toLocaleString()}</p><h2>${money(h.total, h.currency)}</h2></div><button class="icon-button" data-action="close-modal">×</button></div>
    <div class="result-summary">
      <div class="result-box"><span>${t('totalCoefficients')}</span><strong>${h.coefficientTotal.toFixed(1)}</strong></div>
      <div class="result-box"><span>${t('payout')}</span><strong>${money(h.totalPayout, h.currency)}</strong></div>
    </div>
    <table class="result-table"><thead><tr><th>${t('name')}</th><th>${t('baseShare')}</th><th>${t('bonus')}</th><th>${t('advance')}</th><th>${t('payout')}</th></tr></thead><tbody>${h.rows.map(r => `<tr><td>${escapeHtml(r.name)}</td><td>${money(r.base, h.currency)}</td><td>+${money(r.bonus, h.currency)}</td><td>−${money(r.advance, h.currency)}</td><td>${money(r.payout, h.currency)}</td></tr>`).join('')}</tbody></table>`);
  }
  
  function bindView() {
    document.querySelectorAll('[data-action]').forEach(button => button.onclick = () => {
      const action = button.dataset.action;
      const id = button.dataset.id;
  
      if (action === 'add-worker') openWorker(null);
      if (action === 'edit-worker') openWorker(id);
      if (action === 'advance') openAdvance(id);
      if (action === 'advance-history') advanceHistory(id);
      if (action === 'promote') adjustRole(id, 1);
      if (action === 'demote') adjustRole(id, -1);
      if (action === 'distribution') navigate('distribution');
      if (action === 'choose-month') openMonth();
      if (action === 'close-modal') closeModal();
  
      if (action === 'delete-worker' && confirm(t('confirmDelete'))) {
        state.workers = state.workers.filter(w => w.id !== id);
        saveWorkers();
        renderView();
        toast(t('workerDeleted'));
      }
  
      if (action === 'calculate') calculate();
      if (action === 'history-detail') historyDetail(Number(button.dataset.index));
  
      if (action === 'save-settings') {
        state.settings.language = document.getElementById('settingsLanguage').value;
        state.settings.currency = document.getElementById('settingsCurrency').value;
        state.settings.theme = document.getElementById('settingsTheme').value;
        saveSettings();
        layout();
        toast(t('settingsSaved'));
      }
  
      if (action === 'clear-data' && confirm(t('clearConfirm'))) {
        localStorage.clear();
        state = { workers: [], history: [], settings: { ...defaults }, currentView: 'dashboard', lastResult: null };
        layout();
        toast(t('clearData'));
      }
    });
  
    const search = document.getElementById('workerSearch');
    if (search) search.oninput = () => {
      const rowsEl = document.getElementById('workerRows');
      if (rowsEl) rowsEl.innerHTML = workerRows();
    };
  
    const filter = document.getElementById('statusFilter');
    if (filter) filter.onchange = () => {
      const rowsEl = document.getElementById('workerRows');
      if (rowsEl) rowsEl.innerHTML = workerRows();
    };
  
    const c = document.getElementById('distributionCurrency');
    if (c) c.value = state.settings.currency;
  
    const sl = document.getElementById('settingsLanguage');
    if (sl) sl.value = state.settings.language;
  
    const sc = document.getElementById('settingsCurrency');
    if (sc) sc.value = state.settings.currency;
  
    const st = document.getElementById('settingsTheme');
    if (st) st.value = state.settings.theme;
  }
  
  function navigate(view) {
    state.currentView = view;
    document.querySelectorAll('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.view === view));
    document.getElementById('sidebar').classList.remove('open');
    layout();
  }
  
  function init() {
    loadData();
    document.querySelectorAll('.nav-item').forEach(el => el.onclick = () => navigate(el.dataset.view));
    document.getElementById('headerLanguage').onchange = e => {
      state.settings.language = e.target.value;
      saveSettings();
      layout();
    };
    document.getElementById('menuButton').onclick = () => document.getElementById('sidebar').classList.toggle('open');
    layout();
  }
  
  init();