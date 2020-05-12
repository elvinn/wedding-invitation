/* eslint-disable no-console */
const tcb = require('@cloudbase/node-sdk')

const app = tcb.init({ env: 'elvinn-1aa07a' })
const db = app.database()
const barrageCollection = db.collection('wedding-invitation-barrage')

exports.main = async (event) => {
  const { barrage = '' } = event
  console.log('barrage', barrage)
  if (!barrage) {
    return { code: -1, msg: '内容为空' }
  }

  try {
    await barrageCollection.add({
      content: barrage,
      createdTs: Date.now(),
    })
  } catch (e) {
    console.error(e)
    return { code: -2, msg: '添加失败' }
  }


  return { code: 0, msg: '添加成功' }
}