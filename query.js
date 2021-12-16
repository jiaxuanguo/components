const https = require('https')

const query = (model, store) => {
  const url = `https://www.apple.com.cn/shop/fulfillment-messages?parts.0=${model.code}&store=${store.code}`
  https.get(url, res => {
    if (res.statusCode === 200) {
      const dataArray = []
      res.on('data', chunk => dataArray.push(chunk))
      res.on('end', () => {
        try {
          const data = JSON.parse(dataArray.join(''))
          const available = data.body.content.pickupMessage.stores[0].partsAvailability[model.code].storeSelectionEnabled
          if (available) {
            console.log(model.name, store.name)
          }
        } catch (e) {
          console.log(e)
        }
      })
    }
  })
}

const MODELS = [
  { code: 'MKGP3CH/A', name: '14-灰' },
  { code: 'MKGR3CH/A', name: '14-银' },
  // { code: 'MKGQ3CH/A', name: '14中配-灰' },
  // { code: 'MKGT3CH/A', name: '14中配-银' },
  { code: 'MK183CH/A', name: '16-灰' },
  { code: 'MK1E3CH/A', name: '16-银' },
  // { code: 'MK193CH/A', name: '16中配-灰' },
  // { code: 'MK1F3CH/A', name: '16中配-银' },
]
const STORES = [
  { code: 'R493', name: '新街口' },
  { code: 'R703', name: '鼓楼' },
  { code: 'R643', name: '虹悦城' },
  { code: 'R574', name: '无锡' },
  { code: 'R688', name: '苏州' },
]
MODELS.forEach(model => STORES.forEach(store => query(model, store)))
