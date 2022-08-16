const get = (req,res) =>{
    res.send([
      {
        "id" : 1,
        "Title" : "Iphone 12",
        "ImageAsset" :"https://www.re-thinkingthefuture.com/wp-content/uploads/2021/08/A4907-10-Upcoming-Apple-products-built-and-conceptual-Image-1.jpg",
        "CategoryName":"iphone",
        "Price":"49900",
        "PublishedDate" : "Aug 8 2021",
        "BlogContent" : " It is also expected to have an A15 chip, a faster 5G network, and better battery life. It has same size of Iphone 13. ",
      },
      {
        "id" : 2,
        "Title" : "Iphone 14",
        "ImageAsset" : "https://cdn.mos.cms.futurecdn.net/Mwt64pGtzxTzxdhv5ySLFK-970-80.jpg.webp",
        "CategoryName":"iphone",
        "Price":"99900",
        "PublishedDate" : "Aug 8 2023",
        "BlogContent" : " Back in March, the analyst Ming-Chi Kuo revealed that while the iPhone 14 Pro will get the new A16 Bionic chip as per usual, the regular iPhone 14 models will stick with the same A15 processor used in the iPhone 13 and iPhone SE 3.  ",
      },
      {
        "id" : 3,
        "Title" : " IPHONE 13 (PRODUCT)RED ",
        "ImageAsset" :"https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1638557435572-UYISRNGX323H0CMYA0XM/iPhone+13.png?format=300w",
        "CategoryName":"iphone",
        "Price":"71990",
        "PublishedDate" : " Aug 12 2021",
        "BlogContent" : " Your iPhone will arrive ready to go with your number and plan information. If you connect with a carrier later, once your new phone arrives, you can insert a physical SIM card or use eSIM from any carrier that provides service for iPhone.",
      },
      {
        "id" : 4,
        "Title" : " Apple PenciAPPLE IPHONE 7 SMART BATTERY CASE",
        "ImageAsset" :"https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1543643144690-SW9IHVN5W8DZK59XHDF4/Apple_iPhone-7-Smart-Battery-Case.png?format=300w",
        "CategoryName":"battery case",
        "Price":"5800",
        "PublishedDate" : " sept 18 2022",
        "BlogContent" : " Charge your iPhone and battery case simultaneously for increased talk time up to 26 hours, Internet use up to 22 hours on LTE, and even longer audio and video playback.* With the Smart Battery Case on, the intelligent battery status is displayed on the iPhone Lock screen and in Notification Center, so you know exactly how much charge you have left.",
      },
      
      {
        "id":5,
        "Title" : "Iphone SE",
        "ImageAsset" :"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-midnight-witb-202203?wid=190&hei=392&fmt=jpeg&qlt=95&.v=1644951336059",
        "CategoryName":"iphone",
        "Price":"54900",
        "PublishedDate" : " Oct 29 2019",
        "BlogContent" : " As part of our efforts to reach carbon neutrality by 2030, iPhone SE does not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning cable that supports fast charging and is compatible with USB‑C power adapters and computer ports.        ",
      },
      
      
      {
        "id" : 6,
        "Title" : "I-Phone 13",
        "ImageAsset" :"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-green-witb-202203?wid=164&hei=392&fmt=jpeg&qlt=95&.v=1644964732550",
        "CategoryName":"iphone",
        "Price":"86900",
        "PublishedDate" : " feb 18 2021",
        "BlogContent" : "As part of our efforts to reach carbon neutrality by 2030, iPhone 13 and iPhone 13 mini do not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports.",
      },
    ])
  }
  module.exports.apiController = get;