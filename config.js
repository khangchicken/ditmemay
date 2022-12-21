module.exports = {
    app: {
        token: 'OTcxMzMwNTA2NTcyNTg3MDM5.G0gAMI.00SX6MUkkvCZh6fmaZr0axAWISbK_eIqZ9Po44',
        playing: 'đang simp',
        global: true,
        guild: 'd!'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
