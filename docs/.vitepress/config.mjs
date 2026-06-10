export default {
  title: "Hound Releases",
  description: "Another release rom from standalone dev",
  themeConfig: {
    nav: [
      { text: "ROM", link: "/releases/rom/" },
    ],
    sidebar: {
      "/releases/rom/": [
        { text: "All ROMs", link: "/releases/rom/" },
        {
          text: "ROMs",
          items: [
            { text: "PixelOS", link: "/releases/rom/pixelos/" },
            { text: "LunarisAOSP", link: "/releases/rom/lunaris/" },
            { text: "crDroid", link: "/releases/rom/crdroid/" },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/gutssnv" },
      { icon: "instagram", link: "https://www.instagram.com/99eiqr" }
    ]
  }
}
