const get = (req,res) =>{
    res.send([
      {
        "id" : 1,
        "Title" : "USB-C Digital AV Multiport Adapter",
        "ImageAsset" :"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUF82?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1590526633000",
        "CategoryName":"adaptar",
        "Price":"6900",
        "PublishedDate" : " feb 18 2021",
        "BlogContent" : "The USB-C Digital AV Multiport Adapter lets you connect your USB-C–enabled Mac or iPad to an HDMI display, while also connecting a standard USB device and a USB-C charging cable.This adapter allows you to mirror your Mac or iPad display to your HDMI-enabled TV or display.",
      },
      {
        "id": 2,
        "Title" : "Air Pods Pro ",
        "ImageAsset" :"https://www.re-thinkingthefuture.com/wp-content/uploads/2021/08/A4907-10-Upcoming-Apple-products-built-and-conceptual-Image-2.jpg",
        "CategoryName":"Air pods",
        "Price":"26300",
        "fp":"fp",
        "PublishedDate" : " Oct 29 2022",
        "BlogContent" : " The design of AirPods Pro is expected to eliminate a short stem that sticks out from the bottom, resulting in an even more rounded shape closer in design to competing for wireless earbuds from Samsung and Google.",
      },
      {
        "id": 3,
        "Title" : " AIR Pods Max ",
        "ImageAsset" :"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-silver-202011?wid=470&hei=556&fmt=png-alpha&.v=1604021221000",
        "CategoryName":"Wireless Head Phones",
        "Price":"66100",
        "fp":"fp",
        "PublishedDate" : " Dec 15 2022",
        "BlogContent" : "  Accessing Dolby Atmos features requires Dolby Atmos–capable devices. Playback quality will depend on hardware, audio accessories and internet connection.",
      },
      {
        "id": 4,
        "Title" : "Home Pod mini ",
        "ImageAsset" :"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-blue-202110_FV1?wid=934&hei=440&fmt=jpeg&qlt=95&.v=1633086025000",
        "CategoryName":"Home Pod mini",
        "Price":"8900",
        "fp":"fp",
        "PublishedDate" : "Jul 10 2022",
        "BlogContent" : "Control your smart home accessories with just your voice using HomePod mini.Privacy at home is essential. HomePod mini helps you keep your data private and secure.",
      },

    ])
}
module.exports.apiController = get;