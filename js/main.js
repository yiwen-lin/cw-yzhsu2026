/* ================================================================
   有庠創新論壇 — main.js
   ================================================================ */

/* ── Header 捲動後顯示白底 ─────────────────────────────────── */
(function () {
  var header = document.querySelector('.site-header');
  var hero = document.getElementById('hero-section');
  if (!header) return;

  function getScrollThreshold() {
    if (!hero) return 0;
    return hero.offsetHeight / 3;
  }

  function updateHeaderScroll() {
    header.classList.toggle('site-header--scrolled', window.scrollY > getScrollThreshold());
  }

  updateHeaderScroll();
  window.addEventListener('scroll', updateHeaderScroll, { passive: true });
  window.addEventListener('resize', updateHeaderScroll, { passive: true });
})();

/* ── 手機版 container-bg2：自 report-section 後半段起 ─────── */
(function () {
  var MOBILE_MQ = window.matchMedia('(max-width: 1023px)');
  var container = document.querySelector('.page-container');
  var bgWrap = document.querySelector('.page-container__bg-wrap');
  var report = document.getElementById('report-section');
  if (!container || !bgWrap || !report) return;

  function getStartRatio() {
    var value = getComputedStyle(document.documentElement)
      .getPropertyValue('--container-bg2-report-start-ratio')
      .trim();
    var ratio = parseFloat(value);
    return Number.isFinite(ratio) ? ratio : 0.5;
  }

  function clearMobileBgPosition() {
    bgWrap.style.removeProperty('top');
    bgWrap.style.removeProperty('height');
  }

  function getTopWithinContainer(el, ancestor) {
    var top = 0;
    var node = el;

    while (node && node !== ancestor) {
      top += node.offsetTop;
      node = node.offsetParent;
    }

    return top;
  }

  function updateMobileBgPosition() {
    if (!MOBILE_MQ.matches) {
      clearMobileBgPosition();
      return;
    }

    var reportInner = report.querySelector('.section-report__inner') || report;
    var innerTop = getTopWithinContainer(reportInner, container);
    var startTop = innerTop + reportInner.offsetHeight * getStartRatio();
    bgWrap.style.top = startTop + 'px';
    bgWrap.style.removeProperty('height');
  }

  updateMobileBgPosition();
  window.addEventListener('resize', updateMobileBgPosition);
  window.addEventListener('load', updateMobileBgPosition);

  if (typeof ResizeObserver !== 'undefined') {
    var observer = new ResizeObserver(updateMobileBgPosition);
    var reportInner = report.querySelector('.section-report__inner');
    observer.observe(container);
    observer.observe(report);
    if (reportInner) observer.observe(reportInner);
  }

  if (MOBILE_MQ.addEventListener) {
    MOBILE_MQ.addEventListener('change', updateMobileBgPosition);
  }
})();

/* ── 漢堡選單 ─────────────────────────────────────────────── */
(function () {
  const btn = document.getElementById('hamburger-btn');
  const nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;

  const yearsGroup = nav.querySelector('.mobile-nav__item--group');
  const yearsToggle = document.getElementById('mobile-nav-years-toggle');
  const yearsSublist = document.getElementById('mobile-nav-years');

  function closeYearsGroup() {
    if (!yearsGroup) return;
    yearsGroup.classList.remove('is-expanded');
    if (yearsToggle) yearsToggle.setAttribute('aria-expanded', 'false');
    if (yearsSublist) yearsSublist.setAttribute('aria-hidden', 'true');
  }

  function openMenu() {
    btn.classList.add('is-open');
    nav.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    nav.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    btn.classList.remove('is-open');
    nav.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    nav.setAttribute('aria-hidden', 'true');
    closeYearsGroup();
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    btn.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  if (yearsToggle && yearsGroup && yearsSublist) {
    yearsToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var expanded = yearsGroup.classList.toggle('is-expanded');
      yearsToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      yearsSublist.setAttribute('aria-hidden', expanded ? 'false' : 'true');
    });
  }

  nav.querySelectorAll('.mobile-nav__link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function (e) {
    if (!btn.contains(e.target) && !nav.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
})();

/* ── Scroll Animation（animate.css + Intersection Observer）── */
(function () {
  document.querySelectorAll('.section-title__text').forEach(function (el) {
    el.dataset.animate = 'fadeInDown';
  });

  var els = document.querySelectorAll('[data-animate]');
  if (!els.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var name = el.dataset.animate;
      el.classList.add('animate__animated', 'animate__' + name);
      observer.unobserve(el);
    });
  }, { threshold: 0.15 });

  els.forEach(function (el) { observer.observe(el); });
})();

/* ── Video Player（點擊後頁內嵌入 YouTube 並自動播放）────────── */
(function () {
  function playInline(player) {
    if (player.classList.contains('is-playing')) return;

    var videoId = player.dataset.videoId;
    if (!videoId) return;

    var origin = encodeURIComponent(window.location.origin);
    var iframe = document.createElement('iframe');
    iframe.className = 'video-player__iframe';
    iframe.src =
      'https://www.youtube.com/embed/' + videoId +
      '?autoplay=1&rel=0&playsinline=1&modestbranding=1&origin=' + origin;
    iframe.title = player.dataset.videoTitle || '影片播放';
    iframe.setAttribute(
      'allow',
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    );
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');

    var poster = player.querySelector('.video-player__poster');
    player.classList.add('is-playing');
    if (poster) poster.remove();
    player.appendChild(iframe);
  }

  function restoreVideoPoster(player) {
    if (!player || !player.classList.contains('is-playing')) return;

    var iframe = player.querySelector('.video-player__iframe');
    if (iframe) iframe.remove();
    player.classList.remove('is-playing');

    var thumbSrc = player.dataset.thumbSrc;
    if (!thumbSrc) return;

    var title = player.dataset.videoTitle || '影片';
    var isLg = player.classList.contains('video-player--lg');
    var poster = document.createElement('button');
    poster.type = 'button';
    poster.className = 'video-player__poster';
    poster.setAttribute('aria-label', '播放' + title);

    var img = document.createElement('img');
    img.src = thumbSrc;
    img.alt = '';
    img.className = 'video-player__thumb';
    img.setAttribute('aria-hidden', 'true');

    var playIcon = document.createElement('span');
    playIcon.className = isLg ? 'play-icon play-icon--lg' : 'play-icon';
    playIcon.setAttribute('aria-hidden', 'true');
    playIcon.innerHTML = '<span class="play-icon__triangle"></span>';

    poster.appendChild(img);
    poster.appendChild(playIcon);
    player.appendChild(poster);
  }

  window.restoreVideoPoster = restoreVideoPoster;

  document.addEventListener('click', function (e) {
    var poster = e.target.closest('.video-player__poster');
    if (!poster) return;
    var player = poster.closest('.video-player[data-video-id]');
    if (!player) return;
    playInline(player);
  });
})();

/* ── 輪播邏輯 ─────────────────────────────────────────────── */
(function () {
  var MOBILE_MQ = window.matchMedia('(max-width: 1023px)');

  var SLIDER_CONFIG = {
    speaker: {
      track: '.speaker-slider__slides',
      viewport: '.speaker-slider__viewport',
      slide: '.speaker-slider__slide',
      mode: 'single'
    },
    forum: {
      track: '.forum-slider__slides',
      viewport: '.forum-slider__viewport',
      slide: '.forum-slider__slide',
      mode: 'single'
    },
    report: {
      track: '.report-slider__slides',
      viewport: '.report-slider__viewport',
      slide: '.report-card',
      mode: 'multi',
      visible: 3,
      step: 3,
      dotMode: 'page',
      responsive: true,
      loop: true,
      dotsContainer: '.report-slider__dots'
    }
  };

  document.querySelectorAll('[data-slider]').forEach(function (root) {
    var cfg = SLIDER_CONFIG[root.dataset.slider];
    if (!cfg) return;

    var track = root.querySelector(cfg.track);
    var viewport = root.querySelector(cfg.viewport);
    var slides = root.querySelectorAll(cfg.slide);
    var prevBtn = root.querySelector('.slider-arrow--prev');
    var nextBtn = root.querySelector('.slider-arrow--next');
    var dots = root.querySelectorAll('.slider-dots__dot');
    var current = 0;
    var total = slides.length;
    var isMulti = cfg.mode === 'multi';
    var visible = cfg.visible || 1;
    var step = cfg.step || 1;
    var maxStart = isMulti ? Math.max(0, total - visible) : total - 1;
    var dotMode = cfg.dotMode || 'index';
    var dotsContainer = cfg.dotsContainer ? root.querySelector(cfg.dotsContainer) : null;

    function syncResponsive() {
      if (!cfg.responsive) return;

      if (MOBILE_MQ.matches) {
        visible = 1;
        step = 1;
        maxStart = Math.max(0, total - visible);
        dotMode = 'none';
      } else {
        visible = cfg.visible || 3;
        step = cfg.step || 3;
        maxStart = Math.max(0, total - visible);
        dotMode = cfg.dotMode || 'page';
      }

      current = Math.min(current, maxStart);

      if (dotsContainer) {
        dotsContainer.hidden = MOBILE_MQ.matches;
      }
    }

    syncResponsive();

    var startX = 0;
    var currentX = 0;
    var isDragging = false;
    var hasMoved = false;

    function getCardStep() {
      if (!slides.length) return 0;
      var gap = parseFloat(getComputedStyle(track).gap) || 0;
      return slides[0].offsetWidth + gap;
    }

    function applyTransform(index, offsetPx) {
      offsetPx = offsetPx || 0;

      if (isMulti) {
        var baseOffset = index * getCardStep();
        track.style.transform = 'translateX(calc(-' + baseOffset + 'px + ' + offsetPx + 'px))';
        return;
      }

      track.style.transform =
        'translateX(calc(-' + (index * 100) + '% + ' + offsetPx + 'px))';
    }

    function updateSlideVisibility() {
      if (!isMulti) {
        slides.forEach(function (slide, i) {
          slide.setAttribute('aria-hidden', i !== current ? 'true' : 'false');
        });
        return;
      }

      slides.forEach(function (slide, i) {
        var inView = i >= current && i < current + visible;
        slide.setAttribute('aria-hidden', inView ? 'false' : 'true');
      });
    }

    function updateDots() {
      if (dotMode === 'none') return;

      dots.forEach(function (dot, i) {
        var isActive = dotMode === 'page' ? current === i * step : i === current;
        dot.classList.toggle('slider-dots__dot--active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    }

    function resetSlideVideos(slide) {
      slide.querySelectorAll('.video-player.is-playing').forEach(function (player) {
        if (window.restoreVideoPoster) window.restoreVideoPoster(player);
      });
    }

    function normalizeMultiIndex(index) {
      if (!cfg.loop) {
        return Math.max(0, Math.min(index, maxStart));
      }

      if (visible === 1) {
        return ((index % total) + total) % total;
      }

      var numPages = Math.floor(maxStart / step) + 1;
      var pageIndex = Math.round(index / step);
      pageIndex = ((pageIndex % numPages) + numPages) % numPages;
      return pageIndex * step;
    }

    function goTo(index) {
      if (isMulti) {
        var next = normalizeMultiIndex(index);
        if (next === current) {
          track.classList.remove('is-dragging');
          track.style.transition = '';
          applyTransform(current, 0);
          return;
        }
        current = next;
      } else {
        resetSlideVideos(slides[current]);
        current = (index + total) % total;
      }

      track.classList.remove('is-dragging');
      track.style.transition = '';
      applyTransform(current, 0);
      updateSlideVisibility();
      updateDots();
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        goTo(isMulti ? current - step : current - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        goTo(isMulti ? current + step : current + 1);
      });
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        if (dotMode === 'none') return;
        if (dotMode === 'page') {
          goTo(i * step);
          return;
        }
        goTo(isMulti ? Math.min(i, maxStart) : i);
      });
    });

    function setupTouchDrag() {
      if (!viewport) return;

      function onDragStart(clientX) {
        if (!MOBILE_MQ.matches) return;
        isDragging = true;
        hasMoved = false;
        startX = clientX;
        currentX = clientX;
        track.classList.add('is-dragging');
        track.style.transition = 'none';
      }

      function onDragMove(clientX, e) {
        if (!isDragging) return;
        currentX = clientX;
        var delta = currentX - startX;

        if (Math.abs(delta) > 5) {
          hasMoved = true;
          if (e && e.cancelable) e.preventDefault();
        }

        applyTransform(current, delta);
      }

      function onDragEnd() {
        if (!isDragging) return;
        isDragging = false;

        var delta = currentX - startX;
        var threshold = viewport.offsetWidth * 0.15;

        if (hasMoved && delta > threshold) {
          goTo(current - 1);
        } else if (hasMoved && delta < -threshold) {
          goTo(current + 1);
        } else {
          goTo(current);
        }
      }

      viewport.addEventListener('touchstart', function (e) {
        onDragStart(e.touches[0].clientX);
      }, { passive: true });

      viewport.addEventListener('touchmove', function (e) {
        onDragMove(e.touches[0].clientX, e);
      }, { passive: false });

      viewport.addEventListener('touchend', onDragEnd);
      viewport.addEventListener('touchcancel', onDragEnd);

      viewport.addEventListener('click', function (e) {
        if (hasMoved) {
          e.preventDefault();
          e.stopPropagation();
          hasMoved = false;
        }
      }, true);
    }

    if (!isMulti) {
      if (!viewport) return;
      setupTouchDrag();
      return;
    }

    setupTouchDrag();
    updateSlideVisibility();
    updateDots();

    function onReportLayoutChange() {
      syncResponsive();
      applyTransform(current, 0);
      updateSlideVisibility();
      updateDots();
    }

    window.addEventListener('resize', onReportLayoutChange);

    if (cfg.responsive && MOBILE_MQ.addEventListener) {
      MOBILE_MQ.addEventListener('change', onReportLayoutChange);
    }
  });
})();
