let PAGE = {
  data: {
    sentences: [],
    isShow: false,
  },
  init: function () {
    this.getData();
    this.bind();
  },
  getData: function () {
    this.data.sentences = res.sentences
  },
  bind: function () {
    let showCentent = document.getElementById('show-centent')
    showCentent.addEventListener('click', this.showSentence)

    let showAgain = document.getElementById('show-again')
    showAgain.addEventListener('click', this.againSentence)

  },
  render: function () {
    // 生成一个随机数，（长度之内的）
    let sentences = this.data.sentences;
    let ind = Math.floor(Math.random() * sentences.length)
    let showContent = document.getElementById('show-text')
    showContent.innerHTML = sentences[ind].split(' ')[1]
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
    PAGE.toggleActive()
    PAGE.render()
    PAGE.data.isShow = true
    let showAgain = document.getElementById('show-again')
    showAgain.style.display = 'block'
  },
  againSentence: function () {
    PAGE.data.isShow = false
    PAGE.toggleActive()
    let showAgain = document.getElementById('show-again')
    showAgain.style.display = 'none'
  }

}
PAGE.init()


