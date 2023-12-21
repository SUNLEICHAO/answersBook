let PAGE = {
  data: {
    sentences: [],
    isShow: false,
    isFinish: false,
  },
  init: function () {
    this.getData();
    this.bind();
  },
  getData: function () {
    // 将obj的value取出来放数组里面
    this.data.sentences = Object.keys(res.sentences).map(item => {
      return res.sentences[item]
    })
  },
  bind: function () {
    // 暂时被弃用
    // let showCentent = document.getElementById('show-result_centent')
    // showCentent.addEventListener('click', this.showSentence)

    // “返回按钮”
    let showAgain = document.getElementById('show-again')
    showAgain.addEventListener('click', this.againSentence)

    // 结束首页的动画
    let desc = document.getElementById('show-intro__desc');
    desc.addEventListener('click', this.fadeFinish)

    // 点击“找到..答案”的行为
    let btnOpen = document.getElementById('show-intro__open')
    btnOpen.addEventListener('click', this.moduleFade)
    btnOpen.addEventListener('click', this.showSentence)
  },
  render: function () {
    // 生成一个随机数，（长度之内的）
    let sentences = this.data.sentences;
    let ind = Math.floor(Math.random() * sentences.length)
    let showContent = document.getElementById('show-text')
    showContent.innerHTML = sentences[ind]
  },
  toggleActive: function () {
    let showCover = document.getElementById('show-cover')
    let showText = document.getElementById('show-text')
    // #1 调用classList
    // showCover.classList.toggle('active')
    // showText.classList.toggle('active')

    // #2 调用className
    if (showCover.className.indexOf('active') !== -1) {
      showCover.className = 'show-cover'
    } else {
      showCover.className += ' active'
    }
    if (showText.className.indexOf('active') !== -1) {
      showText.className = 'show-text'
    } else {
      showText.className += ' active'
    }
  },
  showSentence: function () {
    if (PAGE.data.isShow) {
      return
    }
    PAGE.render()
    PAGE.data.isShow = true
    let showResult = document.getElementsByClassName('show-result')[0]
    setTimeout(() => { showResult.style.display = 'block' }, 2000)
  },
  againSentence: function () {
    PAGE.data.isShow = false
    location.reload()
  },
  fadeFinish: function () {
    let items = document.getElementsByClassName('show-intro__desc-item')
    for (let i = 0; i < items.length; i++) {
      if (!PAGE.isFinish) { items[i].className += ' finish' }
    }
    let title = document.getElementsByClassName('show-intro__desc-title')[0]
    if (!PAGE.isFinish) { title.className += ' finish' }
    PAGE.isFinish = true
    let btnOpen = document.getElementById('show-intro__open')
    btnOpen.className += ' finish'
  },
  moduleFade: function () {
    let module01 = document.getElementById('module01')
    module01.className += ' disappear'
    let showText = document.getElementById('show-text')
    if (showText.className.indexOf('active') !== -1) {
      showText.className = 'show-text'
    } else {
      showText.className += ' active'
    }
  }

}
PAGE.init()


