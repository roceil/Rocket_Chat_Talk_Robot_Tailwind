module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    extend: {
      colors : {
        'chatRobot' : {
          primary : '#56C4C5',
          secondary : '#F5CA52',
          warning : '#FF5D50',
          black : '#221E1F',
          gray : '#747474',
          light_gray :'#F5F5F5' 
        }
      },
      backgroundImage : {
        'banner-sm' : "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/bg_home_sm.svg')",
        'footer' : "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/home_footer.svg')",
        'footer-sm' : "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/footer_sm.svg')",
      },
    },  
    container: {
      center: true,
      padding: '20px',
    },
    fontFamily:{
      'noto' : ['Noto Sans TC', 'sans-serif']
    },
    screens: {
      'sm': '376px',
      // => @media (min-width: 376px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1128px',
      // => @media (min-width: 1128px) { ... }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}