var APP_DATA = {
  "scenes": [
    {
      "id": "0-monoambiente",
      "name": "Monoambiente",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4630569717592046,
          "pitch": 0.19174837343702222,
          "rotation": 0,
          "target": "1-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4482347317699258,
          "pitch": 0.18900989365598164,
          "rotation": 0,
          "target": "0-monoambiente"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "TIPOLOGIA 5 CHAQUIES",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
