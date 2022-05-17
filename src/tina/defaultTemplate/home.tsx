import { IPageData } from "./types";

const homeData: IPageData = {
  blocks: [
    {
      backgroundImage: "/images/landing/home/bgHome.png",
      _template: "headerBlock",
    },
    {
      titleLeft: "Hello!",
      titleLeftAlign: "left",
      leftItems: [
        {
          text: "Welcome to Esoque, the foundation of the future of the financial world. We are the best experts in the financial industry with more than 16 years of modern finance and information technologies knowledge.",
        },
      ],
      leftItemsAlign: "left",

      titleRight: "We build Unicorns!",
      titleRightAlign: "right",
      rightItems: [
        {
          text: "Yes, that is true, you can make a new PayPal, Stripe or Revolut, or even launch the financial projects for the space",
        },
        {
          text: "Our team would help you to find the proper jurisdiction for your business and get all required regulatory permissions to launch your unicorn.",
        },
        {
          text: "If you are a well-established business we will help you to expand it and grow your opportunities. We have successfully been working with European banks to develop their financial infrastructure and get regulatory permissions.",
        },
      ],
      rightItemsAlign: "right",

      image: "/images/landing/home/imgHomeUnicorn.png",
      widthImg: "200",
      heightImg: "503",
      backgroundColor: "#101010",
      _template: "helloBlock",
    },
    {
      titleBlock: "Services we offer",
      items: [
        {
          titleItem: "Unicorns",
          subtitleItem:
            "We would help to build a new revolutionary business. Need help with the regulatory permissions? Here we are!",
          linkItem: "/unicorns",
        },
        {
          titleItem: "Sidious",
          subtitleItem:
            "If you are looking for a solution that would help you to work with your customers, our KYC platform is the best choice. Automate your B2B or B2C flows!",
          linkItem: "/sidious",
        },
        {
          titleItem: "Dark Side",
          subtitleItem:
            "Come to the dark side and join us. We will help you to incorporate the company in a few hours and get started your business with the space speed!",
          linkItem: "/darkside",
        },
        {
          titleItem: "Eco",
          subtitleItem:
            "We can help you not only to grow your business but also to save the planet. Join the growing trend of eco-friendly fintech startups with us!",
          linkItem: "/eco",
        },
      ],
      titleColor: "#E2F063",
      textColor: "#ffffff",
      _template: "servicesBlock",
    },
    {
      text: "Build the future with us and we will open you to a new dimension of FinTech.",
      textColor: "#ea93d1",
      image: "/images/landing/home/imgHomeMoneyBag.png",
      backgroundImage: "/images/landing/home/bgHome2.png",
      _template: "conclusionBlock",
    },
  ],
};
export default homeData;
