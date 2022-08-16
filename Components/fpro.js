const get = (req,res) =>{
    res.send([
      {
        "Title" : " Apple Watch Series ^",
        "ImageAsset" :"https://www.gannett-cdn.com/-mm-/925c90cac2950828bbb61819371c14292ee6081b/c=0-0-792-446/local/-/media/2021/03/08/USATODAY/usatsports/apple-watch-series-6-4__1_.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp",
        "CategoryName":"Apple Watch",
        "Price":"25000",
        "PublishedDate" : " sept 9 2021",
        "BlogContent" : "The Apple Watch Series 6 has a OLED touchscreen that’s extremely easy to control, and the Digital Crown on the side of the watch allows you to summon Siri with a touch or scroll through various menus. It also requires daily charging, but it’s a small price to pay for such a comprehensive smartwatch.",
      },
      {
        "Title" : "14-inch MacBook Pro ",
        "ImageAsset" :"https://photos5.appleinsider.com/gallery/48754-95199-macbok-air-xl.jpg",
        "CategoryName":"Mac book",
        "Price":"89000",
        "PublishedDate" : " Oct 29 2019",
        "BlogContent" : " That model offers the Touch Bar, which in a few years' time will be looked back on more fondly than it has now, and of course it has the new M2 processor. It just doesn't add anything else, and what it leaves out — connectivity, performance — means that the machines either side of it seem better value.",
      },
      {
        "Title" : "Air Pods Pro ",
        "ImageAsset" :"https://www.re-thinkingthefuture.com/wp-content/uploads/2021/08/A4907-10-Upcoming-Apple-products-built-and-conceptual-Image-2.jpg",
        "CategoryName":"Air pods",
        "Price":"6000",
        "fp":"5",
        "PublishedDate" : " Oct 29 2022",
        "BlogContent" : " The design of AirPods Pro is expected to eliminate a short stem that sticks out from the bottom, resulting in an even more rounded shape closer in design to competing for wireless earbuds from Samsung and Google.",
      },
      {
        "Title" : " AR Smart Glasses ",
        "ImageAsset" :"https://www.re-thinkingthefuture.com/wp-content/uploads/2021/08/A4907-10-Upcoming-Apple-products-built-and-conceptual-Image-4.jpg",
        "CategoryName":"Smart Glass",
        "Price":"20000",
        "fp":"4",
        "PublishedDate" : " Dec 15 2022",
        "BlogContent" : "  Apple is working on Augmented Reality Smart Glasses . These glasses are assumed to feature a dedicated display, a built-in processor, and an ‘rOS’ or ‘Reality Operating System’. It is said that its inputs will be via touch panels, voice activation, and head gesture. It is also expected to support applications ranging from texting to mapping.",
      },
      {
        "Title" : "Apple Cars ",
        "ImageAsset" :"https://images.hindustantimes.com/auto/img/2021/12/23/1600x900/apple_icar_youtube_1612505634970_1612505641070_1640233113322.jpg",
        "CategoryName":"Apple Car",
        "Price":"6,89,000",
        "fp":"3",
        "PublishedDate" : "2023",
        "BlogContent" : " Apple Cars are one of the most awaited upcoming products of apple. It said that with this launch, Apple would be revolutionizing the automobile sector too. Apple cars are expected to be fully autonomous vehicles, rather than just an autonomous car software offering. The launch is expected somewhere between 2023 to 2025.",
      },
      {
        "Title" : " Apple’s own lightning charging cable",
        "ImageAsset" :"https://www.gannett-cdn.com/-mm-/925c90cac2950828bbb61819371c14292ee6081b/c=0-0-792-446/local/-/media/2021/03/08/USATODAY/usatsports/Reviewed.com-RvEW-26886-apple-cable_Cropped.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp",
        "CategoryName":"Charger",
        "Price":"3400",
        "fp":"2",
        "PublishedDate" : "Aug 8 2009",
        "BlogContent" : " This might not be as exciting of a purchase as, say, a new iPhone, but if you own any Apple product, chances are you’re going to need at least one lightning cable, which are the standard for charging most of the brand’s electronics. When we tested the best lightning cables, we found that Apple’s own USB-C option is the best for fast charging ",
      },
      {
        "Title" : "Air tags",
        "ImageAsset" :"https://www.re-thinkingthefuture.com/wp-content/uploads/2021/08/A4907-10-Upcoming-Apple-products-built-and-conceptual-Image-8.jpg",
        "CategoryName":"tag",
        "Price":"5432",
        "fp":"1",
        "PublishedDate" : "Aug 8 2022",
        "BlogContent" : " As said the new Air Tags include 31 emojis that can be added to the stainless steel model for free and can be personalized with the name as well. It is expected to have a replaceable battery, and protection against water and dust too. They are said to have an integrated speaker. One can attach them to their gym bag, laptop bag, and anything that needs attention. ",
      },
      
    ])
}
module.exports.apiController = get;