module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    extend: {
      colors: {
        chatRobot: {
          primary: "#56C4C5",
          secondary: "#F5CA52",
          warning: "#FF5D50",
          black: "#221E1F",
          gray: "#747474",
          light_gray: "#F5F5F5",
        },
      },
      backgroundImage: {
        ball1:
          "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/ball01.svg')",
        ball2:
          "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/ball02.svg')",
        ball3:
          "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/ball03.svg')",
        banner:
          "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/bg_home.svg')",
        "banner-sm":
          "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/bg_home_sm.svg')",
        icon01:
          "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon01.svg')",
        icon02:
          "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon02.svg')",
        icon03:
          "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon03.svg')",
        icon04:
          "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon04.svg')",
        user01:
          "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/user01.jpg')",
        user02:
          "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/user02.jpg')",
        user03:
          "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/user03.jpg')",
        footer:
          "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/home_footer.svg')",
        "footer-sm":
          "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/footer_sm.svg')",
        "charge-banner-sm":
          "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/banner_sm.svg')",
        "charge-banner":
          "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/banner.svg')",
          "plus":"url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon_plus.svg')",
          "minus":"url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon_minus.svg')",
      },
    },
    container: {
      center: true,
      padding: "20px",
    },
    fontFamily: {
      noto: ["Noto Sans TC", "sans-serif"],
      wendy: ["Wendy One", "Noto Sans TC", "sans-serif"],
    },
    screens: {
      sm: "376px",
      // => @media (min-width: 376px) { ... }

      "sm-md": "500px",
      // => @media (min-width: 500px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1128px",
      // => @media (min-width: 1128px) { ... }
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
