const request = require('request')
const cheerio = require("cheerio")
const url= "https://www.awwwards.com/websites/sound-audio/"
const scrappData = (url)=>{
    return new Promise((resolve,reject)=>{
        request(url, async(error,response,html)=>{
        
                if(!error&& response.statusCode==200){
                    const $ = await cheerio.load(html)
                     const wordCount = $('body').text().trim().length
                     const imageUrl =[]
                    $("img").each((index, imageElement) => {
                        const imgUrl = $(imageElement).attr("src");
                        imageUrl.push(imgUrl)
                    });
                    resolve({wordCount,mediaLinks,imageUrl})
                }else{
                   reject(error.code)
                }
            })
        })
}