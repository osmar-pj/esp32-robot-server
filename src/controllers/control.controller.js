import mqtt from 'mqtt'

export const move = async (req, res) => {
    try {
        console.log(req.body)
        const gancho = req.body.gancho
        const options = {
            clientId: 'CONTROL-MOVE-ROBOT',
            username: 'ServerNode',
            password: ''
          }
          const connectUrl = 'ws://143.198.128.180:8083/mqtt'
          const client = mqtt.connect(connectUrl, options)
          client.publish('robot/brazo', gancho.toString())
        res.status(200).json({
            saved: true
        })
    } catch (error) {
        console.error(error)
    }
}