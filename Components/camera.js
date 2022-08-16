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
    ])
  }
  module.exports.apiController = get;