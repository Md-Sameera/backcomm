const get = (req,res) =>{
    res.send([
        {
            "Title" : " Magic Mouse - Black Multi-Touch Surface",
            "ImageAsset" :"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMQ3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1645138486301",
            "CategoryName":"Mouse",
            "Price":"9500",
            "fp":"fp",
            "PublishedDate" : "Aug 8 2009",
            "BlogContent" : " Magic Mouse is wireless and rechargeable, with an optimised foot design that lets it glide smoothly across your desk. The Multi-Touch surface allows you to perform simple gestures such as swiping between web pages and scrolling through documents. ",
          },
      
      
    ])
}
module.exports.apiController = get;