const get = (req,res) =>{
    res.send([
    {
        "id" : 1,
        "Title" : " 35W Dual USB-C Port Power Adapter",
        "ImageAsset" :"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MNWP3_GEO_EMEA?wid=532&hei=582&fmt=png-alpha&.v=1653576603172",
        "CategoryName":"charger",
        "Price":"5800",
        "PublishedDate" : " Jan 18 2022",
        "BlogContent" : " The 35W Dual USB‑C Port Power Adapter allows you to charge two devices at the same time, whether you’re at home, in the office or on the go. Apple recommends using it with MacBook Air. You can also use it with iPhone, iPad, Apple Watch and AirPods.Pair this power adapter with the World Travel Adapter Kit to charge in other regions around the world.",
        },
      {
        "id" : 2,
        "Title" : " Apple’s own lightning charging cable",
        "ImageAsset" :"https://www.gannett-cdn.com/-mm-/925c90cac2950828bbb61819371c14292ee6081b/c=0-0-792-446/local/-/media/2021/03/08/USATODAY/usatsports/Reviewed.com-RvEW-26886-apple-cable_Cropped.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp",
        "CategoryName":"Charger",
        "Price":"3400",
        "fp":"2",
        "PublishedDate" : "Aug 8 2009",
        "BlogContent" : " This might not be as exciting of a purchase as, say, a new iPhone, but if you own any Apple product, chances are you’re going to need at least one lightning cable, which are the standard for charging most of the brand’s electronics. When we tested the best lightning cables, we found that Apple’s own USB-C option is the best for fast charging ",
      },
      
      
    ])
}
module.exports.apiController = get;