'use strict'

export default class Sprite2 extends PIXI.Sprite {
  constructor(texture, channelMask) {
    super(texture)
    this.channelMask = channelMask
  }
}
