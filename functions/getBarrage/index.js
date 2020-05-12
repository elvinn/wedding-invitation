/* eslint-disable no-console */
const tcb = require('@cloudbase/node-sdk')

const app = tcb.init({ env: 'elvinn-1aa07a' })
const db = app.database()
const barrageCollection = db.collection('wedding-invitation-barrage')

exports.main = async () => {
  let result

  try {
    result = await barrageCollection
      .orderBy('createdTs', 'desc')
      .limit(200)
      .field({ content: true })
      .get()
      .then(({ data = [] } = {}) => {
        return data.map(item => item.content)
      })
  } catch (e) {
    console.error(e)
    return { code: -1, msg: '查询失败' }
  }

  return { code: 0, result }
}