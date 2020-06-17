const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    mini:true,
    loop:"all",
    order:'random',
    audio: [
      {
        name: "dylanf",
        artist: '卡农',
        url: '/dist/dylanf.mp3',
        cover: '/images/cover3.jpg',
      },
      {
        name: "dark",
        artist: '吉他',
        url: '/dist/dark.mp3',
        cover: '/images/cover2.jpg',
      },
      {
        name: "moon",
        artist: 'moon',
        url: '/dist/riben.mp3',
        cover: '/images/cover1.jpg',
      },
      {
        name: "sea",
        artist: '佚名',
        url: '/dist/sea.mp3',
        cover: '/images/cover4.jpg',
      }
    ]
});