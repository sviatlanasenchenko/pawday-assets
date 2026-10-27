/* Review gallery only. No matching, account, or service-worker code runs here. */
(() => {
  'use strict';
  const copy = {
    en: {
      pageTitle: 'Pawday — Image preview', skip: 'Skip to images', language: 'Language', badge: 'Image preview',
      title: 'Meet them, big and small.', intro: 'Explore all 142 adult-and-puppy illustrations. Select a card to see the complete image.',
      quiz: 'Open the quiz ↗', collection: 'Image collection', searchLabel: 'Find a dog', searchPlaceholder: 'Search name or ID',
      loading: 'Loading images…', empty: 'No profiles match your search. Try a different name or ID.',
      failed: 'The image collection could not be loaded. Reload this page to try again.', close: 'Close image',
      imageError: 'This image could not be loaded.', count: (shown, total) => `Showing ${shown} of ${total} images`,
      alt: name => `${name}: adult dog and puppy — AI-generated illustration`,
      caption: 'AI-generated illustration of an adult dog and a puppy. Individual dogs may look different.',
      disclosure: 'AI-generated illustrations of adult dogs and puppies. Appearance varies between individual dogs, especially mixed and designer types; a puppy’s adult appearance cannot be guaranteed.'
    },
    ru: {
      pageTitle: 'Pawday — Предпросмотр изображений', skip: 'К изображениям', language: 'Язык', badge: 'Предпросмотр изображений',
      title: 'Знакомься: взрослые и малыши.', intro: 'Все 142 иллюстрации со взрослой собакой и щенком. Нажми на карточку, чтобы рассмотреть изображение целиком.',
      quiz: 'Открыть анкету ↗', collection: 'Коллекция изображений', searchLabel: 'Найти собаку', searchPlaceholder: 'Поиск по названию или ID',
      loading: 'Загружаем изображения…', empty: 'По этому запросу ничего не найдено. Попробуй другое название или ID.',
      failed: 'Не удалось загрузить коллекцию изображений. Обнови страницу, чтобы повторить попытку.', close: 'Закрыть изображение',
      imageError: 'Не удалось загрузить изображение.', count: (shown, total) => `Показано ${shown} из ${total} изображений`,
      alt: name => `${name}: взрослая собака и щенок — иллюстрация, созданная ИИ`,
      caption: 'Иллюстрация взрослой собаки и щенка, созданная ИИ. Внешность конкретных собак может отличаться.',
      disclosure: 'Иллюстрации взрослых собак и щенков созданы ИИ. Внешность отдельных собак различается, особенно у метисов и дизайнерских типов; нельзя гарантировать, как щенок будет выглядеть во взрослом возрасте.'
    },
    zh: {
      pageTitle: 'Pawday — 图片预览', skip: '跳至图片', language: '语言', badge: '图片预览',
      title: '认识它们：成年犬与幼犬。', intro: '浏览全部142张成年犬与幼犬插图。点击卡片，查看完整大图。',
      quiz: '打开问卷 ↗', collection: '图片集', searchLabel: '查找狗狗', searchPlaceholder: '按名称或 ID 搜索',
      loading: '正在加载图片…', empty: '没有找到匹配的档案。请尝试其他名称或 ID。',
      failed: '无法加载图片集。请刷新页面重试。', close: '关闭图片',
      imageError: '无法加载此图片。', count: (shown, total) => `显示 ${shown} / ${total} 张图片`,
      alt: name => `${name}：成年犬和幼犬（AI 生成插图）`,
      caption: 'AI 生成的成年犬和幼犬插图。个体狗狗的外观可能不同。',
      disclosure: '成年犬和幼犬图片由 AI 生成。狗狗的外观存在个体差异，混种犬和设计犬类型尤其如此；无法保证幼犬成年后的具体外观。'
    }
  };
  const select = document.getElementById('preview-language');
  const search = document.getElementById('preview-search');
  const grid = document.getElementById('image-grid');
  const message = document.getElementById('preview-message');
  const count = document.getElementById('results-count');
  const dialog = document.getElementById('image-dialog');
  const dialogImage = document.getElementById('dialog-image');
  const params = new URLSearchParams(window.location.search);
  let language = Object.hasOwn(copy, params.get('lang')) ? params.get('lang') : 'en';
  let items = [], loading = true, loadFailed = false, selectedId = null;
  const profiles = new Map((window.pawdayV6Full || []).map(profile => [profile.id, profile]));
  const normalize = value => String(value || '').normalize('NFKC').toLocaleLowerCase().replace(/ё/g, 'е').trim();
  const nameOf = item => profiles.get(item.id)?.names?.[language] || item.name_en || item.id;

  function setMessage(text) {
    message.textContent = text;
    message.hidden = !text;
  }

  function refreshDialog() {
    const item = items.find(candidate => candidate.id === selectedId);
    if (!item) return;
    document.getElementById('dialog-title').textContent = nameOf(item);
    document.getElementById('dialog-id').textContent = item.id;
    document.getElementById('dialog-caption').textContent = copy[language].caption;
    dialogImage.src = item.src;
    dialogImage.alt = copy[language].alt(nameOf(item));
  }

  function openImage(item) {
    selectedId = item.id;
    refreshDialog();
    dialog.showModal();
  }

  function renderCards() {
    const words = copy[language];
    grid.replaceChildren();
    if (loading || loadFailed) {
      count.textContent = loading ? words.loading : '';
      setMessage(loading ? words.loading : words.failed);
      return;
    }
    const query = normalize(search.value);
    const visible = items.filter(item => {
      const names = profiles.get(item.id)?.names || {};
      return normalize([item.id, item.name_en, item.name_ru, names.en, names.ru, names.zh].join(' ')).includes(query);
    });
    const fragment = document.createDocumentFragment();
    for (const item of visible) {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'image-card';
      card.dataset.id = item.id;
      card.setAttribute('aria-haspopup', 'dialog');
      const image = document.createElement('img');
      image.src = item.src;
      image.alt = words.alt(nameOf(item));
      image.width = 1024;
      image.height = 1024;
      image.loading = 'lazy';
      image.decoding = 'async';
      image.addEventListener('error', () => card.classList.add('has-image-error'), {once: true});
      const name = document.createElement('strong');
      name.textContent = nameOf(item);
      const id = document.createElement('small');
      id.textContent = item.id;
      const error = document.createElement('small');
      error.className = 'image-error';
      error.textContent = words.imageError;
      card.append(image, name, id, error);
      card.addEventListener('click', () => openImage(item));
      fragment.append(card);
    }
    grid.append(fragment);
    count.textContent = words.count(visible.length, items.length);
    setMessage(visible.length ? '' : words.empty);
  }

  function renderLanguage() {
    const words = copy[language];
    document.documentElement.lang = language === 'zh' ? 'zh-Hans' : language;
    document.title = words.pageTitle;
    select.value = language;
    select.setAttribute('aria-label', words.language);
    for (const node of document.querySelectorAll('[data-copy]')) node.textContent = words[node.dataset.copy];
    search.placeholder = words.searchPlaceholder;
    document.getElementById('preview-collection').setAttribute('aria-label', words.collection);
    document.querySelector('.quiz-link').href = `${language}/`;
    document.getElementById('dialog-close').setAttribute('aria-label', words.close);
    renderCards();
    if (dialog.open) refreshDialog();
  }

  select.addEventListener('change', () => {
    language = select.value;
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    window.history.replaceState(null, '', url);
    renderLanguage();
  });
  search.addEventListener('input', renderCards);
  document.getElementById('dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { selectedId = null; });
  renderLanguage();

  fetch('photos/adult-puppy/manifest.json', {cache: 'no-store'})
    .then(response => {
      if (!response.ok) throw new Error(`Manifest HTTP ${response.status}`);
      return response.json();
    })
    .then(manifest => {
      if (!Array.isArray(manifest.images) || manifest.images.length !== 142 || profiles.size !== 142) throw new Error('Expected 142 image and profile IDs');
      const ids = new Set();
      for (const item of manifest.images) {
        if (!profiles.has(item.id) || ids.has(item.id) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id) || item.src !== `photos/adult-puppy/${item.id}-adult-puppy.webp`) throw new Error('Image manifest ID or path mismatch');
        ids.add(item.id);
      }
      items = manifest.images;
      loading = false;
      renderCards();
    })
    .catch(error => {
      console.error('Pawday image preview:', error);
      loading = false;
      loadFailed = true;
      renderCards();
    });
})();
