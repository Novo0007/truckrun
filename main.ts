controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
    truck.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acid`, function (sprite, location) {
    game.over(false)
})
let truck: Sprite = null
truck = sprites.create(assets.image`truck3`, SpriteKind.Player)
truck.ay = 500
truck.vx = 100
scene.cameraFollowSprite(truck)
animation.runImageAnimation(
truck,
assets.animation`truck3 animated`,
100,
true
)
