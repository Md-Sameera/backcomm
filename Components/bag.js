const get = (req,res) =>{
    res.send([
      {
        "id" : 1,
        "Title" : "T-shirt",
        "ImageAsset" :"https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1633622907264-1B9ZIAYTQDJ6YE89Q5NF/Jeep%C2%AE+%28PRODUCT%29RED+The+North+Face+Ladies+Mountain+Peaks+1%3A4+Zip+Fleece.png",
        "CategoryName":"shirt",
        "Price":"499",
        "PublishedDate" : "Aug 8 2022",
        "BlogContent" : " Over 40% of this (RED) Originals purchase goes toward (RED)'s campaigns focused on raising awareness and funds to fight AIDS and COVID-19.Lightweight, Classic fit, Double-needle sleeve and bottom hem",
      },
      {
        "id" : 2,
        "Title" : "JEEP® THE NORTH FACE GENERATOR BACKPACK",
        "ImageAsset" : "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1633622904192-9JMQV2M2MIAGG600687V/Jeep%C2%AE+%28PRODUCT%29RED+The+North+Face+Generator+Backpack.png",
        "CategoryName":"bag",
        "Price":"129",
        "PublishedDate" : "9th April",
        "BlogContent" : " Backpack with exclusive features . Contains space for its own products  ",
      },
      {
        "id" : 3,
        "Title" : " JEEP® COUNTER STOOL",
        "ImageAsset" :"https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1633622893194-0WQPEEQGEGULTMXO1R0X/Jeep%C2%AE+%28PRODUCT%29RED+Counter+Stool.png",
        "CategoryName":"stool",
        "Price":"999",
        "PublishedDate" : " Aug 12 2021",
        "BlogContent" : " Mainly used for outdoor vacations . lightweight to carry.",
      },
      {
        "id" : 4,
        "Title" : " MOREL SAGE SUNGLASSES - RED",
        "ImageAsset" :"https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1648787409949-GQW4EJEEUO4RZO49WB98/Morel_SageSunglassesjpg.jpg",
        "CategoryName":"glasses",
        "Price":"5800",
        "PublishedDate" : " sept 18 2022",
        "BlogContent" : " Make your look cool with this shades.",
      },
    
    ])
  }
  module.exports.apiController = get;