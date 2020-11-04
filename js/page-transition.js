function pageTransition() {
  return new Promise(done => {
    var tl = gsap.timeline({
      onComplete: () => {
        done()
      }
    })
  
    tl.to('ul.transition li', { duration: 0.5, scaleY: 1, transformOrigin: 'bottom left', stagger: 0.2 })
    tl.to('main', { duration: 0.001, alpha: 0 })
  })
}

function contentAnimation() {

  var tl = gsap.timeline()

  tl.to('ul.transition li', { duration: 0.3, scaleY: 0, transformOrigin: 'bottom left', stagger: 0.1, delay: 0.1 })
  tl.from('.left', { duration: 1.5, translateY: 50, opacity: 0 })
  tl.from('img', { y: 50, alpha: 0, duration: 1 }, '-=0.8')
}

function delay(n) {
  n = n || 2000
  return new Promise(done => {
    setTimeout(() => {
      done()
    }, n)
  })
}

barba.init({
  sync: true,

  transitions: [{
    async leave(data) {
      const done = this.async()

      await pageTransition()
      done()
    },

    async enter(data) {
      contentAnimation()
    },

    async once(data) {
      contentAnimation()
    }
  }]
})