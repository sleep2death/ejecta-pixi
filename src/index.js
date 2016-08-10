'use strict'

import Sprite from './core/Sprite.js'

// create the canvas by Ejecta
const canvas = document.getElementById('canvas')

const width = window.innerWidth
const height = window.innerHeight

// pass the canvas to pixi.js
const r = new PIXI.WebGLRenderer(width, height, {view: canvas, backgroundColor: 0xFF9900})

const stage = new PIXI.Container()

// detect supported compressed textures
// PIXI.loader.before(PIXI.compressedTextures.extensionChooser(['@1x.json', '@1x.png', '@1x.pvr']))

// load the picture from local assets, and add to the stage
// PIXI.loader.add('logo', './assets/pixi.pvr', {metadata: {choice: ['.pvr']}}).load((loader, resources) => {
PIXI.loader.add('logo', './assets/pixi.png', {metadata: {choice: ['.png']}}).load((loader, resources) => {
  // r.plugins.compressedTextureManager.updateAllTextures(resources, true)

  const sprite = new Sprite(resources.logo.texture)
  sprite.anchor.x = sprite.anchor.y = sprite.scale.x = sprite.scale.y = 0.5

  sprite.x = width * 0.5
  sprite.y = height * 0.5

  stage.addChild(sprite)
})

// do the update
function animate() {
  r.render(stage)
}

setInterval(animate, 30)
